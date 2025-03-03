import Quiz from '../models/Quiz.js';

// Create a new quiz
export const createQuiz = async (req, res) => {
  try {
    const { title, subject, topic, questions, difficulty, timeLimit } = req.body;

    const quiz = await Quiz.create({
      title,
      subject,
      topic,
      questions: questions.map(q => ({
        question: q.question,
        options: q.options,
        correctAnswer: q.correctAnswer,
        explanation: q.explanation
      })),
      creator: req.user.id,
      difficulty,
      timeLimit
    });

    res.status(201).json({
      success: true,
      data: quiz
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error creating quiz',
      error: error.message
    });
  }
};

// Get all quizzes
export const getQuizzes = async (req, res) => {
  try {
    const { subject, topic, difficulty } = req.query;
    const query = {};

    if (subject) query.subject = subject;
    if (topic) query.topic = topic;
    if (difficulty) query.difficulty = difficulty;

    const quizzes = await Quiz.find(query)
      .populate('creator', 'username profile')
      .sort('-createdAt');

    res.json({
      success: true,
      count: quizzes.length,
      data: quizzes
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching quizzes',
      error: error.message
    });
  }
};

// Get single quiz
export const getQuiz = async (req, res) => {
  try {
    const quiz = await Quiz.findById(req.params.id)
      .populate('creator', 'username profile');

    if (!quiz) {
      return res.status(404).json({
        success: false,
        message: 'Quiz not found'
      });
    }

    res.json({
      success: true,
      data: quiz
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching quiz',
      error: error.message
    });
  }
};

// Submit quiz answers
export const submitQuiz = async (req, res) => {
  try {
    const { answers } = req.body;
    const quiz = await Quiz.findById(req.params.id);

    if (!quiz) {
      return res.status(404).json({
        success: false,
        message: 'Quiz not found'
      });
    }

    // Calculate score
    let score = 0;
    const results = answers.map((answer, index) => {
      const isCorrect = answer === quiz.questions[index].correctAnswer;
      if (isCorrect) score++;
      return {
        questionIndex: index,
        isCorrect,
        correctAnswer: quiz.questions[index].correctAnswer,
        explanation: quiz.questions[index].explanation
      };
    });

    const scorePercentage = (score / quiz.questions.length) * 100;

    // Update user's progress
    await User.findByIdAndUpdate(
      req.user.id,
      {
        $push: {
          'progress.mcqProgress': {
            quizId: quiz._id,
            score: scorePercentage,
            completedAt: Date.now()
          }
        }
      }
    );

    res.json({
      success: true,
      data: {
        score: scorePercentage,
        totalQuestions: quiz.questions.length,
        correctAnswers: score,
        results
      }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error submitting quiz',
      error: error.message
    });
  }
};

// Update quiz
export const updateQuiz = async (req, res) => {
  try {
    const { title, questions, difficulty, timeLimit } = req.body;
    const quiz = await Quiz.findById(req.params.id);

    if (!quiz) {
      return res.status(404).json({
        success: false,
        message: 'Quiz not found'
      });
    }

    // Ensure user owns the quiz
    if (quiz.creator.toString() !== req.user.id) {
      return res.status(403).json({
        success: false,
        message: 'Not authorized to update this quiz'
      });
    }

    quiz.title = title || quiz.title;
    quiz.questions = questions || quiz.questions;
    quiz.difficulty = difficulty || quiz.difficulty;
    quiz.timeLimit = timeLimit || quiz.timeLimit;

    const updatedQuiz = await quiz.save();

    res.json({
      success: true,
      data: updatedQuiz
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error updating quiz',
      error: error.message
    });
  }
};

// Delete quiz
export const deleteQuiz = async (req, res) => {
  try {
    const quiz = await Quiz.findById(req.params.id);

    if (!quiz) {
      return res.status(404).json({
        success: false,
        message: 'Quiz not found'
      });
    }

    // Ensure user owns the quiz
    if (quiz.creator.toString() !== req.user.id) {
      return res.status(403).json({
        success: false,
        message: 'Not authorized to delete this quiz'
      });
    }

    await quiz.remove();

    res.json({
      success: true,
      message: 'Quiz deleted successfully'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error deleting quiz',
      error: error.message
    });
  }
};