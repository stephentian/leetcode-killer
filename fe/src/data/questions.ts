import { Question, Category, Phase } from '../types';

export const questions: Question[] = [
  {
    id: '1',
    number: 0,
    title: 'Rotate Array K Steps',
    titleCn: '把一个数组旋转 K 步',
    difficulty: 'easy',
    category: '数组',
    tags: ['数组', '双指针'],
    description: '给定一个数组，将数组中的元素向右移动 k 个位置，其中 k 是非负数。',
    examples: [
      { input: 'nums = [1,2,3,4,5,6,7], k = 3', output: '[5,6,7,1,2,3,4]' },
      { input: 'nums = [-1,-100,3,99], k = 2', output: '[3,99,-1,-100]' },
    ],
    constraints: [
      '1 <= nums.length <= 10^5',
      '-2^31 <= nums[i] <= 2^31 - 1',
      '0 <= k <= 10^5',
    ],
    solutions: [
      {
        language: 'javascript',
        code: `function rotateArr1(arr, k) {
  const length = arr.length

  if(!k || length === 0) return arr
  const step = Math.abs(k % length)  //abs 取绝对值
  const part1 = arr.slice(-step)
  const part2 = arr.slice(0, length - step)
  const part3 = part1.concat(part2)
  return part3
};`,
        timeComplexity: 'O(n)',
        spaceComplexity: 'O(1)',
      },
    ],
    link: 'https://leetcode.cn/problems/rotate-array/',
    frequency: 4,
    phase: 1,
  },
  {
    id: '2',
    number: 206,
    title: 'Reverse Linked List',
    titleCn: '反转链表',
    difficulty: 'easy',
    category: '链表',
    tags: ['链表', '递归'],
    description: '给你单链表的头节点 head ，请你反转链表，并返回反转后的链表。',
    examples: [
      { input: 'head = [1,2,3,4,5]', output: '[5,4,3,2,1]' },
      { input: 'head = [1,2]', output: '[2,1]' },
      { input: 'head = []', output: '[]' },
    ],
    constraints: [
      '链表中节点的数目范围是 [0, 5000]',
      '-5000 <= Node.val <= 5000',
    ],
    solutions: [
      {
        language: 'javascript',
        code: `function reverseLinkList(head) {
  let preNode = null
  let curNode = head

  while(curNode) {
      let temp = curNode.next
      curNode.next = preNode
      preNode = curNode
      curNode = temp
  }

  return preNode
};`,
        timeComplexity: 'O(n)',
        spaceComplexity: 'O(1)',
      },
    ],
    link: 'https://leetcode.cn/problems/reverse-linked-list/',
    frequency: 5,
    phase: 1,
  },
  {
    id: '3',
    number: 21,
    title: 'Merge Two Sorted Lists',
    titleCn: '合并两个有序链表',
    difficulty: 'easy',
    category: '链表',
    tags: ['链表', '双指针', '递归'],
    description: '将两个升序链表合并为一个新的 升序 链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。',
    examples: [
      { input: 'list1 = [1,2,4], list2 = [1,3,4]', output: '[1,1,2,3,4,4]' },
      { input: 'list1 = [], list2 = []', output: '[]' },
      { input: 'list1 = [], list2 = [0]', output: '[0]' },
    ],
    constraints: [
      '两个链表的节点数目范围是 [0, 50]',
      '-100 <= Node.val <= 100',
      'list1 和 list2 均按 非递减顺序 排列',
    ],
    solutions: [
      {
        language: 'javascript',
        code: `var mergeTwoLists = function(list1, list2) {
    let dummy = new ListNode();
    let cur = dummy;
    while (list1 && list2) {
        if (list1.val <= list2.val) {
            cur.next = list1;
            list1 = list1.next;
        } else {
            cur.next = list2;
            list2 = list2.next;
        }
        cur = cur.next;
    }
    cur.next = list1 !== null ? list1 : list2;
    return dummy.next;
};`,
        timeComplexity: 'O(n)',
        spaceComplexity: 'O(1)',
      },
    ],
    link: 'https://leetcode.cn/problems/merge-two-sorted-lists/',
    frequency: 5,
    phase: 1,
  },
  {
    id: '4',
    number: 67,
    title: 'Add Binary',
    titleCn: '二进制求和',
    difficulty: 'easy',
    category: '字符串',
    tags: ['字符串', '位运算', '模拟'],
    description: '给你两个二进制字符串 a 和 b ，以二进制字符串的形式返回它们的和。',
    examples: [
      { input: 'a = "11", b = "1"', output: '"100"' },
      { input: 'a = "1010", b = "1011"', output: '"10101"' },
    ],
    constraints: [
      '1 <= a.length, b.length <= 10^4',
      'a 和 b 仅由字符 \'0\' 或 \'1\' 组成',
      '字符串如果不是 "0" ，就不含前导零',
    ],
    solutions: [
      {
        language: 'javascript',
        code: `var addBinary = function(a, b) {
  let ans = ''
  let carry = 0 // 进位

  let i = a.length - 1
  let j = b.length - 1
  for (; i >= 0 || j >= 0; i--, j--) {

    let m = i >= 0 ? parseInt(a[i]) : 0
    let n = j >= 0 ? parseInt(b[j]) : 0
    // 补 0

    let sum = carry + m + n

    ans = ans + sum%2 // 拼接 1
    carry = Math.floor(sum/2)
  }

  ans = ans + (carry == 1 ? carry : '') // 判断最后是否进位
  return ans.split('').reverse().join('');
};`,
        timeComplexity: 'O(max(n, m))',
        spaceComplexity: 'O(max(n, m))',
      },
    ],
    link: 'https://leetcode.cn/problems/add-binary/',
    frequency: 4,
    phase: 1,
  },
  {
    id: '5',
    number: 104,
    title: 'Maximum Depth of Binary Tree',
    titleCn: '二叉树的最大深度',
    difficulty: 'easy',
    category: '树',
    tags: ['树', 'DFS', 'BFS'],
    description: '给定一个二叉树 root ，返回其最大深度。二叉树的 最大深度 是指从根节点到最远叶子节点的最长路径上的节点数。',
    examples: [
      { input: 'root = [3,9,20,null,null,15,7]', output: '3' },
      { input: 'root = [1,null,2]', output: '2' },
    ],
    constraints: [
      '树中节点的数量在 [0, 10^4] 范围内',
      '-100 <= Node.val <= 100',
    ],
    solutions: [
      {
        language: 'javascript',
        code: `var maxDepth = function(root) {
    if (!root) return 0;

    const left = maxDepth(root.left);
    const right = maxDepth(root.right);

    return Math.max(left, right) + 1;
};`,
        timeComplexity: 'O(n)',
        spaceComplexity: 'O(n)',
      },
    ],
    link: 'https://leetcode.cn/problems/maximum-depth-of-binary-tree/',
    frequency: 5,
    phase: 1,
  },
  {
    id: '6',
    number: 226,
    title: 'Invert Binary Tree',
    titleCn: '翻转二叉树',
    difficulty: 'easy',
    category: '树',
    tags: ['树', 'DFS', 'BFS', '递归'],
    description: '给你一棵二叉树的根节点 root ，翻转这棵二叉树，并返回其根节点。',
    examples: [
      { input: 'root = [4,2,7,1,3,6,9]', output: '[4,7,2,9,6,3,1]' },
      { input: 'root = [2,1,3]', output: '[2,3,1]' },
    ],
    constraints: [
      '树中节点数目范围在 [0, 100] 内',
      '-100 <= Node.val <= 100',
    ],
    solutions: [
      {
        language: 'javascript',
        code: `var invertTree = function(root) {
    if (!root) return root;

    const temp = root.left;
    root.left = root.right;
    root.right = temp;

    invertTree(root.left);
    invertTree(root.right);

    return root;
};`,
        timeComplexity: 'O(n)',
        spaceComplexity: 'O(n)',
      },
    ],
    link: 'https://leetcode.cn/problems/invert-binary-tree/',
    frequency: 5,
    phase: 1,
  },
  {
    id: '7',
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
        code: `const isValid = (s) => {
  if (s && s.length % 2 !== 0) return false

  const stack = []
  const map = {
    '(': ')',
    '{': '}',
    '[': ']'
  }

  for (let i of s) {
    if (map[i]) {
      stack.push(map[i])
    } else {
      if (stack.length === 0 || stack.pop() !== i) return false
    }
  }

  return stack.length === 0
};`,
        timeComplexity: 'O(n)',
        spaceComplexity: 'O(n)',
      },
    ],
    link: 'https://leetcode.cn/problems/valid-parentheses/',
    frequency: 5,
    phase: 1,
  },
  {
    id: '8',
    number: 70,
    title: 'Climbing Stairs',
    titleCn: '爬楼梯',
    difficulty: 'easy',
    category: '动态规划',
    tags: ['动态规划', '数学'],
    description: '假设你正在爬楼梯。需要 n 阶你才能到达楼顶。每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？',
    examples: [
      { input: 'n = 2', output: '2' },
      { input: 'n = 3', output: '3' },
    ],
    constraints: [
      '1 <= n <= 45',
    ],
    solutions: [
      {
        language: 'javascript',
        code: `var climbStairs = function(n) {
    if (n<=2) return n

    const dp = []
    dp[1] = 1
    dp[2] = 2
    for (let i =3; i <= n; i++) {
      dp[i] = dp[i-1] + dp[i-2]
    }

    return dp[n]
};`,
        timeComplexity: 'O(n)',
        spaceComplexity: 'O(1)',
      },
    ],
    link: 'https://leetcode.cn/problems/climbing-stairs/',
    frequency: 5,
    phase: 1,
  },
  {
    id: '9',
    number: 0,
    title: 'Fibonacci Number',
    titleCn: '斐波那契数列',
    difficulty: 'easy',
    category: '动态规划',
    tags: ['动态规划', '数学', '递归'],
    description: '斐波那契数 （通常用 F(n) 表示）形成的序列称为 斐波那契数列 。该数列由 0 和 1 开始，后面的每一项数字都是前面两项数字的和。',
    examples: [
      { input: 'n = 2', output: '1' },
      { input: 'n = 3', output: '2' },
      { input: 'n = 4', output: '3' },
    ],
    constraints: [
      '0 <= n <= 30',
    ],
    solutions: [
      {
        language: 'javascript',
        code: `var fib = function(n) {
    if (n <= 1) return n;
    let prev1 = 0;
    let prev2 = 1;
    for (let i = 2; i <= n; i++) {
        const temp = prev2;
        prev2 = prev1 + prev2;
        prev1 = temp;
    }
    return prev2;
};`,
        timeComplexity: 'O(n)',
        spaceComplexity: 'O(1)',
      },
    ],
    link: 'https://leetcode.cn/problems/fibonacci-number/',
    frequency: 4,
    phase: 1,
  },
  {
    id: '10',
    number: 136,
    title: 'Single Number',
    titleCn: '只出现一次的数字',
    difficulty: 'easy',
    category: '位运算',
    tags: ['位运算', '哈希表'],
    description: '给你一个 非空 整数数组 nums ，除了某个元素只出现一次以外，其余每个元素均出现两次。找出那个只出现了一次的元素。',
    examples: [
      { input: 'nums = [2,2,1]', output: '1' },
      { input: 'nums = [4,1,2,1,2]', output: '4' },
      { input: 'nums = [1]', output: '1' },
    ],
    constraints: [
      '1 <= nums.length <= 3 * 10^4',
      '-3 * 10^4 <= nums[i] <= 3 * 10^4',
      '除了某个元素只出现一次以外，其余每个元素均出现两次',
    ],
    solutions: [
      {
        language: 'javascript',
        code: `var singleNumber = function(nums) {
    let result = 0;
    for (const num of nums) {
        result ^= num;
    }
    return result;
};`,
        timeComplexity: 'O(n)',
        spaceComplexity: 'O(1)',
      },
    ],
    link: 'https://leetcode.cn/problems/single-number/',
    frequency: 4,
    phase: 1,
  },
  {
    id: '11',
    number: 415,
    title: 'Add Strings',
    titleCn: '字符串相加',
    difficulty: 'medium',
    category: '双指针',
    tags: ['字符串', '双指针', '模拟'],
    description: '给定两个字符串形式的非负整数 num1 和num2 ，计算它们的和并同样以字符串形式返回。',
    examples: [
      { input: 'num1 = "11", num2 = "123"', output: '"134"' },
      { input: 'num1 = "456", num2 = "77"', output: '"533"' },
      { input: 'num1 = "0", num2 = "0"', output: '"0"' },
    ],
    constraints: [
      '1 <= num1.length, num2.length <= 10^4',
      'num1 和 num2 都只包含数字 0-9',
      'num1 和 num2 都不包含任何前导零',
    ],
    solutions: [
      {
        language: 'javascript',
        code: `var addStrings = function(num1, num2) {
    let i = num1.length - 1;
    let j = num2.length - 1;
    let carry = 0;
    const res = [];
    while (i >= 0 || j >= 0 || carry !== 0) {
        const x = i >= 0 ? num1.charAt(i) - '0' : 0;
        const y = j >= 0 ? num2.charAt(j) - '0' : 0;
        const result = x + y + carry;
        res.push(result % 10);
        carry = Math.floor(result / 10);
        i--;
        j--;
    }
    return res.reverse().join('');
};`,
        timeComplexity: 'O(max(n, m))',
        spaceComplexity: 'O(max(n, m))',
      },
    ],
    link: 'https://leetcode.cn/problems/add-strings/',
    frequency: 4,
    phase: 2,
  },
  {
    id: '12',
    number: 75,
    title: 'Sort Colors',
    titleCn: '颜色分类',
    difficulty: 'medium',
    category: '双指针',
    tags: ['数组', '双指针', '排序'],
    description: '给定一个包含红色、白色和蓝色、共 n 个元素的数组 nums ，原地对它们进行排序，使得相同颜色的元素相邻，并按照红色、白色、蓝色顺序排列。',
    examples: [
      { input: 'nums = [2,0,2,1,1,0]', output: '[0,0,1,1,2,2]' },
      { input: 'nums = [2,0,1]', output: '[0,1,2]' },
    ],
    constraints: [
      'n == nums.length',
      '1 <= n <= 300',
      'nums[i] 为 0、1 或 2',
    ],
    solutions: [
      {
        language: 'javascript',
        code: `var sortColors = function(nums) {
    let l = 0, cur = 0, r = nums.length - 1;
    while (cur <= r) {
        if (nums[cur] === 0) {
            [nums[l], nums[cur]] = [nums[cur], nums[l]];
            l++;
            cur++;
        } else if (nums[cur] === 2) {
            [nums[r], nums[cur]] = [nums[cur], nums[r]];
            r--;
        } else {
            cur++;
        }
    }
};`,
        timeComplexity: 'O(n)',
        spaceComplexity: 'O(1)',
      },
    ],
    link: 'https://leetcode.cn/problems/sort-colors/',
    frequency: 4,
    phase: 2,
  },
  {
    id: '13',
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
    phase: 2,
  },
  {
    id: '14',
    number: 35,
    title: 'Search Insert Position',
    titleCn: '搜索插入位置',
    difficulty: 'easy',
    category: '二分查找',
    tags: ['数组', '二分查找'],
    description: '给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。如果目标值不存在于数组中，返回它将会被按顺序插入的位置。',
    examples: [
      { input: 'nums = [1,3,5,6], target = 5', output: '2' },
      { input: 'nums = [1,3,5,6], target = 2', output: '1' },
      { input: 'nums = [1,3,5,6], target = 7', output: '4' },
    ],
    constraints: [
      '1 <= nums.length <= 10^4',
      '-10^4 <= nums[i] <= 10^4',
      'nums 为 无重复元素 的 升序 排列数组',
      '-10^4 <= target <= 10^4',
    ],
    solutions: [
      {
        language: 'javascript',
        code: `var searchInsert = function(nums, target) {
    let left = 0, right = nums.length - 1, ans = nums.length;
    while (left <= right) {
        const mid = left + Math.floor((right - left) / 2);
        if (target <= nums[mid]) {
            ans = mid;
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    return ans;
};`,
        timeComplexity: 'O(log n)',
        spaceComplexity: 'O(1)',
      },
    ],
    link: 'https://leetcode.cn/problems/search-insert-position/',
    frequency: 4,
    phase: 2,
  },
  {
    id: '15',
    number: 69,
    title: 'Sqrt(x)',
    titleCn: 'x 的平方根',
    difficulty: 'easy',
    category: '二分查找',
    tags: ['数学', '二分查找'],
    description: '给你一个非负整数 x ，计算并返回 x 的 算术平方根 。由于返回类型是整数，结果只保留 整数部分 ，小数部分将被 舍去 。',
    examples: [
      { input: 'x = 4', output: '2' },
      { input: 'x = 8', output: '2', explanation: '8 的算术平方根是 2.82842..., 由于返回类型是整数，小数部分将被舍去。' },
    ],
    constraints: [
      '0 <= x <= 2^31 - 1',
    ],
    solutions: [
      {
        language: 'javascript',
        code: `var mySqrt = function(x) {
    if (x < 2) return x;
    let left = 2, right = Math.floor(x / 2);
    while (left <= right) {
        const mid = left + Math.floor((right - left) / 2);
        const square = mid * mid;
        if (square === x) return mid;
        if (square < x) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return right;
};`,
        timeComplexity: 'O(log n)',
        spaceComplexity: 'O(1)',
      },
    ],
    link: 'https://leetcode.cn/problems/sqrtx/',
    frequency: 4,
    phase: 2,
  },
  {
    id: '16',
    number: 141,
    title: 'Linked List Cycle',
    titleCn: '环形链表',
    difficulty: 'easy',
    category: '链表',
    tags: ['链表', '快慢指针'],
    description: '给你一个链表的头节点 head ，判断链表中是否有环。如果链表中存在环 ，则返回 true 。 否则，返回 false 。',
    examples: [
      { input: 'head = [3,2,0,-4], pos = 1', output: 'true' },
      { input: 'head = [1,2], pos = 0', output: 'true' },
      { input: 'head = [1], pos = -1', output: 'false' },
    ],
    constraints: [
      '链表中节点的数目范围是 [0, 10^4]',
      '-10^5 <= Node.val <= 10^5',
      'pos 为 -1 或者链表中的一个 有效索引',
    ],
    solutions: [
      {
        language: 'javascript',
        code: `var hasCycle = function(head) {
    if (!head || !head.next) return false;
    let slow = head;
    let fast = head.next;
    while (slow !== fast) {
        if (!fast || !fast.next) return false;
        slow = slow.next;
        fast = fast.next.next;
    }
    return true;
};`,
        timeComplexity: 'O(n)',
        spaceComplexity: 'O(1)',
      },
    ],
    link: 'https://leetcode.cn/problems/linked-list-cycle/',
    frequency: 5,
    phase: 2,
  },
  {
    id: '17',
    number: 160,
    title: 'Intersection of Two Linked Lists',
    titleCn: '相交链表',
    difficulty: 'easy',
    category: '链表',
    tags: ['链表', '双指针', '哈希表'],
    description: '给你两个单链表的头节点 headA 和 headB ，请你找出并返回两个单链表相交的起始节点。如果两个链表不存在相交节点，返回 null 。',
    examples: [
      { input: 'listA = [4,1,8,4,5], listB = [5,6,1,8,4,5]', output: '8' },
      { input: 'listA = [1,9,1,2,4], listB = [3,2,4]', output: '2' },
    ],
    constraints: [
      'listA 中节点数目为 m',
      'listB 中节点数目为 n',
      '1 <= m, n <= 3 * 10^4',
      '1 <= Node.val <= 10^5',
    ],
    solutions: [
      {
        language: 'javascript',
        code: `var getIntersectionNode = function(headA, headB) {
    if (!headA || !headB) return null;
    let a = headA;
    let b = headB;
    while (a !== b) {
        a = a === null ? headB : a.next;
        b = b === null ? headA : b.next;
    }
    return a;
};`,
        timeComplexity: 'O(m + n)',
        spaceComplexity: 'O(1)',
      },
    ],
    link: 'https://leetcode.cn/problems/intersection-of-two-linked-lists/',
    frequency: 4,
    phase: 2,
  },
  {
    id: '18',
    number: 234,
    title: 'Palindrome Linked List',
    titleCn: '回文链表',
    difficulty: 'easy',
    category: '链表',
    tags: ['链表', '双指针', '栈'],
    description: '给你一个单链表的头节点 head ，请你判断该链表是否为回文链表。如果是，返回 true ；否则，返回 false 。',
    examples: [
      { input: 'head = [1,2,2,1]', output: 'true' },
      { input: 'head = [1,2]', output: 'false' },
    ],
    constraints: [
      '链表中节点数目在范围[1, 10^5] 内',
      '0 <= Node.val <= 9',
    ],
    solutions: [
      {
        language: 'javascript',
        code: `var isPalindrome = function(head) {
    // 反转链表
    const reverseList = (head) => {
        let prev = null;
        let curr = head;
        while (curr !== null) {
            let nextTemp = curr.next;
            curr.next = prev;
            prev = curr;
            curr = nextTemp;
        }
        return prev;
    }

    // 找到前半部分链表的尾节点
    // 快慢指针
    // 慢指针移动一步，快指针移动两步； 快指针速度是慢指针的两倍
    // 当快指针走到链表末尾时，慢指针走到链表的中间位置
    const endOfFirstHalf = (head) => {
        let fast = head;
        let slow = head;
        while (fast.next !== null && fast.next.next !== null) {
            fast = fast.next.next;
            slow = slow.next;
        }
        return slow;
    }


    // 找到前半部分链表的尾节点并反转后半部分链表
    const firstHalfEnd = endOfFirstHalf(head);
    const secondHalfStart = reverseList(firstHalfEnd.next);

    // 判断是否回文
    let p1 = head;
    let p2 = secondHalfStart;
    let result = true;
    while (result && p2 != null) {
        if (p1.val != p2.val) result = false;
        p1 = p1.next;
        p2 = p2.next;
    }

    return result
};`,
        timeComplexity: 'O(n)',
        spaceComplexity: 'O(1)',
      },
    ],
    link: 'https://leetcode.cn/problems/palindrome-linked-list/',
    frequency: 4,
    phase: 2,
  },
  {
    id: '19',
    number: 200,
    title: 'Number of Islands',
    titleCn: '岛屿数量',
    difficulty: 'medium',
    category: '树',
    tags: ['DFS', 'BFS', '并查集', '数组', '矩阵'],
    description: '给你一个由 \'1\'（陆地）和 \'0\'（水）组成的的二维网格，请你计算网格中岛屿的数量。',
    examples: [
      { input: 'grid = [["1","1","1","1","0"],["1","1","0","1","0"],["1","1","0","0","0"],["0","0","0","0","0"]]', output: '1' },
      { input: 'grid = [["1","1","0","0","0"],["1","1","0","0","0"],["0","0","1","0","0"],["0","0","0","1","1"]]', output: '3' },
    ],
    constraints: [
      'm == grid.length',
      'n == grid[i].length',
      '1 <= m, n <= 300',
      'grid[i][j] 的值为 \'0\' 或 \'1\'',
    ],
    solutions: [
      {
        language: 'javascript',
        code: `var numIslands = function(grid) {
    let res = 0;
    const row = grid.length;
    const col = grid[0].length;
    const dfs = (x, y) => {
        grid[x][y] = '0';
        if (x > 0 && grid[x - 1][y] === '1') dfs(x - 1, y);
        if (x < row - 1 && grid[x + 1][y] === '1') dfs(x + 1, y);
        if (y > 0 && grid[x][y - 1] === '1') dfs(x, y - 1);
        if (y < col - 1 && grid[x][y + 1] === '1') dfs(x, y + 1);
    };
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            if (grid[i][j] === '1') {
                dfs(i, j);
                res++;
            }
        }
    }
    return res;
};`,
        timeComplexity: 'O(m*n)',
        spaceComplexity: 'O(m*n)',
      },
    ],
    link: 'https://leetcode.cn/problems/number-of-islands/',
    frequency: 5,
    phase: 2,
  },
  {
    id: '20',
    number: 257,
    title: 'Binary Tree Paths',
    titleCn: '二叉树的所有路径',
    difficulty: 'easy',
    category: '树',
    tags: ['树', 'DFS', '字符串', '回溯'],
    description: '给你一个二叉树的根节点 root ，按 任意顺序 ，返回所有从根节点到叶子节点的路径。',
    examples: [
      { input: 'root = [1,2,3,null,5]', output: '["1->2->5","1->3"]' },
      { input: 'root = [1]', output: '["1"]' },
    ],
    constraints: [
      '树中节点数目在范围 [1, 100] 内',
      '-100 <= Node.val <= 100',
    ],
    solutions: [
      {
        language: 'javascript',
        code: `var binaryTreePaths = function(root) {
    const res = [];
    const helper = (root, path) => {
        if (root) {
            path += root.val.toString();
            if (root.left === null && root.right === null) {
                res.push(path);
            } else {
                path += '->';
                helper(root.left, path);
                helper(root.right, path);
            }
        }
    };
    helper(root, '');
    return res;
};`,
        timeComplexity: 'O(n^2)',
        spaceComplexity: 'O(n^2)',
      },
    ],
    link: 'https://leetcode.cn/problems/binary-tree-paths/',
    frequency: 4,
    phase: 2,
  },
  {
    id: '21',
    number: 94,
    title: 'Binary Tree Inorder Traversal',
    titleCn: '二叉树的中序遍历',
    difficulty: 'easy',
    category: '树',
    tags: ['树', 'DFS', '栈'],
    description: '给定一个二叉树的根节点 root ，返回 它的 中序 遍历 。',
    examples: [
      { input: 'root = [1,null,2,3]', output: '[1,3,2]' },
      { input: 'root = []', output: '[]' },
    ],
    constraints: [
      '树中节点数目在范围 [0, 100] 内',
      '-100 <= Node.val <= 100',
    ],
    solutions: [
      {
        language: 'javascript',
        code: `var inorderTraversal = function(root) {
    const res = [];
    const stack = [];
    while (root || stack.length) {
        while (root) {
            stack.push(root);
            root = root.left;
        }
        root = stack.pop();
        res.push(root.val);
        root = root.right;
    }
    return res;
};`,
        timeComplexity: 'O(n)',
        spaceComplexity: 'O(n)',
      },
    ],
    link: 'https://leetcode.cn/problems/binary-tree-inorder-traversal/',
    frequency: 4,
    phase: 2,
  },
  {
    id: '22',
    number: 515,
    title: 'Find Largest Value in Each Tree Row',
    titleCn: '在每个树行中找最大值',
    difficulty: 'medium',
    category: '树',
    tags: ['树', 'BFS', 'DFS'],
    description: '给定一棵二叉树的根节点 root ，请找出该二叉树中每一层的最大值。',
    examples: [
      { input: 'root = [1,3,2,5,3,null,9]', output: '[1,3,9]' },
      { input: 'root = [1,2,3]', output: '[1,3]' },
    ],
    constraints: [
      '树中节点数目在范围 [0, 10^4] 内',
      '-2^31 <= Node.val <= 2^31 - 1',
    ],
    solutions: [
      {
        language: 'javascript',
        code: `var largestValues = function(root) {
    if (!root) return [];
    const res = [];
    const queue = [root];
    while (queue.length) {
        const len = queue.length;
        let max = -Infinity;
        for (let i = 0; i < len; i++) {
            const node = queue.shift();
            max = Math.max(max, node.val);
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
        res.push(max);
    }
    return res;
};`,
        timeComplexity: 'O(n)',
        spaceComplexity: 'O(n)',
      },
    ],
    link: 'https://leetcode.cn/problems/find-largest-value-in-each-tree-row/',
    frequency: 4,
    phase: 2,
  },
  {
    id: '23',
    number: 198,
    title: 'House Robber',
    titleCn: '打家劫舍',
    difficulty: 'medium',
    category: '动态规划',
    tags: ['动态规划', '数组'],
    description: '你是一个专业的小偷，计划偷窃沿街的房屋。每间房内都藏有一定的现金，影响你偷窃的唯一制约因素就是相邻的房屋装有相互连通的防盗系统，如果两间相邻的房屋在同一晚上被小偷闯入，系统会自动报警。',
    examples: [
      { input: 'nums = [1,2,3,1]', output: '4' },
      { input: 'nums = [2,7,9,3,1]', output: '12' },
    ],
    constraints: [
      '1 <= nums.length <= 100',
      '0 <= nums[i] <= 400',
    ],
    solutions: [
      {
        language: 'javascript',
        code: `var rob = function(nums) {
    if (nums.length === 0) return 0;
    if (nums.length === 1) return nums[0];
    let prev1 = nums[0];
    let prev2 = Math.max(nums[0], nums[1]);
    for (let i = 2; i < nums.length; i++) {
        const temp = prev2;
        prev2 = Math.max(prev2, prev1 + nums[i]);
        prev1 = temp;
    }
    return prev2;
};`,
        timeComplexity: 'O(n)',
        spaceComplexity: 'O(1)',
      },
    ],
    link: 'https://leetcode.cn/problems/house-robber/',
    frequency: 4,
    phase: 2,
  },
  {
    id: '24',
    number: 53,
    title: 'Maximum Subarray',
    titleCn: '最大子数组和',
    difficulty: 'medium',
    category: '动态规划',
    tags: ['数组', '动态规划', '分治'],
    description: '给你一个整数数组 nums ，请你找出一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。',
    examples: [
      { input: 'nums = [-2,1,-3,4,-1,2,1,-5,4]', output: '6' },
      { input: 'nums = [1]', output: '1' },
    ],
    constraints: [
      '1 <= nums.length <= 10^5',
      '-10^4 <= nums[i] <= 10^4',
    ],
    solutions: [
      {
        language: 'javascript',
        code: `var maxSubArray = function(nums) {
    let maxSum = nums[0];
    let currentSum = nums[0];
    for (let i = 1; i < nums.length; i++) {
        currentSum = Math.max(nums[i], currentSum + nums[i]);
        maxSum = Math.max(maxSum, currentSum);
    }
    return maxSum;
};`,
        timeComplexity: 'O(n)',
        spaceComplexity: 'O(1)',
      },
    ],
    link: 'https://leetcode.cn/problems/maximum-subarray/',
    frequency: 5,
    phase: 2,
  },
  {
    id: '25',
    number: 300,
    title: 'Longest Increasing Subsequence',
    titleCn: '最长递增子序列',
    difficulty: 'medium',
    category: '动态规划',
    tags: ['数组', '动态规划', '二分查找'],
    description: '给你一个整数数组 nums ，找到其中最长严格递增子序列的长度。',
    examples: [
      { input: 'nums = [10,9,2,5,3,7,101,18]', output: '4' },
      { input: 'nums = [0,1,0,3,2,3]', output: '4' },
    ],
    constraints: [
      '1 <= nums.length <= 2500',
      '-10^4 <= nums[i] <= 10^4',
    ],
    solutions: [
      {
        language: 'javascript',
        code: `var lengthOfLIS = function(nums) {
  let f = [nums[0]]
  const binarySearch = (num) => {
    let left = 0, right = f.length;
    while (left < right) {
      // let mid = left + ((right - left) >> 1);
      let mid = left + Math.floor((right - left)/2); // 数组的索引会自动向下取整
      if (f[mid] < num) left = mid + 1;
      else right = mid;
    }
    return left
  }

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > f[f.length - 1]) {
      f.push(nums[i])
    } else {
      // 会替换掉第一个大于等于 nums[i] 的元素，但是不会改变递增子序列的长度
      // f 不是真实的递增子序列，只是记录了递增子序列的长度
      f[binarySearch(nums[i])] = nums[i]
    }
  }

  return f.length
};`,
        timeComplexity: 'O(n^2)',
        spaceComplexity: 'O(n)',
      },
    ],
    link: 'https://leetcode.cn/problems/longest-increasing-subsequence/',
    frequency: 4,
    phase: 2,
  },
  {
    id: '26',
    number: 121,
    title: 'Best Time to Buy and Sell Stock',
    titleCn: '买卖股票的最佳时机',
    difficulty: 'easy',
    category: '贪心',
    tags: ['数组', '动态规划', '贪心'],
    description: '给定一个数组 prices ，它的第 i 个元素 prices[i] 表示一支给定股票第 i 天的价格。你只能选择 某一天 买入这只股票，并选择在 未来的某一个不同的日子 卖出该股票。',
    examples: [
      { input: 'prices = [7,1,5,3,6,4]', output: '5' },
      { input: 'prices = [7,6,4,3,1]', output: '0' },
    ],
    constraints: [
      '1 <= prices.length <= 10^5',
      '0 <= prices[i] <= 10^4',
    ],
    solutions: [
      {
        language: 'javascript',
        code: `// 贪心的想法就是取最左最小值，取最右最大值，那么得到的差值就是最大利润。
var maxProfit = function(prices) {
  if (prices.length <= 1) return 0
  let minIndex = 0
  let res = 0

  for (let i = 1; i<prices.length; i++) {

    if (prices[i] - prices[minIndex] > res) {
      res = prices[i] - prices[minIndex]
    }

    if (prices[i] < prices[minIndex]) {
      minIndex = i
    }
  }
  return res
};`,
        timeComplexity: 'O(n)',
        spaceComplexity: 'O(1)',
      },
    ],
    link: 'https://leetcode.cn/problems/best-time-to-buy-and-sell-stock/',
    frequency: 5,
    phase: 2,
  },
  {
    id: '27',
    number: 455,
    title: 'Assign Cookies',
    titleCn: '分发饼干',
    difficulty: 'easy',
    category: '贪心',
    tags: ['数组', '贪心', '排序', '双指针'],
    description: '假设你是一位很棒的家长，想要给你的孩子们一些小饼干。但是，每个孩子最多只能给一块饼干。',
    examples: [
      { input: 'g = [1,2,3], s = [1,1]', output: '1' },
      { input: 'g = [1,2], s = [1,2,3]', output: '2' },
    ],
    constraints: [
      '1 <= g.length <= 3 * 10^4',
      '0 <= s.length <= 3 * 10^4',
      '1 <= g[i], s[j] <= 2^31 - 1',
    ],
    solutions: [
      {
        language: 'javascript',
        code: `var findContentChildren = function(g, s) {
    g.sort((a, b) => a - b);
    s.sort((a, b) => a - b);
    let childIndex = 0;
    let cookieIndex = 0;
    let count = 0;
    while (childIndex < g.length && cookieIndex < s.length) {
        if (s[cookieIndex] >= g[childIndex]) {
            count++;
            childIndex++;
        }
        cookieIndex++;
    }
    return count;
};`,
        timeComplexity: 'O(n log n + m log m)',
        spaceComplexity: 'O(1)',
      },
    ],
    link: 'https://leetcode.cn/problems/assign-cookies/',
    frequency: 4,
    phase: 2,
  },
  {
    id: '28',
    number: 503,
    title: 'Next Greater Element II',
    titleCn: '下一个更大元素 II',
    difficulty: 'medium',
    category: '单调栈',
    tags: ['栈', '数组', '单调栈'],
    description: '给定一个循环数组 nums ，返回 nums 中每个元素的 下一个更大元素 。',
    examples: [
      { input: 'nums = [1,2,1]', output: '[2,-1,2]' },
      { input: 'nums = [1,2,3,4,3]', output: '[2,3,4,-1,4]' },
    ],
    constraints: [
      '1 <= nums.length <= 10^4',
      '-10^9 <= nums[i] <= 10^9',
    ],
    solutions: [
      {
        language: 'javascript',
        code: `var nextGreaterElements = function(nums) {
    const len = nums.length;
    const res = new Array(len).fill(-1);
    const stack = [];
    for (let i = 0; i < len * 2; i++) {
        const num = nums[i % len];
        while (stack.length && num > nums[stack[stack.length - 1] % len]) {
            res[stack.pop() % len] = num;
        }
        stack.push(i);
    }
    return res;
};`,
        timeComplexity: 'O(n)',
        spaceComplexity: 'O(n)',
      },
    ],
    link: 'https://leetcode.cn/problems/next-greater-element-ii/',
    frequency: 4,
    phase: 2,
  },
  {
    id: '29',
    number: 77,
    title: 'Combinations',
    titleCn: '组合',
    difficulty: 'medium',
    category: '排列组合',
    tags: ['回溯', '数组'],
    description: '给定两个整数 n 和 k，返回范围 [1, n] 中所有可能的 k 个数的组合。你可以按 任何顺序 返回答案。',
    examples: [
      { input: 'n = 4, k = 2', output: '[[1,2],[1,3],[1,4],[2,3],[2,4],[3,4]]' },
      { input: 'n = 1, k = 1', output: '[[1]]' },
    ],
    constraints: [
      '1 <= n <= 20',
      '1 <= k <= n',
    ],
    solutions: [
      {
        language: 'javascript',
        code: `var combine = function(n, k) {
    const res = [];
    const helper = (start, path) => {
        if (path.length === k) {
            res.push(path.slice());
            return;
        }
        for (let i = start; i <= n; i++) {
            path.push(i);
            helper(i + 1, path);
            path.pop();
        }
    };
    helper(1, []);
    return res;
};`,
        timeComplexity: 'O(C(n, k))',
        spaceComplexity: 'O(k)',
      },
    ],
    link: 'https://leetcode.cn/problems/combinations/',
    frequency: 4,
    phase: 3,
  },
  {
    id: '30',
    number: 51,
    title: 'N-Queens',
    titleCn: 'N 皇后',
    difficulty: 'hard',
    category: '回溯',
    tags: ['回溯', '数组'],
    description: '按照国际象棋的规则，皇后可以攻击与之处在同一行或同一列或同一斜线上的棋子。',
    examples: [
      { input: 'n = 4', output: '[[".Q..","...Q","Q...","..Q."],["..Q.","Q...","...Q",".Q.."]]' },
      { input: 'n = 1', output: '[["Q"]]' },
    ],
    constraints: [
      '1 <= n <= 9',
    ],
    solutions: [
      {
        language: 'javascript',
        code: `var solveNQueens = function(n) {
    const res = [];
    const board = Array.from({ length: n }, () => '.'.repeat(n));
    const isValid = (row, col, board) => {
        for (let i = 0; i < row; i++) {
            if (board[i][col] === 'Q') return false;
        }
        for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
            if (board[i][j] === 'Q') return false;
        }
        for (let i = row - 1, j = col + 1; i >= 0 && j < n; i--, j++) {
            if (board[i][j] === 'Q') return false;
        }
        return true;
    };
    const backtrack = (row, board) => {
        if (row === n) {
            res.push(board.map(row => row.join('')));
            return;
        }
        for (let col = 0; col < n; col++) {
            if (isValid(row, col, board)) {
                board[row][col] = 'Q';
                backtrack(row + 1, board);
                board[row][col] = '.';
            }
        }
    };
    backtrack(0, board.map(row => row.split('')));
    return res;
};`,
        timeComplexity: 'O(n!)',
        spaceComplexity: 'O(n)',
      },
    ],
    link: 'https://leetcode.cn/problems/n-queens/',
    frequency: 4,
    phase: 3,
  },
  {
    id: '31',
    number: 15,
    title: '3Sum',
    titleCn: '三数之和',
    difficulty: 'medium',
    category: '双指针',
    tags: ['数组', '双指针', '排序'],
    description: '给你一个整数数组 nums ，判断是否存在三元组 [nums[i], nums[j], nums[k]] 满足 i != j、i != k 且 j != k ，同时还满足 nums[i] + nums[j] + nums[k] == 0 。',
    examples: [
      { input: 'nums = [-1,0,1,2,-1,-4]', output: '[[-1,-1,2],[-1,0,1]]' },
      { input: 'nums = [0,1,1]', output: '[]' },
    ],
    constraints: [
      '3 <= nums.length <= 3000',
      '-10^5 <= nums[i] <= 10^5',
    ],
    solutions: [
      {
        language: 'javascript',
        code: `var threeSum = function(nums) {
    const res = [];
    nums.sort((a, b) => a - b);
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 0) break;
        if (i > 0 && nums[i] === nums[i - 1]) continue;
        let left = i + 1;
        let right = nums.length - 1;
        while (left < right) {
            const sum = nums[i] + nums[left] + nums[right];
            if (sum === 0) {
                res.push([nums[i], nums[left], nums[right]]);
                while (left < right && nums[left] === nums[left + 1]) left++;
                while (left < right && nums[right] === nums[right - 1]) right--;
                left++;
                right--;
            } else if (sum < 0) {
                left++;
            } else {
                right--;
            }
        }
    }
    return res;
};`,
        timeComplexity: 'O(n^2)',
        spaceComplexity: 'O(log n)',
      },
    ],
    link: 'https://leetcode.cn/problems/3sum/',
    frequency: 5,
    phase: 3,
  },
  {
    id: '32',
    number: 394,
    title: 'Decode String',
    titleCn: '字符串解码',
    difficulty: 'medium',
    category: '双指针',
    tags: ['栈', '字符串', '递归'],
    description: '给定一个经过编码的字符串，按照编码规则进行解码。',
    examples: [
      { input: 's = "3[a]2[bc]"', output: '"aaabcbc"' },
      { input: 's = "3[a2[c]]"', output: '"accaccacc"' },
    ],
    constraints: [
      '1 <= s.length <= 30',
      's 由小写英文字母、数字和方括号 \'[]\' 组成',
    ],
    solutions: [
      {
        language: 'javascript',
        code: `var decodeString = function(s) {
    const stack = [];
    let currentNum = 0;
    let currentStr = '';
    for (const char of s) {
        if (!isNaN(char)) {
            currentNum = currentNum * 10 + parseInt(char);
        } else if (char === '[') {
            stack.push(currentStr);
            stack.push(currentNum);
            currentStr = '';
            currentNum = 0;
        } else if (char === ']') {
            const num = stack.pop();
            const prevStr = stack.pop();
            currentStr = prevStr + currentStr.repeat(num);
        } else {
            currentStr += char;
        }
    }
    return currentStr;
};`,
        timeComplexity: 'O(n)',
        spaceComplexity: 'O(n)',
      },
    ],
    link: 'https://leetcode.cn/problems/decode-string/',
    frequency: 4,
    phase: 3,
  },
  {
    id: '33',
    number: 24,
    title: 'Swap Nodes in Pairs',
    titleCn: '交换链表节点',
    difficulty: 'medium',
    category: '树',
    tags: ['链表', '递归'],
    description: '给你一个链表，两两交换其中相邻的节点，并返回交换后链表的头节点。',
    examples: [
      { input: 'head = [1,2,3,4]', output: '[2,1,4,3]' },
      { input: 'head = []', output: '[]' },
    ],
    constraints: [
      '链表中节点的数目在范围 [0, 100] 内',
      '0 <= Node.val <= 100',
    ],
    solutions: [
      {
        language: 'javascript',
        code: `var swapPairs = function(head) {
    const dummy = new ListNode(0);
    dummy.next = head;
    let prev = dummy;
    while (prev.next && prev.next.next) {
        const first = prev.next;
        const second = prev.next.next;
        first.next = second.next;
        second.next = first;
        prev.next = second;
        prev = first;
    }
    return dummy.next;
};`,
        timeComplexity: 'O(n)',
        spaceComplexity: 'O(1)',
      },
    ],
    link: 'https://leetcode.cn/problems/swap-nodes-in-pairs/',
    frequency: 4,
    phase: 3,
  },
  {
    id: '34',
    number: 122,
    title: 'Best Time to Buy and Sell Stock II',
    titleCn: '买卖股票的最佳时机 II',
    difficulty: 'medium',
    category: '动态规划',
    tags: ['数组', '动态规划', '贪心'],
    description: '给你一个整数数组 prices ，其中 prices[i] 表示某支股票第 i 天的价格。在每一天，你可以决定是否购买和/或出售股票。你在任何时候 最多 只能持有 一股 股票。',
    examples: [
      { input: 'prices = [7,1,5,3,6,4]', output: '7' },
      { input: 'prices = [1,2,3,4,5]', output: '4' },
    ],
    constraints: [
      '1 <= prices.length <= 3 * 10^4',
      '0 <= prices[i] <= 10^4',
    ],
    solutions: [
      {
        language: 'javascript',
        code: `var maxProfit = function(prices) {
    let maxProfit = 0;
    for (let i = 1; i < prices.length; i++) {
        if (prices[i] > prices[i - 1]) {
            maxProfit += prices[i] - prices[i - 1];
        }
    }
    return maxProfit;
};`,
        timeComplexity: 'O(n)',
        spaceComplexity: 'O(1)',
      },
    ],
    link: 'https://leetcode.cn/problems/best-time-to-buy-and-sell-stock-ii/',
    frequency: 4,
    phase: 3,
  },
  {
    id: '35',
    number: 146,
    title: 'LRU Cache',
    titleCn: 'LRU缓存',
    difficulty: 'medium',
    category: '设计',
    tags: ['设计', '哈希表', '链表'],
    description: '请你设计并实现一个满足 LRU (最近最少使用) 缓存 约束的数据结构。',
    examples: [
      { input: '["LRUCache","put","put","get","put","get","put","get","get","get"]', output: '[null,null,null,1,null,-1,null,-1,3,4]' },
    ],
    constraints: [
      '1 <= capacity <= 3000',
      '0 <= key <= 10^4',
      '0 <= value <= 10^5',
    ],
    solutions: [
      {
        language: 'javascript',
        code: `class LRUCache {
    constructor(capacity) {
        this.capacity = capacity;
        this.cache = new Map();
    }
    get(key) {
        if (!this.cache.has(key)) return -1;
        const value = this.cache.get(key);
        this.cache.delete(key);
        this.cache.set(key, value);
        return value;
    }
    put(key, value) {
        if (this.cache.has(key)) {
            this.cache.delete(key);
        }
        this.cache.set(key, value);
        if (this.cache.size > this.capacity) {
            const firstKey = this.cache.keys().next().value;
            this.cache.delete(firstKey);
        }
    }
}`,
        timeComplexity: 'O(1)',
        spaceComplexity: 'O(capacity)',
      },
    ],
    link: 'https://leetcode.cn/problems/lru-cache/',
    frequency: 5,
    phase: 3,
  },
  {
    id: '36',
    number: 0,
    title: 'Async Scheduler',
    titleCn: '异步并发调度器',
    difficulty: 'medium',
    category: '设计',
    tags: ['设计', 'Promise', '并发控制'],
    description: '实现一个带并发限制的异步调度器，保证同时运行的任务最多有 n 个。',
    examples: [
      { input: 'limit = 2', output: 'Tasks executed with max 2 concurrent' },
    ],
    constraints: [
      '1 <= limit <= 10',
    ],
    solutions: [
      {
        language: 'javascript',
        code: `class Scheduler {
    constructor(limit) {
        this.limit = limit;
        this.queue = [];
        this.runningCount = 0;
    }
    add(task) {
        return new Promise((resolve) => {
            this.queue.push({ task, resolve });
            this.run();
        });
    }
    run() {
        if (this.runningCount < this.limit && this.queue.length > 0) {
            const { task, resolve } = this.queue.shift();
            this.runningCount++;
            task().then(() => {
                this.runningCount--;
                resolve();
                this.run();
            });
        }
    }
}`,
        timeComplexity: 'O(n)',
        spaceComplexity: 'O(n)',
      },
    ],
    link: '',
    frequency: 4,
    phase: 3,
  },
  {
    id: '37',
    number: 169,
    title: 'Majority Element',
    titleCn: '多数元素',
    difficulty: 'easy',
    category: '位运算',
    tags: ['数组', '哈希表', '分治', '排序', '摩尔投票'],
    description: '给定一个大小为 n 的数组 nums ，返回其中的多数元素。多数元素是指在数组中出现次数 大于 ⌊ n/2 ⌋ 的元素。',
    examples: [
      { input: 'nums = [3,2,3]', output: '3' },
      { input: 'nums = [2,2,1,1,1,2,2]', output: '2' },
    ],
    constraints: [
      'n == nums.length',
      '1 <= n <= 5 * 10^4',
      '-10^9 <= nums[i] <= 10^9',
    ],
    solutions: [
      {
        language: 'javascript',
        code: `var majorityElement = function(nums) {
    let count = 0;
    let candidate = null;
    for (const num of nums) {
        if (count === 0) {
            candidate = num;
        }
        count += (num === candidate) ? 1 : -1;
    }
    return candidate;
};`,
        timeComplexity: 'O(n)',
        spaceComplexity: 'O(1)',
      },
    ],
    link: 'https://leetcode.cn/problems/majority-element/',
    frequency: 4,
    phase: 3,
  },
  {
    id: '38',
    number: 165,
    title: 'Compare Version Numbers',
    titleCn: '比较版本号',
    difficulty: 'medium',
    category: '其他',
    tags: ['双指针', '字符串'],
    description: '给你两个版本号 version1 和 version2 ，请你比较它们。',
    examples: [
      { input: 'version1 = "1.01", version2 = "1.001"', output: '0' },
      { input: 'version1 = "1.0", version2 = "1.0.0"', output: '0' },
      { input: 'version1 = "0.1", version2 = "1.1"', output: '-1' },
    ],
    constraints: [
      '1 <= version1.length, version2.length <= 500',
      'version1 和 version2 仅包含数字和 \'.\'',
    ],
    solutions: [
      {
        language: 'javascript',
        code: `var compareVersion = function(version1, version2) {
    const v1 = version1.split('.');
    const v2 = version2.split('.');
    const maxLen = Math.max(v1.length, v2.length);
    for (let i = 0; i < maxLen; i++) {
        const num1 = i < v1.length ? parseInt(v1[i]) : 0;
        const num2 = i < v2.length ? parseInt(v2[i]) : 0;
        if (num1 > num2) return 1;
        if (num1 < num2) return -1;
    }
    return 0;
};`,
        timeComplexity: 'O(max(n, m))',
        spaceComplexity: 'O(max(n, m))',
      },
    ],
    link: 'https://leetcode.cn/problems/compare-version-numbers/',
    frequency: 4,
    phase: 3,
  },
  {
    id: '39',
    number: 403,
    title: 'Frog Jump',
    titleCn: '青蛙过河',
    difficulty: 'hard',
    category: '其他',
    tags: ['DFS', '动态规划', '记忆化'],
    description: '一只青蛙想要过河。假定河流被等分为若干个单元格，并且在每一个单元格内都有可能放有一块石子。',
    examples: [
      { input: 'stones = [0,1,3,5,6,8,12,17]', output: 'true' },
      { input: 'stones = [0,1,2,3,4,8,9,11]', output: 'false' },
    ],
    constraints: [
      '2 <= stones.length <= 2000',
      '0 <= stones[i] <= 2^31 - 1',
      'stones[0] == 0',
    ],
    solutions: [
      {
        language: 'javascript',
        code: `var canCross = function(stones) {
    const map = new Map();
    for (let i = 0; i < stones.length; i++) {
        map.set(stones[i], i);
    }
    const memo = new Map();
    const dfs = (pos, k) => {
        const key = pos + ',' + k;
        if (memo.has(key)) return memo.get(key);
        if (pos === stones.length - 1) return true;
        for (let dk = -1; dk <= 1; dk++) {
            const nextK = k + dk;
            if (nextK <= 0) continue;
            const nextPos = stones[pos] + nextK;
            if (map.has(nextPos)) {
                if (dfs(map.get(nextPos), nextK)) {
                    memo.set(key, true);
                    return true;
                }
            }
        }
        memo.set(key, false);
        return false;
    };
    return dfs(0, 0);
};`,
        timeComplexity: 'O(n^2)',
        spaceComplexity: 'O(n^2)',
      },
    ],
    link: 'https://leetcode.cn/problems/frog-jump/',
    frequency: 4,
    phase: 3,
  },
];

export const categories: Category[] = [
  {
    id: 'phase1',
    name: 'Phase 1',
    nameCn: '第一阶段：基础入门',
    description: '建议 1-2 周，掌握基础题型',
    questionIds: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
  },
  {
    id: 'phase2',
    name: 'Phase 2',
    nameCn: '第二阶段：进阶提升',
    description: '建议 2-3 周，提升解题能力',
    questionIds: ['11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28'],
  },
  {
    id: 'phase3',
    name: 'Phase 3',
    nameCn: '第三阶段：高级突破',
    description: '建议 2-4 周，突破困难题型',
    questionIds: ['29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39'],
  },
  {
    id: 'array',
    name: 'Array',
    nameCn: '数组',
    description: '数组相关的算法题目',
    questionIds: ['1'],
  },
  {
    id: 'linkedlist',
    name: 'Linked List',
    nameCn: '链表',
    description: '链表相关的算法题目',
    questionIds: ['2', '3', '16', '17', '18', '33'],
  },
  {
    id: 'tree',
    name: 'Tree',
    nameCn: '树',
    description: '树相关的算法题目',
    questionIds: ['5', '6', '19', '20', '21', '22'],
  },
  {
    id: 'stack',
    name: 'Stack',
    nameCn: '栈',
    description: '栈相关的算法题目',
    questionIds: ['7', '28', '32'],
  },
  {
    id: 'twopointers',
    name: 'Two Pointers',
    nameCn: '双指针',
    description: '双指针相关的算法题目',
    questionIds: ['11', '12', '31', '38'],
  },
  {
    id: 'slidingwindow',
    name: 'Sliding Window',
    nameCn: '滑动窗口',
    description: '滑动窗口相关的算法题目',
    questionIds: ['13'],
  },
  {
    id: 'binarysearch',
    name: 'Binary Search',
    nameCn: '二分查找',
    description: '二分查找相关的算法题目',
    questionIds: ['14', '15'],
  },
  {
    id: 'dp',
    name: 'Dynamic Programming',
    nameCn: '动态规划',
    description: '动态规划相关的算法题目',
    questionIds: ['8', '9', '23', '24', '25', '34'],
  },
  {
    id: 'greedy',
    name: 'Greedy',
    nameCn: '贪心',
    description: '贪心算法相关的算法题目',
    questionIds: ['26', '27'],
  },
  {
    id: 'bit',
    name: 'Bit Manipulation',
    nameCn: '位运算',
    description: '位运算相关的算法题目',
    questionIds: ['10', '37'],
  },
  {
    id: 'design',
    name: 'Design',
    nameCn: '设计',
    description: '设计相关的算法题目',
    questionIds: ['35', '36'],
  },
  {
    id: 'backtrack',
    name: 'Backtracking',
    nameCn: '回溯',
    description: '回溯算法相关的算法题目',
    questionIds: ['29', '30'],
  },
];