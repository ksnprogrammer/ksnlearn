import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 3
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true
  },
  password: {
    type: String,
    required: true,
    minlength: 6
  },
  role: {
    type: String,
    enum: ['student', 'admin'],
    default: 'student'
  },
  profile: {
    firstName: String,
    lastName: String,
    avatar: String,
    bio: String
  },
  progress: {
    testScores: [{
      subject: String,
      topic: String,
      score: Number,
      date: { type: Date, default: Date.now }
    }],
    flashcardProgress: [{
      deckId: { type: mongoose.Schema.Types.ObjectId, ref: 'FlashcardDeck' },
      cardsLearned: Number,
      lastReviewed: Date
    }],
    mcqProgress: [{
      quizId: { type: mongoose.Schema.Types.ObjectId, ref: 'Quiz' },
      score: Number,
      completedAt: Date
    }]
  }
}, {
  timestamps: true
});

const User = mongoose.model('User', userSchema);

export default User;