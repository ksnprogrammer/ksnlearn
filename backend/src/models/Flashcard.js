import mongoose from 'mongoose';

const flashcardSchema = new mongoose.Schema({
  front: {
    type: String,
    required: true,
    trim: true
  },
  back: {
    type: String,
    required: true,
    trim: true
  },
  difficulty: {
    type: String,
    enum: ['easy', 'medium', 'hard'],
    default: 'medium'
  },
  tags: [String],
  lastReviewed: Date,
  nextReviewDate: Date,
  reviewCount: {
    type: Number,
    default: 0
  }
});

const deckSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    trim: true
  },
  subject: {
    type: String,
    enum: ['biology', 'chemistry', 'physics', 'other'],
    required: true
  },
  topic: String,
  cards: [flashcardSchema],
  creator: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  isPublic: {
    type: Boolean,
    default: true
  },
  studentsProgress: [{
    student: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
    cardsLearned: Number,
    lastStudied: Date
  }]
}, {
  timestamps: true
});

const FlashcardDeck = mongoose.model('FlashcardDeck', deckSchema);

export default FlashcardDeck;