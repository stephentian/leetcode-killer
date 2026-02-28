import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { questions, categories } from '../data/questions';
import { Difficulty } from '../types';

const Home: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState<Difficulty | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredQuestions = questions.filter(q => {
    const matchesCategory = selectedCategory === 'all' || 
      categories.find(c => c.id === selectedCategory)?.questionIds.includes(q.id);
    const matchesDifficulty = selectedDifficulty === 'all' || q.difficulty === selectedDifficulty;
    const matchesSearch = q.titleCn.includes(searchQuery) || 
      q.title.includes(searchQuery) || 
      q.number.toString().includes(searchQuery);
    return matchesCategory && matchesDifficulty && matchesSearch;
  });

  const getDifficultyText = (difficulty: Difficulty) => {
    const map: Record<Difficulty, string> = {
      easy: '简单',
      medium: '中等',
      hard: '困难',
    };
    return map[difficulty];
  };

  const getDifficultyColor = (difficulty: Difficulty) => {
    const map: Record<Difficulty, string> = {
      easy: '#52c41a',
      medium: '#faad14',
      hard: '#ff4d4f',
    };
    return map[difficulty];
  };

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '20px' }}>
      <header style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h1 style={{ fontSize: '2.5rem', color: '#1890ff', marginBottom: '8px' }}>
          LeetCode Killer
        </h1>
        <p style={{ color: '#666', fontSize: '1.1rem' }}>算法刷题，每日进步</p>
      </header>

      <div style={{ display: 'flex', gap: '16px', marginBottom: '30px', flexWrap: 'wrap' }}>
        <div style={{ flex: '1', minWidth: '200px' }}>
          <input
            type="text"
            placeholder="搜索题目..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{
              width: '100%',
              padding: '12px 16px',
              border: '1px solid #e8e8e8',
              borderRadius: '8px',
              fontSize: '14px',
              outline: 'none',
            }}
          />
        </div>

        <div style={{ flex: '1', minWidth: '200px' }}>
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            style={{
              width: '100%',
              padding: '12px 16px',
              border: '1px solid #e8e8e8',
              borderRadius: '8px',
              fontSize: '14px',
              outline: 'none',
            }}
          >
            <option value="all">全部分类</option>
            {categories.map(cat => (
              <option key={cat.id} value={cat.id}>{cat.nameCn}</option>
            ))}
          </select>
        </div>

        <div style={{ flex: '1', minWidth: '200px' }}>
          <select
            value={selectedDifficulty}
            onChange={(e) => setSelectedDifficulty(e.target.value as Difficulty | 'all')}
            style={{
              width: '100%',
              padding: '12px 16px',
              border: '1px solid #e8e8e8',
              borderRadius: '8px',
              fontSize: '14px',
              outline: 'none',
            }}
          >
            <option value="all">全部难度</option>
            <option value="easy">简单</option>
            <option value="medium">中等</option>
            <option value="hard">困难</option>
          </select>
        </div>
      </div>

      <div style={{ display: 'grid', gap: '16px' }}>
        {filteredQuestions.map(question => (
          <Link
            key={question.id}
            to={`/question/${question.id}`}
            style={{
              background: 'white',
              borderRadius: '12px',
              padding: '20px',
              boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
              textDecoration: 'none',
              color: 'inherit',
              display: 'block',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
              <span style={{ fontWeight: '600', color: '#666' }}>
                {question.number}.
              </span>
              <span style={{ fontSize: '1.1rem', fontWeight: '500' }}>
                {question.titleCn}
              </span>
            </div>
            <div style={{ display: 'flex', gap: '12px' }}>
              <span style={{ color: getDifficultyColor(question.difficulty), fontWeight: '500' }}>
                {getDifficultyText(question.difficulty)}
              </span>
              <span style={{ color: '#666', fontSize: '0.9rem' }}>
                {question.category}
              </span>
            </div>
          </Link>
        ))}
      </div>

      {filteredQuestions.length === 0 && (
        <div style={{ textAlign: 'center', padding: '60px 20px', color: '#666' }}>
          <p>没有找到匹配的题目</p>
        </div>
      )}
    </div>
  );
};

export default Home;
