import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { questions } from '../data/questions';
import { Difficulty } from '../types';

const QuestionDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const question = questions.find(q => q.id === id);
  const [activeTab, setActiveTab] = useState<'description' | 'solution'>('description');
  const [userCode, setUserCode] = useState('');

  if (!question) {
    return (
      <div style={{ textAlign: 'center', padding: '60px 20px' }}>
        <h2>题目不存在</h2>
        <Link to="/">返回首页</Link>
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

  const difficultyColors: Record<Difficulty, string> = {
    easy: '#52c41a',
    medium: '#faad14',
    hard: '#ff4d4f',
  };

  return (
    <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '20px' }}>
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '20px', marginBottom: '30px' }}>
        <button
          onClick={() => navigate(-1)}
          style={{
            padding: '10px 20px',
            background: '#f0f0f0',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer',
            fontSize: '14px',
          }}
        >
          ← 返回
        </button>
        <div style={{ flex: 1 }}>
          <h1 style={{ fontSize: '1.8rem', marginBottom: '12px', marginTop: 0 }}>
            {question.number}. {question.titleCn}
          </h1>
          <div style={{ display: 'flex', gap: '12px', alignItems: 'center', flexWrap: 'wrap' }}>
            <span style={{ fontWeight: '600', color: difficultyColors[question.difficulty] }}>
              {getDifficultyText(question.difficulty)}
            </span>
            <span style={{ color: '#666', fontSize: '14px' }}>
              {question.category}
            </span>
            {question.tags.map(tag => (
              <span
                key={tag}
                style={{
                  background: '#e6f7ff',
                  color: '#1890ff',
                  padding: '4px 12px',
                  borderRadius: '4px',
                  fontSize: '12px',
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
        <div style={{ background: 'white', borderRadius: '12px', padding: '24px', boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)' }}>
          <div style={{ display: 'flex', gap: '12px', marginBottom: '24px', borderBottom: '1px solid #e8e8e8', paddingBottom: '12px' }}>
            <button
              style={{
                padding: '8px 16px',
                background: activeTab === 'description' ? '#1890ff' : 'none',
                color: activeTab === 'description' ? 'white' : '#666',
                border: 'none',
                cursor: 'pointer',
                fontSize: '14px',
                borderRadius: '6px',
              }}
              onClick={() => setActiveTab('description')}
            >
              题目描述
            </button>
            <button
              style={{
                padding: '8px 16px',
                background: activeTab === 'solution' ? '#1890ff' : 'none',
                color: activeTab === 'solution' ? 'white' : '#666',
                border: 'none',
                cursor: 'pointer',
                fontSize: '14px',
                borderRadius: '6px',
              }}
              onClick={() => setActiveTab('solution')}
            >
              题解
            </button>
          </div>

          {activeTab === 'description' ? (
            <div>
              <div style={{ marginBottom: '24px' }}>
                <h3 style={{ marginBottom: '12px', fontSize: '1.1rem' }}>题目描述</h3>
                <p style={{ lineHeight: '1.8' }}>{question.description}</p>
              </div>

              {question.examples.map((example, index) => (
                <div
                  key={index}
                  style={{
                    background: '#f5f5f5',
                    padding: '16px',
                    borderRadius: '8px',
                    marginBottom: '16px',
                  }}
                >
                  <h4 style={{ marginBottom: '12px', marginTop: 0 }}>示例 {index + 1}</h4>
                  <div style={{ marginBottom: '8px' }}>
                    <span style={{ fontWeight: '600', marginRight: '8px' }}>输入:</span>
                    <code
                      style={{
                        background: 'white',
                        padding: '2px 8px',
                        borderRadius: '4px',
                        fontFamily: 'monospace',
                      }}
                    >
                      {example.input}
                    </code>
                  </div>
                  <div style={{ marginBottom: '8px' }}>
                    <span style={{ fontWeight: '600', marginRight: '8px' }}>输出:</span>
                    <code
                      style={{
                        background: 'white',
                        padding: '2px 8px',
                        borderRadius: '4px',
                        fontFamily: 'monospace',
                      }}
                    >
                      {example.output}
                    </code>
                  </div>
                  {example.explanation && (
                    <div>
                      <span style={{ fontWeight: '600', marginRight: '8px' }}>说明:</span>
                      <p>{example.explanation}</p>
                    </div>
                  )}
                </div>
              ))}

              <div style={{ marginBottom: '24px' }}>
                <h3 style={{ marginBottom: '12px', fontSize: '1.1rem' }}>约束条件</h3>
                <ul>
                  {question.constraints.map((constraint, index) => (
                    <li key={index} style={{ marginBottom: '4px' }}>
                      {constraint}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <a
                  href={question.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: '#1890ff', textDecoration: 'none' }}
                >
                  在 LeetCode 上查看 →
                </a>
              </div>
            </div>
          ) : (
            <div>
              {question.solutions.map((solution, index) => (
                <div key={index} style={{ marginBottom: '32px' }}>
                  <div style={{ display: 'flex', gap: '12px', marginBottom: '12px', alignItems: 'center', flexWrap: 'wrap' }}>
                    <span
                      style={{
                        background: '#1890ff',
                        color: 'white',
                        padding: '4px 12px',
                        borderRadius: '4px',
                        fontSize: '12px',
                      }}
                    >
                      {solution.language === 'javascript' ? 'JavaScript' : 'TypeScript'}
                    </span>
                    {solution.timeComplexity && (
                      <span style={{ fontSize: '12px', color: '#666' }}>
                        时间: {solution.timeComplexity}
                      </span>
                    )}
                    {solution.spaceComplexity && (
                      <span style={{ fontSize: '12px', color: '#666' }}>
                        空间: {solution.spaceComplexity}
                      </span>
                    )}
                  </div>
                  <pre
                    style={{
                      background: '#1e1e1e',
                      color: '#d4d4d4',
                      padding: '16px',
                      borderRadius: '8px',
                      overflowX: 'auto',
                      marginBottom: '12px',
                    }}
                  >
                    <code style={{ fontFamily: 'monospace', fontSize: '14px', lineHeight: '1.6' }}>
                      {solution.code}
                    </code>
                  </pre>
                  {solution.explanation && (
                    <div style={{ marginTop: '12px' }}>
                      <h4>题解说明</h4>
                      <p>{solution.explanation}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>

        <div style={{ background: 'white', borderRadius: '12px', padding: '24px', boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
            <h3 style={{ margin: 0 }}>代码编辑器</h3>
            <div style={{ display: 'flex', gap: '12px' }}>
              <button
                style={{
                  padding: '8px 16px',
                  background: '#1890ff',
                  color: 'white',
                  border: '1px solid #1890ff',
                  borderRadius: '6px',
                  cursor: 'pointer',
                  fontSize: '14px',
                }}
              >
                运行
              </button>
              <button
                style={{
                  padding: '8px 16px',
                  border: '1px solid #d9d9d9',
                  background: 'white',
                  borderRadius: '6px',
                  cursor: 'pointer',
                  fontSize: '14px',
                }}
              >
                提交
              </button>
            </div>
          </div>
          <textarea
            style={{
              width: '100%',
              height: '500px',
              padding: '16px',
              border: '1px solid #d9d9d9',
              borderRadius: '8px',
              fontFamily: 'monospace',
              fontSize: '14px',
              lineHeight: '1.6',
              resize: 'vertical',
            }}
            value={userCode}
            onChange={(e) => setUserCode(e.target.value)}
            placeholder="// 在这里编写你的代码..."
          />
        </div>
      </div>
    </div>
  );
};

export default QuestionDetail;
