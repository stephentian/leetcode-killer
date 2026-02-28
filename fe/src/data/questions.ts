import { Question } from '../types';

export const questions: Question[] = [
  {
    id: '1',
    number: 206,
    title: 'Reverse Linked List',
    titleCn: '反转链表',
    difficulty: 'easy',
    category: '链表',
    tags: ['链表', '递归'],
    description: '给你单链表的头节点 head ，请你反转链表，并返回反转后的链表。',
    examples: [
      { input: 'head = [1,2,3,4,5]', output: '[5,4,3,2,1]' },
    ],
    constraints: [
      '链表中节点的数目范围是 [0, 5000]',
      '-5000 <= Node.val <= 5000',
    ],
    solutions: [
      {
        language: 'javascript',
        code: `var reverseList = function(head) {
    let prev = null;
    let curr = head;
    while (curr !== null) {
        const nextTemp = curr.next;
        curr.next = prev;
        prev = curr;
        curr = nextTemp;
    }
    return prev;
};`,
        timeComplexity: 'O(n)',
        spaceComplexity: 'O(1)',
      },
    ],
    link: 'https://leetcode.cn/problems/reverse-linked-list/',
    frequency: 5,
  },
  {
    id: '2',
    number: 3,
    title: 'Longest Substring Without Repeating Characters',
    titleCn: '无重复字符的最长子串',
    difficulty: 'medium',
    category: '滑动窗口',
    tags: ['字符串', '滑动窗口', '哈希表'],
    description: '给定一个字符串 s ，请你找出其中不含有重复字符的 最长子串 的长度。',
    examples: [
      { input: 's = "abcabcbb"', output: '3', explanation: '因为无重复字符的最长子串是 "abc"，所以其长度为 3。' },
      { input: 's = "bbbbb"', output: '1', explanation: '因为无重复字符的最长子串是 "b"，所以其长度为 1。' },
    ],
    constraints: [
      '0 <= s.length <= 5 * 10^4',
      's 由英文字母、数字、符号和空格组成',
    ],
    solutions: [
      {
        language: 'javascript',
        code: `var lengthOfLongestSubstring = function(s) {
    const map = new Map();
    let left = 0;
    let maxLength = 0;
    
    for (let right = 0; right < s.length; right++) {
        const char = s[right];
        if (map.has(char) && map.get(char) >= left) {
            left = map.get(char) + 1;
        }
        map.set(char, right);
        maxLength = Math.max(maxLength, right - left + 1);
    }
    
    return maxLength;
};`,
        timeComplexity: 'O(n)',
        spaceComplexity: 'O(min(m, n))',
      },
    ],
    link: 'https://leetcode.cn/problems/longest-substring-without-repeating-characters/',
    frequency: 5,
  },
  {
    id: '3',
    number: 20,
    title: 'Valid Parentheses',
    titleCn: '有效的括号',
    difficulty: 'easy',
    category: '栈',
    tags: ['栈', '字符串'],
    description: '给定一个只包括 \'(\',\')\',\'{\',\'}\',\'[\',\']\' 的字符串 s ，判断字符串是否有效。',
    examples: [
      { input: 's = "()"', output: 'true' },
      { input: 's = "()[]{}"', output: 'true' },
      { input: 's = "(]"', output: 'false' },
    ],
    constraints: [
      '1 <= s.length <= 10^4',
      's 仅由括号 \'()[]{}\' 组成',
    ],
    solutions: [
      {
        language: 'javascript',
        code: `var isValid = function(s) {
    const stack = [];
    const map = {
        ')': '(',
        '}': '{',
        ']': '['
    };
    
    for (const char of s) {
        if (char in map) {
            if (stack.length === 0 || stack.pop() !== map[char]) {
                return false;
            }
        } else {
            stack.push(char);
        }
    }
    
    return stack.length === 0;
};`,
        timeComplexity: 'O(n)',
        spaceComplexity: 'O(n)',
      },
    ],
    link: 'https://leetcode.cn/problems/valid-parentheses/',
    frequency: 5,
  },
];

export const categories = [
  {
    id: 'array',
    name: 'Array',
    nameCn: '数组',
    description: '数组相关的算法题目',
    questionIds: [],
  },
  {
    id: 'linkedlist',
    name: 'Linked List',
    nameCn: '链表',
    description: '链表相关的算法题目',
    questionIds: ['1'],
  },
  {
    id: 'tree',
    name: 'Tree',
    nameCn: '树',
    description: '树相关的算法题目',
    questionIds: [],
  },
  {
    id: 'stack',
    name: 'Stack',
    nameCn: '栈',
    description: '栈相关的算法题目',
    questionIds: ['3'],
  },
  {
    id: 'twopointers',
    name: 'Two Pointers',
    nameCn: '双指针',
    description: '双指针相关的算法题目',
    questionIds: [],
  },
  {
    id: 'slidingwindow',
    name: 'Sliding Window',
    nameCn: '滑动窗口',
    description: '滑动窗口相关的算法题目',
    questionIds: ['2'],
  },
];
