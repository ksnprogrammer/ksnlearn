import { useState } from 'react';
import './Quiz.css';

interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  subject: 'biology' | 'chemistry' | 'physics';
  explanation: string;
}

interface QuizProps {
  subject?: 'biology' | 'chemistry' | 'physics';
}

const sampleQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: 'Which organelle is known as the powerhouse of the cell?',
    options: ['Nucleus', 'Mitochondria', 'Endoplasmic Reticulum', 'Golgi Apparatus'],
    correctAnswer: 1,
    subject: 'biology',
    explanation: 'Mitochondria are responsible for cellular respiration, producing ATP which is the energy currency of cells.'
  },
  {
    id: 2,
    question: 'What is the chemical formula for water?',
    options: ['H2O', 'CO2', 'NaCl', 'H2SO4'],
    correctAnswer: 0,
    subject: 'chemistry',
    explanation: 'Water consists of two hydrogen atoms bonded to one oxygen atom, resulting in the formula H2O.'
  },
  {
    id: 3,
    question: 'Which of Newton\'s laws states that for every action, there is an equal and opposite reaction?',
    options: ['First Law', 'Second Law', 'Third Law', 'Law of Gravitation'],
    correctAnswer: 2,
    subject: 'physics',
    explanation: 'Newton\'s Third Law of Motion states that for every action, there is an equal and opposite reaction.'
  },
  {
    id: 4,
    question: 'Which of the following is NOT a type of chemical bond?',
    options: ['Ionic bond', 'Covalent bond', 'Hydrogen bond', 'Quantum bond'],
    correctAnswer: 3,
    subject: 'chemistry',
    explanation: 'Quantum bond is not a type of chemical bond. The main types are ionic, covalent, hydrogen, and metallic bonds.'
  },
  {
    id: 5,
    question: 'What is the process by which plants make their own food using sunlight?',
    options: ['Respiration', 'Photosynthesis', 'Fermentation', 'Digestion'],
    correctAnswer: 1,
    subject: 'biology',
    explanation: 'Photosynthesis is the process where plants convert light energy into chemical energy to produce glucose from carbon dioxide and water.'
  },
  {
    id: 6,
    question: 'Which of the following is a unit of force?',
    options: ['Joule', 'Watt', 'Newton', 'Volt'],
    correctAnswer: 2,
    subject: 'physics',
    explanation: 'The Newton (N) is the SI unit of force, named after Sir Isaac Newton.'
  }
];

export function Quiz({ subject }: QuizProps) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  
  const filteredQuestions = subject 
    ? sampleQuestions.filter(q => q.subject === subject)
    : sampleQuestions;
  
  const currentQuestion = filteredQuestions[currentQuestionIndex];
  
  const handleOptionSelect = (optionIndex: number) => {
    if (selectedOption !== null) return; // Prevent changing answer
    
    setSelectedOption(optionIndex);
    
    if (optionIndex === currentQuestion.correctAnswer) {
      setScore(prevScore => prevScore + 1);
    }
    
    setShowExplanation(true);
  };
  
  const handleNextQuestion = () => {
    if (currentQuestionIndex < filteredQuestions.length - 1) {
      setCurrentQuestionIndex(prevIndex => prevIndex + 1);
      setSelectedOption(null);
      setShowExplanation(false);
    } else {
      setQuizCompleted(true);
    }
  };
  
  const restartQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedOption(null);
    setShowExplanation(false);
    setScore(0);
    setQuizCompleted(false);
  };
  
  const getSubjectClass = () => {
    if (subject) return subject;
    return currentQuestion.subject;
  };
  
  if (quizCompleted) {
    return (
      <div className="quiz-container">
        <div className={`quiz-result ${getSubjectClass()}`}>
          <h2 className={`gradient-text-${getSubjectClass()}`}>Quiz Completed!</h2>
          <div className="score-display">
            <p>Your Score:</p>
            <h3 className={`gradient-text-${getSubjectClass()}`}>
              {score} / {filteredQuestions.length}
            </h3>
            <p className="score-percentage">
              {Math.round((score / filteredQuestions.length) * 100)}%
            </p>
          </div>
          <button 
            className={`quiz-button restart-btn ${getSubjectClass()}`}
            onClick={restartQuiz}
          >
            Restart Quiz
          </button>
        </div>
      </div>
    );
  }
  
  return (
    <div className="quiz-container">
      <div className={`quiz-card ${getSubjectClass()}`}>
        <div className="quiz-progress">
          <div 
            className="progress-bar" 
            style={{ width: `${((currentQuestionIndex + 1) / filteredQuestions.length) * 100}%` }}
          ></div>
        </div>
        
        <div className="question-count">
          <span className={`gradient-text-${getSubjectClass()}`}>
            Question {currentQuestionIndex + 1}/{filteredQuestions.length}
          </span>
        </div>
        
        <h2 className="question-text">{currentQuestion.question}</h2>
        
        <div className="options-container">
          {currentQuestion.options.map((option, index) => (
            <button 
              key={index}
              className={`option-btn ${selectedOption === index ? 
                (index === currentQuestion.correctAnswer ? 'correct' : 'incorrect') : ''}`}
              onClick={() => handleOptionSelect(index)}
              disabled={selectedOption !== null}
            >
              {option}
            </button>
          ))}
        </div>
        
        {showExplanation && (
          <div className="explanation">
            <h3>Explanation:</h3>
            <p>{currentQuestion.explanation}</p>
          </div>
        )}
        
        {selectedOption !== null && (
          <button 
            className={`quiz-button next-btn ${getSubjectClass()}`}
            onClick={handleNextQuestion}
          >
            {currentQuestionIndex < filteredQuestions.length - 1 ? 'Next Question' : 'See Results'}
          </button>
        )}
      </div>
    </div>
  );
}

export default Quiz;