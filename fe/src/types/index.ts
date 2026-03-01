export type Difficulty = 'easy' | 'medium' | 'hard';
export type Phase = 1 | 2 | 3;

export interface Example {
  input: string;
  output: string;
  explanation?: string;
}

export interface Solution {
  language: 'javascript' | 'typescript';
  code: string;
  explanation?: string;
  timeComplexity?: string;
  spaceComplexity?: string;
}

export interface Question {
  id: string;
  number: number;
  title: string;
  titleCn: string;
  difficulty: Difficulty;
  category: string;
  tags: string[];
  description: string;
  examples: Example[];
  constraints: string[];
  solutions: Solution[];
  link: string;
  frequency?: number;
  phase: Phase;
}

export interface Category {
  id: string;
  name: string;
  nameCn: string;
  description: string;
  questionIds: string[];
}
