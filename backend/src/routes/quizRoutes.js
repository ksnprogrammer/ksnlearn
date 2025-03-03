import express from 'express';
import { createQuiz, getQuizzes, getQuiz, submitQuiz, updateQuiz, deleteQuiz } from '../controllers/quizController.js';
import { protect } from '../middleware/auth.js';

const router = express.Router();

// Quiz routes
router.post('/', protect, createQuiz);
router.get('/', getQuizzes);
router.get('/:id', getQuiz);
router.post('/:id/submit', protect, submitQuiz);
router.put('/:id', protect, updateQuiz);
router.delete('/:id', protect, deleteQuiz);

export default router;