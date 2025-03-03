import Blog from '../models/Blog.js';

// Create a new blog post
export const createBlog = async (req, res) => {
  try {
    const { title, content, subject, category, tags, language } = req.body;

    const blog = await Blog.create({
      title,
      content,
      subject,
      category,
      tags,
      language,
      author: req.user.id
    });

    res.status(201).json({
      success: true,
      data: blog
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error creating blog post',
      error: error.message
    });
  }
};

// Get all published blogs
export const getBlogs = async (req, res) => {
  try {
    const { subject, category, tag } = req.query;
    const query = { status: 'published' };

    if (subject) query.subject = subject;
    if (category) query.category = category;
    if (tag) query.tags = tag;

    const blogs = await Blog.find(query)
      .populate('author', 'username profile')
      .sort('-createdAt');

    res.json({
      success: true,
      count: blogs.length,
      data: blogs
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching blogs',
      error: error.message
    });
  }
};

// Get single blog
export const getBlog = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id)
      .populate('author', 'username profile')
      .populate('comments.user', 'username profile');

    if (!blog) {
      return res.status(404).json({
        success: false,
        message: 'Blog not found'
      });
    }

    // Increment view count
    blog.views += 1;
    await blog.save();

    res.json({
      success: true,
      data: blog
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching blog',
      error: error.message
    });
  }
};

// Update blog
export const updateBlog = async (req, res) => {
  try {
    const { title, content, category, tags, status } = req.body;
    const blog = await Blog.findById(req.params.id);

    if (!blog) {
      return res.status(404).json({
        success: false,
        message: 'Blog not found'
      });
    }

    // Ensure user is the author
    if (blog.author.toString() !== req.user.id) {
      return res.status(403).json({
        success: false,
        message: 'Not authorized to update this blog'
      });
    }

    blog.title = title || blog.title;
    blog.content = content || blog.content;
    blog.category = category || blog.category;
    blog.tags = tags || blog.tags;
    blog.status = status || blog.status;

    const updatedBlog = await blog.save();

    res.json({
      success: true,
      data: updatedBlog
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error updating blog',
      error: error.message
    });
  }
};

// Delete blog
export const deleteBlog = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);

    if (!blog) {
      return res.status(404).json({
        success: false,
        message: 'Blog not found'
      });
    }

    // Ensure user is the author
    if (blog.author.toString() !== req.user.id) {
      return res.status(403).json({
        success: false,
        message: 'Not authorized to delete this blog'
      });
    }

    await blog.remove();

    res.json({
      success: true,
      message: 'Blog deleted successfully'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error deleting blog',
      error: error.message
    });
  }
};

// Add comment
export const addComment = async (req, res) => {
  try {
    const { content } = req.body;
    const blog = await Blog.findById(req.params.id);

    if (!blog) {
      return res.status(404).json({
        success: false,
        message: 'Blog not found'
      });
    }

    blog.comments.push({
      user: req.user.id,
      content
    });

    await blog.save();

    const updatedBlog = await Blog.findById(req.params.id)
      .populate('comments.user', 'username profile');

    res.json({
      success: true,
      data: updatedBlog.comments[updatedBlog.comments.length - 1]
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error adding comment',
      error: error.message
    });
  }
};

// Toggle like
export const toggleLike = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);

    if (!blog) {
      return res.status(404).json({
        success: false,
        message: 'Blog not found'
      });
    }

    const likeIndex = blog.likes.indexOf(req.user.id);

    if (likeIndex === -1) {
      blog.likes.push(req.user.id);
    } else {
      blog.likes.splice(likeIndex, 1);
    }

    await blog.save();

    res.json({
      success: true,
      data: {
        likes: blog.likes.length,
        isLiked: likeIndex === -1
      }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error toggling like',
      error: error.message
    });
  }
};