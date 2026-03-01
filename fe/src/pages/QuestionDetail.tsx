import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { questions } from '../data/questions';
import { Difficulty } from '../types';

const QuestionDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const question = questions.find(q => q.id === id);
  const [activeTab, setActiveTab] = useState<'description' | 'solution'>('description');
  const [userCode, setUserCode] = useState('');
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 1024);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  if (!question) {
    return (
      <div style={styles.container}>
        <div style={styles.emptyState}>
          <h2>题目不存在</h2>
          <Link to="/" style={styles.backLink}>返回首页</Link>
        </div>
      </div>
    );
  }

  const getDifficultyText = (difficulty: Difficulty) => {
    const map: Record<Difficulty, string> = {
      easy: '简单',
      medium: '中等',
      hard: '困难',
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

  const difficultyColors: Record<Difficulty, string> = {
    easy: '#52c41a',
    medium: '#faad14',
    hard: '#ff4d4f',
  };

  const phaseColors: Record<number, string> = {
    1: '#1890ff',
    2: '#722ed1',
    3: '#eb2f96',
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <button
          onClick={() => navigate(-1)}
          style={styles.backButton}
        >
          ←
        </button>
        <div style={styles.headerContent}>
          <h1 style={styles.title}>
            {question.number > 0 ? `${question.number}. ` : ''}{question.titleCn}
          </h1>
          <div style={styles.tags}>
            <span style={{ ...styles.tag, backgroundColor: phaseColors[question.phase] + '20', color: phaseColors[question.phase] }}>
              {getPhaseText(question.phase)}
            </span>
            <span style={{ ...styles.tag, backgroundColor: difficultyColors[question.difficulty] + '20', color: difficultyColors[question.difficulty] }}>
              {getDifficultyText(question.difficulty)}
            </span>
            <span style={{ ...styles.tag, backgroundColor: '#f0f0f0', color: '#666' }}>
              {question.category}
            </span>
            {question.tags.map(tag => (
              <span key={tag} style={{ ...styles.tag, backgroundColor: '#f0f0f0', color: '#666' }}>
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div style={{ ...styles.content, ...(isMobile ? styles.contentMobile : {}) }}>
        <div style={styles.leftPanel}>
          <div style={styles.tabs}>
            <button
              style={{ ...styles.tabButton, ...(activeTab === 'description' ? styles.tabButtonActive : {}) }}
              onClick={() => setActiveTab('description')}
            >
              题目描述
            </button>
            <button
              style={{ ...styles.tabButton, ...(activeTab === 'solution' ? styles.tabButtonActive : {}) }}
              onClick={() => setActiveTab('solution')}
            >
              题解
            </button>
          </div>

          {activeTab === 'description' ? (
            <div style={styles.tabContent}>
              <div style={styles.descriptionSection}>
                <h3 style={styles.sectionTitle}>题目描述</h3>
                <p style={styles.descriptionText}>{question.description}</p>
              </div>

              {question.examples.map((example, index) => (
                <div key={index} style={styles.exampleSection}>
                  <h4 style={styles.exampleTitle}>示例 {index + 1}</h4>
                  <div style={styles.exampleItem}>
                    <span style={styles.exampleLabel}>输入:</span>
                    <code style={styles.exampleCode}>{example.input}</code>
                  </div>
                  <div style={styles.exampleItem}>
                    <span style={styles.exampleLabel}>输出:</span>
                    <code style={styles.exampleCode}>{example.output}</code>
                  </div>
                  {example.explanation && (
                    <div style={styles.exampleItem}>
                      <span style={styles.exampleLabel}>说明:</span>
                      <p>{example.explanation}</p>
                    </div>
                  )}
                </div>
              ))}

              <div style={styles.constraintsSection}>
                <h3 style={styles.sectionTitle}>约束条件</h3>
                <ul style={styles.constraintsList}>
                  {question.constraints.map((constraint, index) => (
                    <li key={index} style={styles.constraintItem}>{constraint}</li>
                  ))}
                </ul>
              </div>

              {question.link && (
                <div style={styles.linkSection}>
                  <a
                    href={question.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={styles.leetcodeLink}
                  >
                    在 LeetCode 上查看 →
                  </a>
                </div>
              )}
            </div>
          ) : (
            <div style={styles.tabContent}>
              {question.solutions.map((solution, index) => (
                <div key={index} style={styles.solutionSection}>
                  <div style={styles.solutionHeader}>
                    <span style={styles.solutionLanguage}>
                      {solution.language === 'javascript' ? 'JavaScript' : 'TypeScript'}
                    </span>
                    {solution.timeComplexity && (
                      <span style={styles.solutionComplexity}>时间: {solution.timeComplexity}</span>
                    )}
                    {solution.spaceComplexity && (
                      <span style={styles.solutionComplexity}>空间: {solution.spaceComplexity}</span>
                    )}
                  </div>
                  <pre style={styles.codeBlock}>
                    <code style={styles.codeText}>{solution.code}</code>
                  </pre>
                  {solution.explanation && (
                    <div style={styles.explanationSection}>
                      <h4>题解说明</h4>
                      <p>{solution.explanation}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>

        <div style={styles.rightPanel}>
          <div style={styles.editorHeader}>
            <h3 style={styles.editorTitle}>代码编辑器</h3>
            <div style={styles.editorButtons}>
              <button style={styles.runButton}>运行</button>
              <button style={styles.submitButton}>提交</button>
            </div>
          </div>
          <textarea
            style={styles.codeEditor}
            value={userCode}
            onChange={(e) => setUserCode(e.target.value)}
            placeholder="// 在这里编写你的代码..."
          />
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '1400px',
    margin: '0 auto',
    padding: '20px',
    width: '100%',
  },
  header: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '16px',
    marginBottom: '30px',
  },
  backButton: {
    padding: '8px 16px',
    background: '#f0f0f0',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    fontSize: '20px',
    fontWeight: 'bold',
    transition: 'background 0.3s',
    whiteSpace: 'nowrap',
    lineHeight: '1',
  },
  headerContent: {
    flex: 1,
  },
  title: {
    fontSize: '1.4rem',
    marginBottom: '12px',
    marginTop: 0,
    lineHeight: '1.4',
  },
  tags: {
    display: 'flex',
    gap: '8px',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  tag: {
    padding: '4px 10px',
    borderRadius: '4px',
    fontSize: '12px',
    fontWeight: 500,
  },
  content: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '20px',
  },
  contentMobile: {
    gridTemplateColumns: '1fr',
  },
  leftPanel: {
    background: 'white',
    borderRadius: '12px',
    padding: '24px',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
  },
  rightPanel: {
    background: 'white',
    borderRadius: '12px',
    padding: '24px',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
  },
  tabs: {
    display: 'flex',
    gap: '12px',
    marginBottom: '24px',
    borderBottom: '1px solid #e8e8e8',
    paddingBottom: '12px',
  },
  tabButton: {
    padding: '8px 16px',
    background: 'none',
    color: '#666',
    border: 'none',
    cursor: 'pointer',
    fontSize: '14px',
    borderRadius: '6px',
    transition: 'all 0.3s',
  },
  tabButtonActive: {
    background: '#1890ff',
    color: 'white',
  },
  tabContent: {},
  sectionTitle: {
    marginBottom: '12px',
    fontSize: '1.1rem',
  },
  descriptionSection: {
    marginBottom: '24px',
  },
  descriptionText: {
    lineHeight: 1.8,
    color: '#333',
  },
  exampleSection: {
    background: '#f5f5f5',
    padding: '16px',
    borderRadius: '8px',
    marginBottom: '16px',
  },
  exampleTitle: {
    marginBottom: '12px',
    marginTop: 0,
  },
  exampleItem: {
    marginBottom: '8px',
  },
  exampleLabel: {
    fontWeight: 600,
    marginRight: '8px',
  },
  exampleCode: {
    background: 'white',
    padding: '2px 8px',
    borderRadius: '4px',
    fontFamily: 'monospace',
  },
  constraintsSection: {
    marginBottom: '24px',
  },
  constraintsList: {
    paddingLeft: '20px',
    margin: 0,
  },
  constraintItem: {
    marginBottom: '4px',
  },
  linkSection: {},
  leetcodeLink: {
    color: '#1890ff',
    textDecoration: 'none',
  },
  solutionSection: {
    marginBottom: '32px',
  },
  solutionHeader: {
    display: 'flex',
    gap: '12px',
    marginBottom: '12px',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  solutionLanguage: {
    background: '#1890ff',
    color: 'white',
    padding: '4px 12px',
    borderRadius: '4px',
    fontSize: '12px',
  },
  solutionComplexity: {
    fontSize: '12px',
    color: '#666',
  },
  codeBlock: {
    background: '#1e1e1e',
    color: '#d4d4d4',
    padding: '16px',
    borderRadius: '8px',
    overflowX: 'auto',
    marginBottom: '12px',
  },
  codeText: {
    fontFamily: 'monospace',
    fontSize: '14px',
    lineHeight: 1.6,
  },
  explanationSection: {
    marginTop: '12px',
  },
  editorHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '16px',
    flexWrap: 'wrap',
    gap: '12px',
  },
  editorTitle: {
    margin: 0,
  },
  editorButtons: {
    display: 'flex',
    gap: '12px',
  },
  runButton: {
    padding: '8px 16px',
    background: '#1890ff',
    color: 'white',
    border: '1px solid #1890ff',
    borderRadius: '6px',
    cursor: 'pointer',
    fontSize: '14px',
    transition: 'all 0.3s',
  },
  submitButton: {
    padding: '8px 16px',
    border: '1px solid #d9d9d9',
    background: 'white',
    borderRadius: '6px',
    cursor: 'pointer',
    fontSize: '14px',
    transition: 'all 0.3s',
  },
  codeEditor: {
    width: '100%',
    height: '500px',
    padding: '16px',
    border: '1px solid #d9d9d9',
    borderRadius: '8px',
    fontFamily: 'monospace',
    fontSize: '14px',
    lineHeight: 1.6,
    resize: 'vertical',
  },
  emptyState: {
    textAlign: 'center',
    padding: '60px 20px',
  },
  backLink: {
    color: '#1890ff',
    textDecoration: 'none',
  },
};

export default QuestionDetail;
