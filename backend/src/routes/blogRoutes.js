import express from 'express';
import { createBlog, getBlogs, getBlog, updateBlog, deleteBlog, addComment, toggleLike } from '../controllers/blogController.js';
import { protect } from '../middleware/auth.js';

const router = express.Router();

// Blog routes
router.post('/', protect, createBlog);
router.get('/', getBlogs);
router.get('/:id', getBlog);
router.put('/:id', protect, updateBlog);
router.delete('/:id', protect, deleteBlog);
router.post('/:id/comments', protect, addComment);
router.post('/:id/like', protect, toggleLike);

export default router;