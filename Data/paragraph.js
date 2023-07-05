export const InputData = [
  {
    id: "1",
    CategoryTitle: "Array",
    CategoryData: [
      {
        title: "1. Two Sum",
        link: "",
        code: `var twoSum = function (nums, target) {
          const map = new Map();
        
          for (let i = 0; i < nums.length; i++) {
            const diff = target - nums[i];
        
            if (map.has(diff)) {
              return [map.get(diff), i];
            }
        
            map.set(nums[i], i);
          }
        };`,
      },
      {
        title: "121. Best Time to Buy and Sell Stock",
        link: "",
        code: `var maxProfit = function (prices) {
        let profit = 0;
        let min = prices[0];
      
        for (let i = 1; i < prices.length; ++i) {
          if (min > prices[i]) {
            min = prices[i];
          } else if (prices[i] - min > profit) {
            profit = prices[i] - min;
          }
        }
      
        return profit;
      };`,
      },
      {
        title: "217. Contains Duplicate",
        link: "",
        code: `var containsDuplicate = function (num) {
        return new Set(num).size !== num.length;
      };`,
      },
      {
        title: "238. Product of Array Except Self",
        link: "",
        code: `var productExceptSelf = function (num) {
        const result = [1],
          n = num.length;
        for (let i = 1; i < n; i++) {
          result[i] = result[i - 1] * num[i - 1];
        }
      
        for (let i = n - 1, right = 1; i >= 0; i--) {
          result[i] *= right;
          right *= num[i];
        }
        return result;
      };`,
      },
      {
        title: "53. Maximum Subarray",
        link: "",
        code: `var maxSubArray = function (num) {
        if (num == null || num.length === 0) return 0;
      
        let maxSum = num[0],
          that = 0;
        for (let i = 0, n = num.length; i < n; i++) {
          that += num[i];
          if (that > maxSum) maxSum = that;
          if (that < 0) that = 0;
        }
      
        return maxSum;
      };
      `,
      },
      {
        title: "152. Maximum Product Subarray",
        link: "",
        code: `var maxProduct = function (num) {
        let result = num[0];
        let min = 1;
        let max = 1;
        for (let n of num) {
          [min, max] = [Math.min(n, min * n, max * n), Math.max(n, min * n, max * n)];
          result = Math.max(result, max);
        }
        return result;
      };
      `,
      },
      {
        title: "11. Container With Most Water",
        link: "",
        code: `const maxArea = (height) => {
          let result = 0,
            left = 0,
            right = height.length - 1;
        
          while (left < right) {
            let smallestSide = Math.min(height[left], height[right]);
            let area = (right - left) * smallestSide;
        
            if (area > result) result = area;
        
            if (height[left] < height[right]) left++;
            else right--;
          }
        
          return result;
        };`,
      },
      {
        title: "42. Trapping Rain Water",
        link: "",
        code: `var trap = function (height) {
        const n = height.length;
        let result = 0,
          i = 0,
          j = n - 1,
          min = 0;
        while (i < j) {
          if (height[i] <= min) {
            result += min - height[i];
            i++;
          } else if (height[j] <= min) {
            result += min - height[j];
            j--;
          } else {
            min = Math.min(height[i], height[j]);
          }
        }
        return result;
      };`,
      },
      {
        title: "48. Rotate Image",
        link: "",
        code: `var rotate = function (matrix) {
        const n = matrix.length,
          m = n >> 1;
        for (let i = 0; i < n; i++) {
          for (let j = i + 1; j < n; j++) {
            [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
          }
          for (let j = 0; j < m; j++) {
            [matrix[i][j], matrix[i][n - j - 1]] = [
              matrix[i][n - j - 1],
              matrix[i][j],
            ];
          }
        }
      };`,
      },
      {
        title: "54. Spiral Matrix",
        link: "",
        code: `var spiralOrder = function(matrix) {
          const res = []
          while(matrix.length){
            const first = matrix.shift()
            res.push(...first)
            for(const m of matrix){
              let val = m.pop()
              if(val)
                res.push(val)
                m.reverse()   
            }
            matrix.reverse()
          }
          return res
        };
       `,
      },
      {
        title: "54. Spiral Matrix",
        link: "",
        code: `var spiralOrder = function (matrix) {
          let r = matrix.length,
            c = matrix[0].length;
          let [left, right, top, bottom] = [0, c - 1, 0, r - 1];
          let arr = [];
          while (left <= right && top <= bottom) {
            for (let i = left; i <= right; i++) arr.push(matrix[top][i]);
            top++;
        
            for (let i = top; i <= bottom; i++) arr.push(matrix[i][right]);
            right--;
        
            if (top <= bottom) {
              // condition 1
              for (let i = right; i >= left; i--) arr.push(matrix[bottom][i]);
              bottom--;
            }
        
            if (left <= right) {
              // condition 2
              for (let i = bottom; i >= top; i--) arr.push(matrix[i][left]);
              left++;
            }
          }
        
          return arr;
        };
        `,
      },
      {
        title: "73. Set Matrix Zeroes",
        link: "",
        code: `var setZeroes = function (matrix) {
        const m = matrix.length,
          n = matrix[0].length;
        let col0 = 1;
        for (let i = 0; i < m; i++) {
          if (matrix[i][0] === 0) col0 = 0;
          for (let j = 1; j < n; j++) {
            if (matrix[i][j] === 0) matrix[i][0] = matrix[0][j] = 0;
          }
        }
      
        for (let i = m - 1; i >= 0; i--) {
          for (let j = n - 1; j >= 1; j--) {
            if (matrix[i][0] === 0 || matrix[0][j] === 0) matrix[i][j] = 0;
          }
          if (col0 === 0) matrix[i][0] = 0;
        }
      };`,
      },
      {
        title: "268. Missing Number",
        link: "",
        code: `var missingNumber = function (num) {
        let result = 0;
      
        for (let i = 0; i < num.length; i++) {
          result += i + 1 - num[i];
        }
      
        return result;
      };
      var missingNumber = function (num) {
        let len = num.length;
        let sum = (len * (len + 1)) / 2;
        let sum2 = num.reduce((a, c) => a + c);
        return sum - sum2;
      };`,
      },
      {
        title: "56. Merge Intervals",
        link: "",
        code: `var merge = function(intervals) {
        if (!intervals.length) return intervals;
         intervals.sort((a, b) => a[0] - b[0]);
         let result = [intervals[0]];
         for (let i = 1; i < intervals.length; i++) {
           let current = intervals[i];
           let last = result[result.length - 1];
           if (current[0] <= last[1]) {
             last[1] = Math.max(last[1], current[1]);
           } else {
             result.push(current);
           }
         }
         return result;
       };`,
      },
      {
        title: "55. Jump Game",
        code: `var canJump = function (num) {
          let lastPos = num.length - 1;
          for (let i = lastPos; i >= 0; i--) {
            if (i + num[i] >= lastPos) lastPos = i;
          }
          return lastPos === 0;
        };
        `,
      },
    ],
  },
  {
    id: "2",
    CategoryTitle: "String",
    CategoryData: [
      {
        title: "344. Reverse String",
        link: "",
        code: `var reverseString = function (s) {
        return s.reverse();
      };
      var reverseString = function (s) {
        let i = 0,
          j = s.length - 1;
        while (i < j) {
          // ES6 destructuring assignment
          [s[i], s[j]] = [s[j], s[i]];
          i++;
          j--;
        }
      };
      
      `,
      },
      {
        title: "242. Valid Anagram",
        link: "",
        code: `var isAnagram = function (s, t) {
          if (t.length !== s.length) return false;
          const counts = {};
          for (let c of s) {
            counts[c] = (counts[c] || 0) + 1;
          }
          for (let c of t) {
            if (!counts[c]) return false;
            counts[c]--;
          }
          return true;
        };`,
      },
      {
        title: "8. String to Integer (atoi)",
        link: "",
        code: `var myAtoi = function (str) {
          const n = str.length;
        
          let i = 0,
            result = 0;
          while (str[i] === " ") i++;
        
          let sign = str[i] === "-" ? -1 : 1;
          if (str[i] === "-" || str[i] === "+") i++;
        
          while (i < n) {
            const m = str[i] - 0;
            if (Number.isNaN(m) || str[i] === " ") break;
            result = result * 10 + m;
            i++;
          }
        
          result *= sign;
        
          if (result >= 2147483647) return 2147483647;
          if (result <= -2147483648) return -2147483648;
          return result;
        };
        `,
      },
      {
        title: "3. Longest Substring Without Repeating Characters",
        link: "",
        code: `var lengthOfLongestSubstring = function (s) {
          let set = new Set();
          let left = 0;
          let maxSize = 0;
        
          if (s.length === 0) return 0;
          if (s.length === 1) return 1;
        
          for (let i = 0; i < s.length; i++) {
            while (set.has(s[i])) {
              set.delete(s[left]);
              left++;
            }
            set.add(s[i]);
            maxSize = Math.max(maxSize, i - left + 1);
          }
          return maxSize;
        };`,
      },
      {
        title: "49. Group Anagrams",
        link: "",
        code: `var groupAnagrams = function (str) {
          const shortedString = str.map((word) => word.split("").sort().join(""));
          const hash = {};
          for (let i = 0; i < str.length; i++) {
            if (!hash[shortedString[i]]) {
              hash[shortedString[i]] = [str[i]];
            } else {
              hash[shortedString[i]].push(str[i]);
            }
          }
        
          return Object.values(hash);
        };
        `,
      },
      {
        title: "125. Valid Palindrome",
        link: "",
        code: `var isPalindrome = function (s) {
          s = s.toLowerCase().replace(/[^a-z0-9]/gi, "");
          for (let i = 0, j = s.length - 1; i <= j; i++, j--) {
            if (s.charAt(i) !== s.charAt(j)) return false;
          }
          return true;
        };`,
      },
      {
        title: "5. Longest Palindromic Substring",
        link: "",
        code: `var longestPalindrome = function (s) {
          s = "#" + s.split("").join("#") + "#";
        
          const n = s.length;
          let start = 0,
            end = 0;
          for (let i = 0; i < n; i++) {
            let j = 0;
            while (i - j >= 0 && i + j < n && s[i - j] === s[i + j]) j++;
            if (2 * --j > end - start) {
              start = i - j;
              end = i + j;
            }
          }
        
          return s.slice(start, end).split("#").join("");
        };`,
      },
      {
        title: "3. Longest Substring Without Repeating Characters",
        link: "",
        code: `var lengthOfLongestSubstring = function (s) {
          let set = new Set();
          let left = 0;
          let maxSize = 0;
        
          if (s.length === 0) return 0;
          if (s.length === 1) return 1;
        
          for (let i = 0; i < s.length; i++) {
            while (set.has(s[i])) {
              set.delete(s[left]);
              left++;
            }
            set.add(s[i]);
            maxSize = Math.max(maxSize, i - left + 1);
          }
          return maxSize;
        };`,
      },
      {
        title: "6. Zigzag Conversion",
        link: "",
        code: `var convert = function (s, numRows) {
          if (numRows <= 1) return s;
        
          const rows = Array(numRows).fill("");
          let pos = 0,
            direct = true;
          for (let i = 0, n = s.length; i < n; i++) {
            if (pos === 0) direct = true;
            if (pos === numRows - 1) direct = false;
        
            rows[pos] += s[i];
            pos += direct ? 1 : -1;
          }
        
          return rows.join("");
        };`,
      },
      {
        title: "28. Find the Index of the First Occurrence in a String",
        link: "",
        code: `var strStr = function (haystack, needle) {
          for (let i = 0; ; i++) {
            for (let j = 0; ; j++) {
              if (j === needle.length) return i;
              if (i + j === haystack.length) return -1;
              if (needle[j] !== haystack[i + j]) break;
            }
          }
        };`,
      },
      {
        title: "20. Valid Parentheses",
        link: "",
        code: `var isValid = function (str) {
          const hashMap = { "(": ")", "{": "}", "[": "]" };
          const stuck = [];
        
          for (let ch of str) {
            if (hashMap[ch]) {
              stuck.push(hashMap[ch]);
            } else if (stuck.length > 0 && stuck[stuck.length - 1] === ch) {
              stuck.pop();
            } else {
              return false;
            }
          }
        
          return stuck.length === 0;
        };`,
      },
      {
        title: "38. Count and Say",
        link: "",
        code: `var countAndSay = function (n) {
          var str = "1";
          for (var i = 1; i < n; i++) {
            var strArray = str.split("");
            str = "";
            var count = 1;
            // Loop through current nth level line
            for (var j = 0; j < strArray.length; j++) {
              // Next digit is different
              if (strArray[j] !== strArray[j + 1]) {
                // Go to next non-matching digit
                str += count + strArray[j];
                count = 1;
              } else {
                count++;
              }
            }
          }
          return str;
        };`,
      },
    ],
  },
  {
    id: "3",
    CategoryTitle: "Linked List",
    CategoryData: [
      {
        title: "206. Reverse Linked List",
        link: "",
        code: `var reverseList = function (head) {
          let prev = null;
          let tail = head;
        
          while (tail) {
            const next = tail.next;
            tail.next = prev;
            prev = tail;
            tail = next;
          }
        
          return prev;
        };`,
      },
      {
        title: "21. Merge Two Sorted Lists",
        link: "",
        code: `var mergeTwoLists = function (l1, l2) {
          if (l1 == null) return l2;
          if (l2 == null) return l1;
        
          if (l1.val < l2.val) {
            l1.next = mergeTwoLists(l1.next, l2);
            return l1;
          } else {
            l2.next = mergeTwoLists(l1, l2.next);
            return l2;
          }
        };`,
      },
      {
        title: "19. Remove Nth Node From End of List",
        link: "",
        code: `var removeNthFromEnd = function (head, n) {
          const start = new ListNode();
          let slow = start,
            fast = start;
          slow.next = head;
        
          for (let i = 0; i <= n; i++) {
            fast = fast.next;
          }
        
          while (fast) {
            fast = fast.next;
            slow = slow.next;
          }
          slow.next = slow.next.next;
        
          return start.next;
        };`,
      },
      {
        title: "141. Linked List Cycle",
        link: "",
        code: `var hasCycle = function (head) {
          let p1 = head;
          let p2 = head;
        
          while (p2 && p2.next && p2.next.next) {
            p1 = p1.next;
            p2 = p2.next.next;
        
            if (p1 === p2) {
              return true;
            }
          }
        
          return false;
        };`,
      },
      {
        title: "2. Add Two Numbers",
        link: "",
        code: `var addTwoNumbers = function (l1, l2) {
          const result = new ListNode();
          let p = l1,
            q = l2,
            node = result,
            carry = 0;
          while (p || q || carry) {
            const sum = (p ? p.val : 0) + (q ? q.val : 0) + carry;
            node.next = new ListNode(sum % 10);
            carry = Math.trunc(sum / 10);
            node = node.next;
            if (p) p = p.next;
            if (q) q = q.next;
          }
          return result.next;
        };`,
      },
      {
        title: "160. Intersection of Two Linked Lists",
        link: "",
        code: `var getIntersectionNode = function (headA, headB) {
          if (!headA || !headB) return null;
          var curA = headA;
          var curB = headB;
          while (curA != curB) {
            curA = curA == null ? headB : curA.next;
            curB = curB == null ? headA : curB.next;
          }
          return curA;
        };`,
      },
      {
        title: "234. Palindrome Linked List",
        link: "",
        code: `var isPalindrome = function (head) {
          let a = "",
            b = "";
        
          while (head) {
            a = a + head.val;
            b = head.val + b;
            head = head.next;
          }
        
          return a === b;
        };
        `,
      },
      {
        title: "83. Remove Duplicates from Sorted List",
        link: "",
        code: `var deleteDuplicates = function (head) {
          let p = head;
          while (p && p.next) {
            if (p.val === p.next.val) p.next = p.next.next;
            else p = p.next;
          }
        
          return head;
        };
        `,
      },
      {
        title: "",
        code: ``,
      },
    ],
  },
  {
    id: "4",
    CategoryTitle: "Stack and Queue",
    CategoryData: [
      {
        title: "155. Min Stack",
        link: "",
        code: `var MinStack = function () {
          this.elements = [];
        };
        
        MinStack.prototype.push = function (val) {
          this.elements.push({
            value: val,
            min: this.elements.length === 0 ? val : Math.min(val, this.getMin()),
          });
        };
        
        MinStack.prototype.pop = function () {
          this.elements.pop();
        };
        
        MinStack.prototype.top = function () {
          return this.elements[this.elements.length - 1].value;
        };
        
        MinStack.prototype.getMin = function () {
          return this.elements[this.elements.length - 1].min;
        };
        `,
      },
      {
        title: "20. Valid Parentheses",
        link: "https://leetcode.com/problems/valid-parentheses/",
        code: `var isValid = function (s) {
          const stack = [];
          const map = {
            "(": ")",
            "[": "]",
            "{": "}",
          };
        
          for (let i = 0; i < s.length; i++) {
            let c = s[i];
            if (map[c]) {
              stack.push(map[c]);
            } else if (c !== stack.pop()) {
              return false;
            }
          }
        
          return !stack.length;
        };`,
      },
      {
        title: "150. Evaluate Reverse Polish Notation",
        link: "https://leetcode.com/problems/evaluate-reverse-polish-notation/description/",
        code: `var evalRPN = function (tokens) {
          let stack = [];
          let ops = {
            "+": (a, b) => a + b,
            "-": (a, b) => a - b,
            "*": (a, b) => a * b,
            "/": (a, b) => (a / b >= 0 ? Math.floor(a / b) : Math.ceil(a / b)),
          };
          for (let t of tokens) {
            if (ops[t]) {
              let top = stack.pop();
              let second = stack.pop();
              stack.push(ops[t](second, top));
            } else {
              stack.push(Number(t));
            }
          }
          return stack.pop();
        };`,
      },
      {
        title: "232. Implement Queue using Stacks",
        link: "https://leetcode.com/problems/implement-queue-using-stacks/description/",
        code: `var MyQueue = function () {
          this.stack1 = [];
          this.stack2 = [];
          this.front = null;
        };
        
        MyQueue.prototype.push = function (x) {
          if (this.stack1.length == 0) {
            this.front = x;
          }
          this.stack1.push(x);
        };
        
        MyQueue.prototype.pop = function () {
          if (this.stack2.length == 0) {
            while (this.stack1.length != 0) {
              this.stack2.push(this.stack1.pop());
            }
          }
          return this.stack2.pop();
        };
        
        MyQueue.prototype.peek = function () {
          return this.stack2.length == 0
            ? this.front
            : this.stack2[this.stack2.length - 1];
        };
        
        MyQueue.prototype.empty = function () {
          return this.stack1.length == 0 && this.stack2.length == 0;
        };
        `,
      },
      {
        title: "225. Implement Stack using Queues",
        link: "https://leetcode.com/problems/implement-stack-using-queues/description/",
        code: `class MyQueue {
          constructor() {
            this.data = [];
            this.front = 0;
            this.rear = 0;
          }
          enqueue(element) {
            this.data[this.rear] = element;
            this.rear++;
          }
        
          isEmpty() {
            return this.front == this.rear;
          }
        
          print() {
            for (let i = this.front; i < this.rear; ++i) console.log(this.data[i]);
          }
          dequeue() {
            if (this.isEmpty()) {
              throw new Error("Queue Underflow");
            }
            let frontElement = this.data[this.front];
            this.front++;
            return frontElement;
          }
        
          length() {
            return this.rear - this.front;
          }
          getFront() {
            if (this.isEmpty()) {
              throw new Error("Queue is Empty!");
            }
            return this.data[this.front];
          }
        }
        `,
      },
      {
        title: "225. Implement Stack using Queues",
        link: "https://leetcode.com/problems/implement-stack-using-queues/description/",
        code: `var MyStack = function () {
          this.inQueue = [];
          this.outQueue = [];
        };
        
        MyStack.prototype.push = function (x) {
          this.inQueue.push(x);
        };
        
        MyStack.prototype.pop = function () {
          while (this.inQueue.length > 1) {
            this.outQueue.push(this.inQueue.shift());
          }
          const lastItem = this.inQueue.shift();
          [this.inQueue, this.outQueue] = [this.outQueue, this.inQueue];
        
          return lastItem;
        };
        
        MyStack.prototype.top = function () {
          while (this.inQueue.length > 1) {
            this.outQueue.push(this.inQueue.shift());
          }
          // peak
          const lastItem = this.inQueue[0];
          this.outQueue.push(this.inQueue.shift());
          [this.inQueue, this.outQueue] = [this.outQueue, this.inQueue];
        
          return lastItem;
        };
        
        MyStack.prototype.empty = function () {
          return this.inQueue.length === 0;
        };`,
      },
      {
        title: "622. Design Circular Queue",
        link: "https://leetcode.com/problems/design-circular-queue/description/",
        code: `var MyCircularQueue = function (k) {
          this.storage = [];
          this.currentSize = 0;
          this.maxSize = k;
          this.front = 0;
          this.rear = -1;
        };
        
        MyCircularQueue.prototype.enQueue = function (value) {
          if (this.currentSize >= this.maxSize) {
            return false;
          }
        
          this.rear = ++this.rear % this.maxSize;
          this.storage[this.rear] = value;
          this.currentSize++;
        
          return true;
        };
        
        MyCircularQueue.prototype.deQueue = function () {
          if (this.currentSize === 0) {
            return false;
          }
        
          this.front = ++this.front % this.maxSize;
          this.currentSize--;
        
          return true;
        };
        
        MyCircularQueue.prototype.Front = function () {
          return this.currentSize === 0 ? -1 : this.storage[this.front];
        };
        
        MyCircularQueue.prototype.Rear = function () {
          return this.currentSize === 0 ? -1 : this.storage[this.rear];
        };
        
        MyCircularQueue.prototype.isEmpty = function () {
          return this.currentSize === 0;
        };
        
        MyCircularQueue.prototype.isFull = function () {
          return this.currentSize === this.maxSize;
        };`,
      },
      {
        title: "239. Sliding Window Maximum",
        link: "https://leetcode.com/problems/sliding-window-maximum/",
        code: `var maxSlidingWindow = function (nums, k) {
          const q = [];
          const res = [];
          for (let i = 0; i < nums.length; i++) {
            while (q && nums[q[q.length - 1]] <= nums[i]) {
              q.pop();
            }
            q.push(i);
        
            if (q[0] === i - k) {
              q.shift();
            }
            if (i >= k - 1) {
              res.push(nums[q[0]]);
            }
          }
          return res;
        };
        `,
      },
      {
        title: "",
        link: "",
        code: ``,
      },
    ],
  },
];
