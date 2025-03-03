import FlashcardDeck from '../models/Flashcard.js';

// Create a new flashcard deck
export const createDeck = async (req, res) => {
  try {
    const { title, description, subject, topic } = req.body;
    const deck = new FlashcardDeck({
      title,
      description,
      subject,
      topic,
      creator: req.user.userId
    });

    await deck.save();
    res.status(201).json(deck);
  } catch (error) {
    res.status(500).json({ message: 'Error creating deck', error: error.message });
  }
};

// Get all decks (with optional filters)
export const getDecks = async (req, res) => {
  try {
    const { subject, search } = req.query;
    let query = {};

    if (subject) query.subject = subject;
    if (search) {
      query.$or = [
        { title: { $regex: search, $options: 'i' } },
        { description: { $regex: search, $options: 'i' } }
      ];
    }

    const decks = await FlashcardDeck.find(query)
      .populate('creator', 'username profile')
      .sort({ createdAt: -1 });

    res.json(decks);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching decks', error: error.message });
  }
};

// Get a specific deck
export const getDeck = async (req, res) => {
  try {
    const deck = await FlashcardDeck.findById(req.params.id)
      .populate('creator', 'username profile');

    if (!deck) {
      return res.status(404).json({ message: 'Deck not found' });
    }

    res.json(deck);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching deck', error: error.message });
  }
};

// Add a card to a deck
export const addCard = async (req, res) => {
  try {
    const { front, back, difficulty, tags } = req.body;
    const deck = await FlashcardDeck.findById(req.params.id);

    if (!deck) {
      return res.status(404).json({ message: 'Deck not found' });
    }

    if (deck.creator.toString() !== req.user.userId) {
      return res.status(403).json({ message: 'Not authorized to modify this deck' });
    }

    deck.cards.push({ front, back, difficulty, tags });
    await deck.save();

    res.status(201).json(deck);
  } catch (error) {
    res.status(500).json({ message: 'Error adding card', error: error.message });
  }
};

// Update a card in a deck
export const updateCard = async (req, res) => {
  try {
    const { front, back, difficulty, tags } = req.body;
    const deck = await FlashcardDeck.findById(req.params.deckId);

    if (!deck) {
      return res.status(404).json({ message: 'Deck not found' });
    }

    const card = deck.cards.id(req.params.cardId);
    if (!card) {
      return res.status(404).json({ message: 'Card not found' });
    }

    if (deck.creator.toString() !== req.user.userId) {
      return res.status(403).json({ message: 'Not authorized to modify this deck' });
    }

    card.front = front || card.front;
    card.back = back || card.back;
    card.difficulty = difficulty || card.difficulty;
    card.tags = tags || card.tags;

    await deck.save();
    res.json(deck);
  } catch (error) {
    res.status(500).json({ message: 'Error updating card', error: error.message });
  }
};

// Update student's progress
export const updateProgress = async (req, res) => {
  try {
    const { cardsLearned } = req.body;
    const deck = await FlashcardDeck.findById(req.params.id);

    if (!deck) {
      return res.status(404).json({ message: 'Deck not found' });
    }

    const progressIndex = deck.studentsProgress.findIndex(
      (progress) => progress.student.toString() === req.user.userId
    );

    if (progressIndex > -1) {
      deck.studentsProgress[progressIndex].cardsLearned = cardsLearned;
      deck.studentsProgress[progressIndex].lastStudied = new Date();
    } else {
      deck.studentsProgress.push({
        student: req.user.userId,
        cardsLearned,
        lastStudied: new Date()
      });
    }

    await deck.save();
    res.json(deck.studentsProgress);
  } catch (error) {
    res.status(500).json({ message: 'Error updating progress', error: error.message });
  }
};