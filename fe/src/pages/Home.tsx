import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { questions, categories } from '../data/questions';
import { Difficulty } from '../types';

const Home: React.FC = () => {
  const [selectedPhase, setSelectedPhase] = useState<string>('all');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState<Difficulty | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredQuestions = questions.filter(q => {
    const matchesPhase = selectedPhase === 'all' || 
      (selectedPhase === 'phase1' && q.phase === 1) ||
      (selectedPhase === 'phase2' && q.phase === 2) ||
      (selectedPhase === 'phase3' && q.phase === 3);
    const matchesCategory = selectedCategory === 'all' || 
      categories.find(c => c.id === selectedCategory)?.questionIds.includes(q.id);
    const matchesDifficulty = selectedDifficulty === 'all' || q.difficulty === selectedDifficulty;
    const matchesSearch = q.titleCn.includes(searchQuery) || 
      q.title.includes(searchQuery) || 
      q.number.toString().includes(searchQuery);
    return matchesPhase && matchesCategory && matchesDifficulty && matchesSearch;
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

  const getPhaseText = (phase: number) => {
    const map: Record<number, string> = {
      1: '第一阶段',
      2: '第二阶段',
      3: '第三阶段',
    };
    return map[phase];
  };

  const getPhaseColor = (phase: number) => {
    const map: Record<number, string> = {
      1: '#1890ff',
      2: '#722ed1',
      3: '#eb2f96',
    };
    return map[phase];
  };

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.title}>LeetCode Killer</h1>
        <p style={styles.subtitle}>算法刷题，每日进步</p>
      </header>

      <div style={styles.filterSection}>
        <div style={styles.filterItem}>
          <input
            type="text"
            placeholder="搜索题目..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={styles.searchInput}
          />
        </div>

        <div style={styles.filterItem}>
          <select
            value={selectedPhase}
            onChange={(e) => setSelectedPhase(e.target.value)}
            style={styles.filterSelect}
          >
            <option value="all">全部阶段</option>
            <option value="phase1">第一阶段：基础入门</option>
            <option value="phase2">第二阶段：进阶提升</option>
            <option value="phase3">第三阶段：高级突破</option>
          </select>
        </div>

        <div style={styles.filterItem}>
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            style={styles.filterSelect}
          >
            <option value="all">全部分类</option>
            {categories.filter(cat => !cat.id.startsWith('phase')).map(cat => (
              <option key={cat.id} value={cat.id}>{cat.nameCn}</option>
            ))}
          </select>
        </div>

        <div style={styles.filterItem}>
          <select
            value={selectedDifficulty}
            onChange={(e) => setSelectedDifficulty(e.target.value as Difficulty | 'all')}
            style={styles.filterSelect}
          >
            <option value="all">全部难度</option>
            <option value="easy">简单</option>
            <option value="medium">中等</option>
            <option value="hard">困难</option>
          </select>
        </div>
      </div>

      <div style={styles.questionCount}>
        共 {filteredQuestions.length} 道题目
      </div>

      <div style={styles.questionList}>
        {filteredQuestions.map((question, index) => (
          <Link
            key={question.id}
            to={`/question/${question.id}`}
            style={styles.questionCard}
          >
            <div style={styles.questionHeader}>
              <span style={styles.questionNumber}>
                {index + 1}.
              </span>
              <span style={styles.questionTitle}>{question.titleCn}</span>
            </div>
            <div style={styles.questionTags}>
              <span 
                style={{ 
                  ...styles.tag, 
                  ...styles.phaseTag,
                  backgroundColor: getPhaseColor(question.phase) + '20', 
                  color: getPhaseColor(question.phase) 
                }}
              >
                {getPhaseText(question.phase)}
              </span>
              <span 
                style={{ 
                  ...styles.tag, 
                  ...styles.difficultyTag,
                  color: getDifficultyColor(question.difficulty) 
                }}
              >
                {getDifficultyText(question.difficulty)}
              </span>
              <span style={{ ...styles.tag, ...styles.categoryTag }}>
                {question.category}
              </span>
            </div>
          </Link>
        ))}
      </div>

      {filteredQuestions.length === 0 && (
        <div style={styles.emptyState}>
          <p>没有找到匹配的题目</p>
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '20px',
  },
  header: {
    textAlign: 'center',
    marginBottom: '40px',
  },
  title: {
    fontSize: '2.5rem',
    color: '#1890ff',
    marginBottom: '8px',
    fontWeight: 700,
  },
  subtitle: {
    color: '#666',
    fontSize: '1.1rem',
  },
  filterSection: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '16px',
    marginBottom: '24px',
  },
  filterItem: {
    width: '100%',
  },
  searchInput: {
    width: '100%',
    padding: '12px 16px',
    border: '1px solid #e8e8e8',
    borderRadius: '8px',
    fontSize: '14px',
    outline: 'none',
    transition: 'border-color 0.3s, box-shadow 0.3s',
    background: 'white',
  },
  filterSelect: {
    width: '100%',
    padding: '12px 16px',
    border: '1px solid #e8e8e8',
    borderRadius: '8px',
    fontSize: '14px',
    outline: 'none',
    transition: 'border-color 0.3s, box-shadow 0.3s',
    background: 'white',
  },
  questionCount: {
    color: '#666',
    fontSize: '14px',
    marginBottom: '16px',
    paddingLeft: '4px',
  },
  questionList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
  },
  questionCard: {
    background: 'white',
    borderRadius: '12px',
    padding: '20px',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
    textDecoration: 'none',
    color: 'inherit',
    display: 'block',
    transition: 'transform 0.2s, box-shadow 0.2s',
    ':hover': {
      transform: 'translateY(-2px)',
      boxShadow: '0 4px 16px rgba(0, 0, 0, 0.12)',
    },
  },
  questionHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    marginBottom: '12px',
  },
  questionNumber: {
    fontWeight: 600,
    color: '#666',
    fontSize: '14px',
  },
  questionTitle: {
    fontSize: '1.1rem',
    fontWeight: 500,
    color: '#333',
  },
  questionTags: {
    display: 'flex',
    gap: '10px',
    flexWrap: 'wrap',
  },
  tag: {
    padding: '4px 12px',
    borderRadius: '4px',
    fontSize: '12px',
    fontWeight: 500,
  },
  phaseTag: {
    background: '#e6f7ff',
  },
  difficultyTag: {
    background: '#fff7e6',
  },
  categoryTag: {
    background: '#f0f0f0',
    color: '#666',
  },
  emptyState: {
    textAlign: 'center',
    padding: '60px 20px',
    color: '#666',
  },
};

export default Home;
