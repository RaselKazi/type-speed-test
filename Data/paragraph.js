export const InputData = [
  {
    id: "1",
    CategoryTitle: "Array",
    CategoryData: [
      {
        title: "1. Two Sum",
        Difficulty: "Easy",
        link: "https://leetcode.com/problems/two-sum/",
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
        Difficulty: "Easy",
        link: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/",
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
        Difficulty: "Easy",
        link: "https://leetcode.com/problems/contains-duplicate/",
        code: `var containsDuplicate = function (num) {
        return new Set(num).size !== num.length;
      };`,
      },
      {
        title: "238. Product of Array Except Self",
        Difficulty: "Medium",
        link: "https://leetcode.com/problems/product-of-array-except-self/",
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
        Difficulty: "Medium",
        link: "https://leetcode.com/problems/maximum-subarray/",
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
        Difficulty: "Medium",
        link: "https://leetcode.com/problems/maximum-product-subarray/",
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
        Difficulty: "Medium",
        link: "https://leetcode.com/problems/container-with-most-water/",
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
        Difficulty: "Hard",
        link: "https://leetcode.com/problems/trapping-rain-water/",
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
        Difficulty: "Medium",
        link: "https://leetcode.com/problems/rotate-image/",
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
        Difficulty: "Medium",
        link: "https://leetcode.com/problems/spiral-matrix/",
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
        Difficulty: "Medium",
        link: "https://leetcode.com/problems/spiral-matrix/",
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
        Difficulty: "Medium",
        link: "https://leetcode.com/problems/set-matrix-zeroes/",
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
        Difficulty: "Easy",
        link: "https://leetcode.com/problems/missing-number/",
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
        Difficulty: "Medium",
        link: "https://leetcode.com/problems/merge-intervals/",
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
        Difficulty: "Medium",
        link: "https://leetcode.com/problems/jump-game/",
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
        Difficulty: "Easy",
        link: "https://leetcode.com/problems/reverse-string/",
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
        Difficulty: "Easy",
        link: "https://leetcode.com/problems/valid-anagram/",
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
        Difficulty: "Medium",
        link: "https://leetcode.com/problems/string-to-integer-atoi/",
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
        Difficulty: "Medium",
        link: "https://leetcode.com/problems/longest-substring-without-repeating-characters/",
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
        Difficulty: "Medium",
        link: "https://leetcode.com/problems/group-anagrams/",
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
        Difficulty: "Easy",
        link: "https://leetcode.com/problems/valid-palindrome/",
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
        Difficulty: "Easy",
        link: "https://leetcode.com/problems/longest-palindromic-substring/",
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
        title: "6. Zigzag Conversion",
        Difficulty: "Medium",
        link: "https://leetcode.com/problems/zigzag-conversion/",
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
        Difficulty: "Easy",
        link: "https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/",
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
        Difficulty: "Easy",
        link: "https://leetcode.com/problems/valid-parentheses/",
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
        Difficulty: "Medium",
        link: "https://leetcode.com/problems/count-and-say/",
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
        Difficulty: "Easy",
        link: "https://leetcode.com/problems/reverse-linked-list/",
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
        Difficulty: "Easy",
        link: "https://leetcode.com/problems/merge-two-sorted-lists/",
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
        Difficulty: "Medium",
        link: "https://leetcode.com/problems/remove-nth-node-from-end-of-list/",
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
        Difficulty: "Easy",
        link: "https://leetcode.com/problems/linked-list-cycle/",
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
        Difficulty: "Medium",
        link: "https://leetcode.com/problems/add-two-numbers/",
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
        Difficulty: "Easy",
        link: "https://leetcode.com/problems/intersection-of-two-linked-lists/",
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
        Difficulty: "Easy",
        link: "https://leetcode.com/problems/palindrome-linked-list/",
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
        Difficulty: "Easy",
        link: "https://leetcode.com/problems/remove-duplicates-from-sorted-list/",
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
        Difficulty: "",
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
        Difficulty: "Medium",
        link: "https://leetcode.com/problems/min-stack/",
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
        Difficulty: "Easy",
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
        Difficulty: "Medium",
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
        Difficulty: "Easy",
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
        Difficulty: "Easy",
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
        Difficulty: "Easy",
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
        Difficulty: "Medium",
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
        Difficulty: "Hard",
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
        title: "84. Largest Rectangle in Histogram",
        Difficulty: "Hard",
        link: "https://leetcode.com/problems/largest-rectangle-in-histogram/",
        code: `var largestRectangleArea = function (heights) {
          var len = heights.length;
          if (len <= 0) {
            return 0;
          }
          heights.push(0);
          ++len;
        
          var max = heights[0];
          for (var i = 1; i < len; ++i) {
            if (heights[i - 1] > heights[i]) {
              var j = i - 1,
                width = 0;
              while (j >= 0 && heights[j] > heights[i]) {
                ++width;
                max = Math.max(max, width * heights[j]);
                heights[j--] = heights[i];
              }
            }
          }
          return max;
        };`,
      },
      {
        title: "739. Daily Temperatures",
        Difficulty: "Medium",
        link: "https://leetcode.com/problems/daily-temperatures/description/",
        code: `var dailyTemperatures = function (T) {
          let stack = [];
          let result = new Array(T.length).fill(0);
          for (let i = 0; i < T.length; i++) {
            while (stack.length && T[i] > T[stack[stack.length - 1]]) {
              let temp = stack.pop();
              result[temp] = i - temp;
            }
            stack.push(i);
          }
          return result;
        };
        `,
      },
      {
        title: "",
        Difficulty: "",
        link: "",
        code: ``,
      },
      {
        title: "",
        Difficulty: "",
        link: "",
        code: ``,
      },
    ],
  },
  {
    id: "5",
    CategoryTitle: "Binary Search",
    CategoryData: [
      {
        title: "",
        Difficulty: "",
        link: "",
        code: ``,
      },
    ],
  },
  {
    id: "6",
    CategoryTitle: "Sliding window",
    CategoryData: [
      {
        title: "",
        Difficulty: "",
        link: "",
        code: ``,
      },
    ],
  },
  {
    id: "7",
    CategoryTitle: "Binary Tree and Binary Search Tree",
    CategoryData: [
      {
        title: "",
        Difficulty: "",
        link: "",
        code: ``,
      },
      {
        title: "102. Binary Tree Level Order Traversal",
        Difficulty: "Medium",
        link: "https://leetcode.com/problems/binary-tree-level-order-traversal/",
        code: `var levelOrder = function(root) {
          if (root == null) return [];
          let queue = [], values = [];
          queue.push(root);
          while (queue.length > 0) {
              let len = queue.length, level = [];
              for (let i = 0; i < len; i++) {
                  let node = queue.shift();
                  level.push(node.val);
                  if (node.left) queue.push(node.left);
                  if (node.right) queue.push(node.right);
              }
              values.push(level);
          }
          return values;
        };`,
      },
      {
        title: "104. Maximum Depth of Binary Tree",
        Difficulty: "Easy",
        link: "https://leetcode.com/problems/maximum-depth-of-binary-tree/",
        code: `var maxDepth = function(root) {
          return root == null ? 0 : 1 + Math.max(maxDepth(root.left), maxDepth(root.right))
          
      };`,
      },
      {
        title: "98. Validate Binary Search Tree",
        Difficulty: "Medium",
        link: "https://leetcode.com/problems/validate-binary-search-tree/",
        code: `var isValidBST = function (root, min = null, max = null) {
          if (!root) return true;
          if (min && root.val <= min.val) return false;
          if (max && root.val >= max.val) return false;
          return isValidBST(root.left, min, root) && isValidBST(root.right, root, max);
        };`,
      },
      {
        title: "101. Symmetric Tree",
        Difficulty: "Easy",
        link: "https://leetcode.com/problems/symmetric-tree/",
        code: `var isSymmetric = function (root) {
          if (root == null) return true;
          function iter(left, right) {
            if (left === right) return true;
            if (left && right && left.val === right.val) {
              return iter(left.left, right.right) && iter(left.right, right.left);
            }
            return false;
          }
          return iter(root.left, root.right);
        };`,
      },
      {
        title: "105. Construct Binary Tree from PreOrder and InOrder Traversal",
        Difficulty: "Medium",
        link: "https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/",
        code: `var buildTree = function (preOrder, inOrder) {
          const n = preOrder.length;
          if (n <= 0) return null;
        
          const root = new TreeNode(preOrder[0]);
          const i = preOrder.indexOf(preOrder[0]);
          root.left = buildTree(preOrder.slice(1, i + 1), preOrder.slice(0, i));
          root.right = buildTree(preOrder.slice(i + 1, n), preOrder.slice(i + 1, n));
          return root;
        };`,
      },
      {
        title: "108. Convert Sorted Array to Binary Search Tree",
        Difficulty: "Easy",
        link: "https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/",
        code: `var sortedArrayToBST = function (nums) {
          const n = nums.length;
          if (n === 0) return null;
          const mid = (n - 1) >> 1;
          const root = new TreeNode(nums[mid]);
          root.left = sortedArrayToBST(nums.slice(0, mid));
          root.right = sortedArrayToBST(nums.slice(mid + 1, n));
          return root;
        };`,
      },
      {
        title: "112. Path Sum",
        Difficulty: "Easy",
        link: "https://leetcode.com/problems/path-sum/",
        code: `var hasPathSum = function (root, targetSum) {
          if (root == null) return false;
          if (root.val == targetSum && root.left == null && root.right == null)
            return true;
          return (
            hasPathSum(root.left, targetSum - root.val) ||
            hasPathSum(root.right, targetSum - root.val)
          );
        };`,
      },
      {
        title: "236. Lowest Common Ancestor of a Binary Tree",
        Difficulty: "Medium",
        link: "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/",
        code: `function lowestCommonAncestor(root, p, q) {
          if (!root || root === p || root === q) return root;
          var resL = lowestCommonAncestor(root.left, p, q);
          var resR = lowestCommonAncestor(root.right, p, q);
          return resL && resR ? root : resL || resR;
        }`,
      },
      {
        title: "94. Binary Tree InOrder Traversal",
        Difficulty: "Easy",
        link: "https://leetcode.com/problems/binary-tree-inorder-traversal/",
        code: `var inOrderTraversal = function (root) {
          const res = [];
          function iter(node) {
            if (node != null) {
              iter(node.left);
              res.push(node.val);
              iter(node.right);
            }
          }
          iter(root);
          return res;
        };`,
      },
      {
        title: "",
        Difficulty: "",
        link: "",
        code: ``,
      },
    ],
  },
  {
    id: "8",
    CategoryTitle: "Heap",
    CategoryData: [
      {
        title: "",
        Difficulty: "",
        link: "",
        code: ``,
      },
    ],
  },
  {
    id: "9",
    CategoryTitle: "Recursion and Backtracking",
    CategoryData: [
      {
        title: "70. Climbing Stairs",
        Difficulty: "Easy",
        link: "https://leetcode.com/problems/climbing-stairs/",
        code: `var climbStairs = function (n) {
          const cache = new Map();
          const memo = (n) => {
            if (n < 4) return n;
            if (!cache.has(n)) {
              cache.set(n, memo(n - 2) + memo(n - 1));
            }
            return cache.get(n);
          };
          return memo(n);
        };`,
      },
      {
        title: "22. Generate Parentheses",
        Difficulty: "Medium",
        link: "https://leetcode.com/problems/generate-parentheses/",
        code: `var generateParenthesis = function (n) {
          var arr = [];
          compose(n, n, "");
          return arr;
        
          function compose(left, right, str) {
            if (!left && !right && str.length) return arr.push(str);
            if (left) compose(left - 1, right, str + "(");
            if (right > left) compose(left, right - 1, str + ")");
          }
        };`,
      },
      {
        title: "39. Combination Sum",
        Difficulty: "Medium",
        link: "https://leetcode.com/problems/combination-sum/description/",
        code: `function combinationSum(candidates, target) {
          var buffer = [];
          var result = [];
          search(0, target);
          return result;
        
          function search(startIdx, target) {
            if (target === 0) return result.push(buffer.slice());
            if (target < 0) return;
            if (startIdx === candidates.length) return;
            buffer.push(candidates[startIdx]);
            search(startIdx, target - candidates[startIdx]);
            buffer.pop();
            search(startIdx + 1, target);
          }
        }`,
      },
      {
        title: "46. Permutations",
        Difficulty: "Medium",
        link: "https://leetcode.com/problems/permutations/description/",
        code: `const swap = (arr, i, j) => {
          [arr[i], arr[j]] = [arr[j], arr[i]];
        };
        
        const permute = (num, index = 0, answer = []) => {
          if (index === num.length - 1) {
            answer.push([...num]);
          }
        
          for (let i = index; i < num.length; i++) {
            swap(num, index, i);
            permute(num, index + 1, answer);
            swap(num, index, i);
          }
          return answer;
        };`,
      },
      {
        title: "78. Subsets",
        Difficulty: "Medium",
        link: "https://leetcode.com/problems/subsets/description/",
        code: `var subsets = function (num) {
          const result = [];
          const dfs = (i, num, slate) => {
            if (i === num.length) {
              result.push(slate.slice());
              return;
            }
            dfs(i + 1, num, slate);
            slate.push(num[i]);
            dfs(i + 1, num, slate);
            slate.pop();
          };
          dfs(0, num, []);
          return result;
        };`,
      },
      {
        title: "79. Word Search",
        Difficulty: "Medium",
        link: "https://leetcode.com/problems/word-search/description/",
        code: `var exist = function (board, word) {
          const m = board.length,
            n = board[0].length,
            w = word.length;
          if (w === 0) return true;
        
          function match(i, j, c) {
            let isExist = false;
            if (0 <= i && i < m && 0 <= j && j < n) {
              if (board[i][j] === word[c]) {
                const tmp = word[c];
                board[i][j] = true;
                if (next(i, j, c + 1)) isExist = true;
                board[i][j] = tmp;
              }
            }
            return isExist;
          }
        
          const next = (i, j, c) =>
            c >= w ||
            match(i - 1, j, c) ||
            match(i, j + 1, c) ||
            match(i + 1, j, c) ||
            match(i, j - 1, c);
        
          for (let i = 0; i < m; i++) {
            for (let j = 0; j < n; j++) {
              if (match(i, j, 0)) return true;
            }
          }
          return false;
        };
        `,
      },
      {
        title: "51. N-Queens",
        Difficulty: "Hard",
        link: "https://leetcode.com/problems/n-queens/description/",
        code: `var solveNQueens = function(n) {
          const res = [];
          backtrack(res, n);
          return res;
      };
      
      function backtrack(res, n, board = [], r = 0) {
          if (r === n) {
              res.push(board.map(c => '.'.repeat(c) + 'Q' + '.'.repeat(n - c - 1)));
              return;
          }
          for (let c = 0; c < n; c++) {
              if (!board.some((bc, br) => bc === c || bc === c + r - br || bc === c - r + br)) {
                  board.push(c);
                  backtrack(res, n, board, r + 1);
                  board.pop();
              }
          }
      }`,
      },
      {
        title: "17. Letter Combinations of a Phone Number",
        Difficulty: "Medium",
        link: "https://leetcode.com/problems/letter-combinations-of-a-phone-number/description/",
        code: `const L = {'2':"abc",'3':"def",'4':"ghi",'5':"jkl",
        '6':"mno",'7':"pqrs",'8':"tuv",'9':"wxyz"}
        
   var letterCombinations = function (D) {
     let len = D.length,
       ans = [];
     if (!len) return [];
     const dfs = (pos, str) => {
       if (pos === len) ans.push(str);
       else {
         let letters = L[D[pos]];
         for (let i = 0; i < letters.length; i++) dfs(pos + 1, str + letters[i]);
       }
     };
     dfs(0, "");
     return ans;
   };`,
      },
      {
        title: "131. Palindrome Partitioning",
        Difficulty: "Medium",
        link: "https://leetcode.com/problems/palindrome-partitioning/description/",
        code: `var partition = function (s) {
          function isPalindrome(str) {
            let left = 0,
              right = str.length - 1;
        
            while (left < right) {
              if (str[left] !== str[right]) return false;
              left++;
              right--;
            }
            return true;
          }
          const result = [];
          function permute(arr, str) {
            if (!str.length) result.push(arr);
        
            for (let i = 1; i <= str.length; i++) {
              const subStr = str.slice(0, i);
              if (isPalindrome(subStr)) {
                permute([...arr, subStr], str.slice(i));
              }
            }
          }
          permute([], s);
          return result;
        };`,
      },
      {
        title: "93. Restore IP Addresses",
        Difficulty: "Medium",
        link: "https://leetcode.com/problems/restore-ip-addresses/description/",
        code: `var restoreIpAddresses = function (s) {
          const result = [];
          function permute(arr, str) {
            if (arr.length === 3) {
              if (isValid(str)) result.push([...arr, str]);
              return;
            }
        
            for (let i = 1; i < 4; i++) {
              let subStr = str.slice(0, i);
              if (!isValid(subStr)) continue;
              permute([...arr, subStr], str.slice(i));
            }
          }
          function isValid(str) {
            if (+str > 255 || !str.length) return false;
            if (str.length >= 2 && str[0] === "0") return false;
            return true;
          }
          permute([], s);
          return result.map((x) => x.join("."));
        };`,
      },
    ],
  },
  {
    id: "10",
    CategoryTitle: "Dynamic Programming",
    CategoryData: [
      {
        title: "",
        Difficulty: "",
        link: "",
        code: ``,
      },
    ],
  },
  {
    id: "11",
    CategoryTitle: "Graph",
    CategoryData: [
      {
        title: "133. Clone Graph",
        Difficulty: "Medium",
        link: "https://leetcode.com/problems/clone-graph/solutions/",
        code: `var cloneGraph = function (graph) {
          function traverse(node) {
            if (!map.has(node.val)) {
              map.set(node.val, new Node(node.val));
              map.get(node.val).neighbors = node.neighbors.map(traverse);
            }
            return map.get(node.val);
          }
        
          let map = new Map();
          return graph ? traverse(graph) : graph;
        };`,
      },
      {
        title: "207. Course Schedule",
        Difficulty: "Medium",
        link: "https://leetcode.com/problems/course-schedule/",
        code: `var canFinish = function (numCourses, prerequisites) {
          graph = new Map();
          visiting = new Set();
          visited = new Set();
        
          for (let [v, e] of prerequisites) {
            if (graph.has(v)) {
              let edges = graph.get(v);
              edges.push(e);
              graph.set(v, edges);
            } else {
              graph.set(v, [e]);
            }
          }
          for (const [v, e] of graph) {
            if (DFS(v)) {
              return false; //if cyclic it will not finish so it is false
            }
          }
          return true;
        };
        
        var DFS = function (v) {
          visiting.add(v);
          let edges = graph.get(v); // get all the edges to explore
          if (edges) {
            for (let e of edges) {
              if (visited.has(e)) {
                continue;
              }
              if (visiting.has(e)) {
                return true;
              }
              if (DFS(e)) {
                return true;
              }
            }
          }
          visiting.delete(v); // remove from visiting set when all decedant v are visited
          visited.add(v);
          return false;
        };`,
      },
      {
        title: "200. Number of Islands",
        Difficulty: "Medium",
        link: "https://leetcode.com/problems/number-of-islands/",
        code: `var numIslands = function (grid) {
          const gridLength = grid.length;
          const rowLength = grid[0].length;
          let count = 0;
          for (let i = 0; i < gridLength; i++) {
            for (let j = 0; j < rowLength; j++) {
              if (grid[i][j] === "1") {
                dfs(i, j);
                count++;
              }
            }
          }
          function dfs(i, j) {
            if (grid[i][j] === "1") {
              grid[i][j] = "0";
              // look north
              if (i - 1 >= 0) dfs(i - 1, j);
              // look east
              if (j + 1 < rowLength) dfs(i, j + 1);
              // look south
              if (i + 1 < gridLength) dfs(i + 1, j);
              // look west
              if (j - 1 >= 0) dfs(i, j - 1);
            }
          }
          return count;
        };`,
      },
      {
        title: "417. Pacific Atlantic Water Flow",
        Difficulty: "Medium",
        link: "https://leetcode.com/problems/pacific-atlantic-water-flow/",
        code: `var pacificAtlantic = function (M) {
          if (!M.length) return M;
          let y = M.length,
            x = M[0].length,
            ans = [],
            dp = new Uint8Array(x * y);
            
          const dfs = (i, j, w, h) => {
            let ij = i * x + j;
            if (dp[ij] & w || M[i][j] < h) return;
            (dp[ij] += w), (h = M[i][j]);
            if (dp[ij] === 3) ans.push([i, j]);
            if (i + 1 < y) dfs(i + 1, j, w, h);
            if (i > 0) dfs(i - 1, j, w, h);
            if (j + 1 < x) dfs(i, j + 1, w, h);
            if (j > 0) dfs(i, j - 1, w, h);
          };
          for (let i = 0; i < y; i++) {
            dfs(i, 0, 1, M[i][0]);
            dfs(i, x - 1, 2, M[i][x - 1]);
          }
          for (let j = 0; j < x; j++) {
            dfs(0, j, 1, M[0][j]);
            dfs(y - 1, j, 2, M[y - 1][j]);
          }
          return ans;
        };`,
      },
      {
        title: "130. Surrounded Regions",
        Difficulty: "Medium",
        link: "https://leetcode.com/problems/surrounded-regions/",
        code: `var solve = function (board) {
          for (let i = 0; i < board.length; i++) {
            for (let j = 0; j < board[0].length; j++) {
              if (
                board[i][j] === "O" &&
                (i === 0 ||
                  j === 0 ||
                  i === board.length - 1 ||
                  j === board[0].length - 1)
              )
                dfs(i, j);
            }
          }
        
          for (let i = 0; i < board.length; i++) {
            for (let j = 0; j < board[0].length; j++) {
              if (board[i][j] === "Visited") {
                board[i][j] = "O";
              } else {
                board[i][j] = "X";
              }
            }
          }
        
          function dfs(i, j) {
            if (
              i < 0 ||
              i >= board.length ||
              j < 0 ||
              j >= board[i].length ||
              board[i][j] === "Visited" ||
              board[i][j] === "X"
            )
              return;
        
            board[i][j] = "Visited";
            dfs(i + 1, j);
            dfs(i - 1, j);
            dfs(i, j + 1);
            dfs(i, j - 1);
        
            return;
          }
        };
        `,
      },
      {
        title: "127. Word Ladder",
        Difficulty: "Hard",
        link: "https://leetcode.com/problems/word-ladder/",
        code: `function ladderLength(beginWord, endWord, wordList) {
          const dict = new Set(wordList);
          let step = 1;
          let q = [beginWord];
        
          while (q.length) {
            const next = [];
            for (let w of q) {
              if (w === endWord) return step;
        
              for (let i = 0; i < w.length; i++) {
                for (let j = 0; j < 26; j++) {
                  const w2 =
                    w.slice(0, i) + String.fromCharCode(97 + j) + w.slice(i + 1); // 97 -> 'a'
        
                  if (dict.has(w2)) {
                    next.push(w2);
                    dict.delete(w2);
                  }
                }
              }
            }
            q = next;
            step++;
          }
        
          return 0;
        }
        `,
      },
      {
        title: "212. Word Search II",
        Difficulty: "Hard",
        link: "https://leetcode.com/problems/word-search-ii/",
        code: `const findWords = (board, words) => {
          const dirs = [
            [-1, 0],
            [0, 1],
            [1, 0],
            [0, -1],
          ];
          let res = [];
          const buildTrie = () => {
            const root = {};
            for (const w of words) {
              let node = root;
              for (const c of w) {
                if (node[c] == null) node[c] = {};
                node = node[c];
              }
              node.word = w;
            }
            return root;
          };
          const search = (node, x, y) => {
            if (node.word != null) {
              res.push(node.word);
              node.word = null; // make sure only print one time for each word
            }
            if (x < 0 || x >= board.length || y < 0 || y >= board[0].length) return;
            if (node[board[x][y]] == null) return;
            const c = board[x][y];
            board[x][y] = "#"; // Mark visited
            for (const [dx, dy] of dirs) {
              const i = x + dx;
              const j = y + dy;
              search(node[c], i, j);
            }
            board[x][y] = c; // Reset
          };
          const root = buildTrie();
          for (let i = 0; i < board.length; i++) {
            for (let j = 0; j < board[0].length; j++) {
              search(root, i, j);
            }
          }
          return res;
        };
        `,
      },
      {
        title: "",
        Difficulty: "",
        link: "",
        code: ``,
      },
      {
        title: "",
        Difficulty: "",
        link: "",
        code: ``,
      },
      {
        title: "",
        Difficulty: "",
        link: "",
        code: ``,
      },
      {
        title: "",
        Difficulty: "",
        link: "",
        code: ``,
      },
    ],
  },
  {
    id: "12",
    CategoryTitle: "Bit Manipulation",
    CategoryData: [
      {
        title: "136. Single Number",
        Difficulty: "Easy",
        link: "https://leetcode.com/problems/single-number/",
        code: `var singleNumber = function(nums) {
          return nums.reduce((result, num) => result ^= num, 0); 
     };`,
      },
      {
        title: "137. Single Number II",
        Difficulty: "Medium",
        link: "https://leetcode.com/problems/single-number-ii/",
        code: `var singleNumber = function (nums) {
          let ones = 0;
          let twos = 0;
        
          for (let num of nums) {
            ones = (ones ^ num) & ~twos;
            twos = (twos ^ num) & ~ones;
          }
        
          return ones;
        };
        `,
      },
      {
        title: "201. Bitwise AND of Numbers Range",
        Difficulty: "Medium",
        link: "https://leetcode.com/problems/bitwise-and-of-numbers-range/",
        code: `function rangeBitwiseAnd(m, n) {
          let i = 0;
          while (m !== n) {
            m >>= 1;
            n >>= 1;
            i++;
          }
          return (m <<= i);
        }`,
      },
      {
        title: "421. Maximum XOR of Two Numbers in an Array",
        Difficulty: "Medium",
        link: "https://leetcode.com/problems/maximum-xor-of-two-numbers-in-an-array/",
        code: `var findMaximumXOR = function (nums) {
          var max = 0;
          var mask = 0;
        
          for (let i = 31; i >= 0; i--) {
            mask = mask | (1 << i);
            const set = new Set();
            for (let n of nums) {
              set.add(n & mask);
            }
            let temp = max | (1 << i);
            for (let prefix of set) {
              if (set.has(temp ^ prefix)) {
                max = temp;
                break;
              }
            }
          }
          return max;
        };`,
      },
      {
        title: "338. Counting Bits",
        Difficulty: "Easy",
        link: "https://leetcode.com/problems/counting-bits/",
        code: `var countBits = function (num) {
          const res = new Uint8Array(num + 1);
          for (let i = 0; i < res.length; i++) res[i] = res[i >> 1] + (i & 1);
          return [...res];
        };
        `,
      },
      {
        title: "268. Missing Number",
        Difficulty: "Easy",
        link: "https://leetcode.com/problems/missing-number/",
        code: `var missingNumber = function (nums) {
          let result = 0;
          for (let i = 0; i < nums.length; i++) {
            result += i + 1 - nums[i];
          }
          return result;
        };
        `,
      },
      {
        title: "190. Reverse Bits",
        Difficulty: "Easy",
        link: "https://leetcode.com/problems/reverse-bits/",
        code: `const reverseBits = function (n) {
          return parseInt([...n.toString(2)].reverse().join("").padEnd(32, "0"), 2);
        };`,
      },
      {
        title: "90. Subsets II",
        Difficulty: "Medium",
        link: "https://leetcode.com/problems/subsets-ii/",
        code: `var subsetsWithDup = function(nums) {
          nums.sort((a, b) => a - b)
          const n = nums.length
          const res = []
          const iter = (array, m, i) => {
            if (array.length === m) res.push([...array])
            else {
              for (let j = i; j < n; j++) {
                if (j === i || nums[j] !== nums[j - 1]) {
                  array.push(nums[j])
                  iter(array, m, j + 1)
                  array.pop()
                }
              }
            }
          }
          for (let i = 0; i <= n; i++) {
            iter([], i, 0)
          }
          return res   
        };`,
      },
      {
        title: "169. Majority Element",
        Difficulty: "Easy",
        link: "https://leetcode.com/problems/majority-element/",
        code: `function majorityElement(nums) {
          let candidate;
          let count = 0;
          for (const num of nums) {
            if (count === 0) {
              candidate = num;
            }
            count += num === candidate ? 1 : -1;
          }
          return candidate;
        }`,
      },
      {
        title: "231. Power of Two",
        Difficulty: "Easy",
        link: "https://leetcode.com/problems/power-of-two/",
        code: `let isPowerOfTwo = n => n > 0 ? !(n & n-1) : false;`,
      },
    ],
  },
];
