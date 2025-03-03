import express from 'express';
import { createDeck, getPublicDecks, getUserDecks, getDeck, updateDeck, deleteDeck } from '../controllers/flashcardController.js';
import { auth } from '../middleware/auth.js';

const router = express.Router();

// Flashcard routes
router.post('/', auth, createDeck);
router.get('/public', getPublicDecks);
router.get('/user', auth, getUserDecks);
router.get('/:id', getDeck);
router.put('/:id', auth, updateDeck);
router.delete('/:id', protect, deleteFlashcard);

export default router;