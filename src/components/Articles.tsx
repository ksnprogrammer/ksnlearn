import { useState } from 'react';
import './Articles.css';

interface Article {
  id: number;
  title: string;
  subject: 'biology' | 'chemistry' | 'physics';
  excerpt: string;
  content: string;
  readTime: number;
  author: string;
  date: string;
}

const sampleArticles: Article[] = [
  {
    id: 1,
    title: 'Understanding DNA Replication',
    subject: 'biology',
    excerpt: 'Explore the intricate process of DNA replication and its importance in cell division.',
    content: 'DNA replication is a fundamental process in all living organisms...',
    readTime: 5,
    author: 'Dr. Sarah Chen',
    date: '2024-01-15'
  },
  {
    id: 2,
    title: 'Quantum Mechanics: A Beginner\'s Guide',
    subject: 'physics',
    excerpt: 'Discover the fascinating world of quantum mechanics and its applications.',
    content: 'Quantum mechanics is a fundamental theory in physics...',
    readTime: 7,
    author: 'Prof. James Wilson',
    date: '2024-01-14'
  },
  {
    id: 3,
    title: 'Chemical Bonding Explained',
    subject: 'chemistry',
    excerpt: 'Learn about different types of chemical bonds and their significance.',
    content: 'Chemical bonding is the process by which atoms combine...',
    readTime: 6,
    author: 'Dr. Emily Rodriguez',
    date: '2024-01-13'
  }
];

function Articles() {
  const [selectedSubject, setSelectedSubject] = useState<'all' | 'biology' | 'chemistry' | 'physics'>('all');

  const filteredArticles = selectedSubject === 'all' 
    ? sampleArticles 
    : sampleArticles.filter(article => article.subject === selectedSubject);

  return (
    <div className="articles-section">
      <h1 className="articles-title">Educational Articles</h1>
      
      <div className="subject-filter">
        <button 
          className={`filter-btn ${selectedSubject === 'all' ? 'active' : ''}`}
          onClick={() => setSelectedSubject('all')}
        >
          All
        </button>
        <button 
          className={`filter-btn biology ${selectedSubject === 'biology' ? 'active' : ''}`}
          onClick={() => setSelectedSubject('biology')}
        >
          Biology
        </button>
        <button 
          className={`filter-btn chemistry ${selectedSubject === 'chemistry' ? 'active' : ''}`}
          onClick={() => setSelectedSubject('chemistry')}
        >
          Chemistry
        </button>
        <button 
          className={`filter-btn physics ${selectedSubject === 'physics' ? 'active' : ''}`}
          onClick={() => setSelectedSubject('physics')}
        >
          Physics
        </button>
      </div>

      <div className="articles-grid">
        {filteredArticles.map(article => (
          <article key={article.id} className={`article-card ${article.subject}`}>
            <div className="article-content">
              <h2 className={`gradient-text-${article.subject}`}>{article.title}</h2>
              <p className="article-excerpt">{article.excerpt}</p>
              <div className="article-meta">
                <span className="author">{article.author}</span>
                <span className="date">{new Date(article.date).toLocaleDateString()}</span>
                <span className="read-time">{article.readTime} min read</span>
              </div>
              <button className={`read-more-btn ${article.subject}`}>Read More</button>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

export default Articles;