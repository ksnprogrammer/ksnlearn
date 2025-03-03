import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './FlashcardDeck.css';
import DynamicBackground from './DynamicBackground';
import '../styles/theme.css';

interface Card {
  _id: string;
  front: string;
  back: string;
  difficulty: 'easy' | 'medium' | 'hard';
  tags: string[];
}

interface FlashcardDeck {
  _id: string;
  title: string;
  description: string;
  subject: 'biology' | 'chemistry' | 'physics' | 'other';
  topic: string;
  cards: Card[];
  creator: {
    username: string;
    profile: {
      avatar: string;
    };
  };
}

const FlashcardDeck: React.FC = () => {
  const [decks, setDecks] = useState<FlashcardDeck[]>([]);
  const [selectedDeck, setSelectedDeck] = useState<FlashcardDeck | null>(null);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchDecks();
  }, []);

  const fetchDecks = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/flashcards');
      setDecks(response.data);
      setLoading(false);
    } catch (err) {
      setError('Failed to fetch flashcard decks');
      setLoading(false);
    }
  };

  const selectDeck = (deck: FlashcardDeck) => {
    setSelectedDeck(deck);
    setCurrentCardIndex(0);
    setIsFlipped(false);
  };

  const nextCard = () => {
    if (selectedDeck && currentCardIndex < selectedDeck.cards.length - 1) {
      setCurrentCardIndex(prev => prev + 1);
      setIsFlipped(false);
    }
  };

  const previousCard = () => {
    if (currentCardIndex > 0) {
      setCurrentCardIndex(prev => prev - 1);
      setIsFlipped(false);
    }
  };

  const flipCard = () => {
    setIsFlipped(!isFlipped);
  };

  if (loading) return <div className="loading">Loading flashcards...</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <div className="flashcard-container">
      <DynamicBackground lineColor="#4b83ff" speed={15} lineCount={8} />
      {!selectedDeck ? (
        <div className="deck-list">
          <h2 className="gradient-text-physics">Available Flashcard Decks</h2>
          <div className="deck-grid">
            {decks.map(deck => (
              <div 
                key={deck._id} 
                className={`deck-card ${deck.subject}`}
                onClick={() => selectDeck(deck)}
              >
                <h3 className={`gradient-text-${deck.subject}`}>{deck.title}</h3>
                <p>{deck.description}</p>
                <div className="deck-info">
                  <span>{deck.cards.length} cards</span>
                  <span className={`gradient-text-${deck.subject}`}>{deck.subject}</span>
                </div>
              </div>
            ))}          
          </div>
        </div>
      ) : (
        <div className="study-mode">
          <div className="deck-header">
            <h2 className={`gradient-text-${selectedDeck.subject}`}>{selectedDeck.title}</h2>
            <button onClick={() => setSelectedDeck(null)} className="back-btn">
              Back to Decks
            </button>
          </div>
          <div className="card-container">
            <div 
              className={`flashcard ${isFlipped ? 'flipped' : ''} ${selectedDeck.subject}`}
              onClick={flipCard}
            >
              <div className="card-front">
                {selectedDeck.cards[currentCardIndex].front}
              </div>
              <div className="card-back">
                {selectedDeck.cards[currentCardIndex].back}
              </div>
            </div>
            <div className="card-controls">
              <button 
                onClick={previousCard}
                disabled={currentCardIndex === 0}
                className={selectedDeck.subject}
              >
                Previous
              </button>
              <span>{currentCardIndex + 1} / {selectedDeck.cards.length}</span>
              <button 
                onClick={nextCard}
                disabled={currentCardIndex === selectedDeck.cards.length - 1}
                className={selectedDeck.subject}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FlashcardDeck;