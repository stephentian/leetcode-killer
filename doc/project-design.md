# LeetCode Killer 项目设计文档

## 1. 项目概述

LeetCode Killer 是一个专注于算法刷题的H5/PC端应用，旨在帮助用户高效学习和练习算法题目。

### 1.1 项目目标
- 提供算法题目列表和详情展示
- 支持在线代码编辑和运行
- 适配H5移动端和PC端
- 提供按分类、难度、学习顺序等多种题目组织方式

### 1.2 项目范围
- 第一阶段：纯前端实现，不包含后端和数据库
- 后续阶段：添加用户系统、进度跟踪、提交记录等功能

---

## 2. 技术架构

### 2.1 技术栈选择

#### 前端技术栈
- **框架**: React 18
- **构建工具**: Vite
- **语言**: TypeScript
- **路由**: React Router v6
- **状态管理**: React Context API / Zustand (轻量级)
- **样式方案**: CSS Modules + SCSS
- **代码编辑器**: Monaco Editor / CodeMirror
- **UI组件库**: Ant Design Mobile (H5) + Ant Design (PC)
- **响应式设计**: CSS Grid + Flexbox + Media Queries

### 2.2 项目结构

```
leetcode-killer/
├── fe/                          # 前端项目
│   ├── src/
│   │   ├── components/          # 通用组件
│   │   ├── pages/               # 页面组件
│   │   ├── hooks/               # 自定义Hooks
│   │   ├── data/                # 静态数据（题目）
│   │   ├── types/               # TypeScript类型定义
│   │   ├── utils/               # 工具函数
│   │   ├── styles/              # 全局样式
│   │   ├── App.tsx
│   │   └── main.tsx
│   ├── public/
│   ├── index.html
│   ├── package.json
│   ├── vite.config.ts
│   └── tsconfig.json
├── server/                       # 后端（暂不实现）
├── database/                     # 数据库（暂不实现）
└── doc/                          # 文档
    ├── project-design.md
    └── questions/
        └── algorithm.md
```

### 2.3 页面路由设计

```
/                          # 首页 - 题目列表
/question/:id              # 题目详情页
/categories                # 分类浏览页
/learning-path             # 学习路径页
```

---

## 3. 数据结构设计

### 3.1 题目数据结构

```typescript
interface Question {
  id: string;
  number: number;           // LeetCode题目编号
  title: string;            // 题目标题
  titleCn: string;          // 中文标题
  difficulty: 'easy' | 'medium' | 'hard';  // 难度
  category: string;         // 分类（数组、链表、树等）
  tags: string[];           // 标签
  description: string;      // 题目描述
  examples: Example[];      // 示例
  constraints: string[];    // 约束条件
  solutions: Solution[];    // 题解
  link: string;             // LeetCode链接
  frequency?: number;       // 面试出现频率
}

interface Example {
  input: string;
  output: string;
  explanation?: string;
}

interface Solution {
  language: 'javascript' | 'typescript';
  code: string;
  explanation?: string;
  timeComplexity?: string;
  spaceComplexity?: string;
}
```

### 3.2 分类数据结构

```typescript
interface Category {
  id: string;
  name: string;
  nameCn: string;
  description: string;
  questions: string[];  // 题目ID列表
}
```

---

## 4. 核心功能设计

### 4.1 首页 - 题目列表
- 支持按分类筛选
- 支持按难度筛选
- 支持搜索题目
- 显示题目难度标签
- 显示题目完成状态（本地存储）

### 4.2 题目详情页
- 题目描述展示
- 示例展示
- 代码编辑器
- 代码运行/测试
- 题解查看
- 相关题目推荐

### 4.3 学习路径页
- 按难度递进学习路径
- 按面试频率排序
- 学习进度可视化

---

## 5. 响应式设计方案

### 5.1 断点设置
- 移动端: < 768px
- 平板端: 768px - 1024px
- PC端: > 1024px

### 5.2 布局策略
- PC端：双栏布局（左侧题目列表，右侧题目详情）
- 移动端：单栏布局，页面间跳转

---

## 6. 开发计划

### 阶段一：基础搭建
- [x] 项目初始化
- [ ] 路由配置
- [ ] 基础样式框架

### 阶段二：数据层
- [ ] 题目数据整理
- [ ] 数据结构定义
- [ ] 静态数据加载

### 阶段三：核心页面
- [ ] 首页/题目列表页
- [ ] 题目详情页
- [ ] 代码编辑器集成

### 阶段四：优化完善
- [ ] 响应式适配
- [ ] 交互优化
- [ ] 性能优化

---

## 7. 后续扩展方向

- 用户账户系统
- 题目提交记录
- 学习进度统计
- 社区讨论功能
- 后端API开发
- 数据库设计与实现
