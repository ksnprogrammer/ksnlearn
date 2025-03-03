import jwt from 'jsonwebtoken';
import User from '../models/User.js';

// Verify JWT token middleware
export const auth = async (req, res, next) => {
  try {
    const token = req.header('Authorization')?.replace('Bearer ', '');
    
    if (!token) {
      return res.status(401).json({ message: 'No authentication token, access denied' });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'your-secret-key');
    const user = await User.findById(decoded.userId).select('-password');

    if (!user) {
      return res.status(401).json({ message: 'Token is invalid' });
    }

    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).json({ message: 'Token is invalid', error: error.message });
  }
};

// Admin role middleware
export const admin = async (req, res, next) => {
  try {
    const user = await User.findById(req.user.userId);
    
    if (user.role !== 'admin') {
      return res.status(403).json({ message: 'Access denied. Admin only.' });
    }
    
    next();
  } catch (error) {
    res.status(500).json({ message: 'Error checking admin status', error: error.message });
  }
};