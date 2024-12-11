# Common Algorithm Patterns for Coding Interviews

## 1. Two Pointer Technique

Used for searching pairs, comparing values, or traversing arrays/strings from both ends.

### Example: Find pair that sums to target

typescript
function findPairWithSum(nums: number[], target: number): number[] {
let left = 0;
let right = nums.length - 1;
while (left < right) {
const sum = nums[left] + nums[right];
if (sum === target) return [left, right];
if (sum < target) left++;
else right--;
}
return [];
}

## 2. Sliding Window

Used for tracking a subset of elements in arrays/strings with contiguous elements.

### Example: Find maximum sum subarray of size k

typescript
function maxSubarraySum(nums: number[], k: number): number {
let maxSum = 0;
let windowSum = 0;
// First window
for (let i = 0; i < k; i++) {
windowSum += nums[i];
}
maxSum = windowSum;
// Slide window
for (let i = k; i < nums.length; i++) {
windowSum = windowSum - nums[i - k] + nums[i];
maxSum = Math.max(maxSum, windowSum);
}
return maxSum;
}

## 3. Fast and Slow Pointers (Floyd's Cycle Detection)

Used for cycle detection or finding middle elements in linked lists.

### Example: Detect cycle in linked list

typescript
class ListNode {
val: number;
next: ListNode | null;
constructor(val: number) {
this.val = val;
this.next = null;
}
}
function hasCycle(head: ListNode | null): boolean {
let slow = head;
let fast = head;
while (fast && fast.next) {
slow = slow!.next;
fast = fast.next.next;
if (slow === fast) return true;
}
return false;
}
`

## 4. Binary Search

Used for searching in sorted arrays or when solution space can be binary searched.

### Example: Classic binary search

typescript
function binarySearch(nums: number[], target: number): number {
let left = 0;
let right = nums.length - 1;
while (left <= right) {
const mid = Math.floor((left + right) / 2);
if (nums[mid] === target) return mid;
if (nums[mid] < target) left = mid + 1;
else right = mid - 1;
}
return -1;
}

## 5. DFS (Depth-First Search)

Used for tree/graph traversal and backtracking problems.

### Example: Tree traversal

typescript
class TreeNode {
val: number;
left: TreeNode | null;
right: TreeNode | null;
constructor(val: number) {
this.val = val;
this.left = null;
this.right = null;
}
}
function dfs(root: TreeNode | null): number[] {
const result: number[] = [];
function traverse(node: TreeNode | null) {
if (!node) return;
result.push(node.val);
traverse(node.left);
traverse(node.right);
}
traverse(root);
return result;
}

## 6. BFS (Breadth-First Search)

Used for level-wise traversal and finding shortest paths.

### Example: Level order traversal

traversal
typescript
function bfs(root: TreeNode | null): number[][] {
if (!root) return [];
const result: number[][] = [];
const queue: TreeNode[] = [root];
while (queue.length) {
const level: number[] = [];
const levelSize = queue.length;
for (let i = 0; i < levelSize; i++) {
const node = queue.shift()!;
level.push(node.val);
if (node.left) queue.push(node.left);
if (node.right) queue.push(node.right);
}
result.push(level);
}
return result;
}

## 7. Dynamic Programming

Used for optimization problems and counting problems.

### Example: Fibonacci with memoization

typescript
function fibonacci(n: number, memo: Map<number, number> = new Map()): number {
if (n <= 1) return n;
if (memo.has(n)) return memo.get(n)!;
const result = fibonacci(n - 1, memo) + fibonacci(n - 2, memo);
memo.set(n, result);
return result;
}

## 8. Hash Map/Set

Used for frequency counting and finding duplicates.

### Example: Find first duplicate

typescript
function findFirstDuplicate(nums: number[]): number {
const seen = new Set<number>();
for (const num of nums) {
if (seen.has(num)) return num;
seen.add(num);
}
return -1;
}

## 9. Stack

Used for parsing, expression evaluation, and maintaining order.

### Example: Valid parentheses

typescript
function isValid(s: string): boolean {
const stack: string[] = [];
const pairs: { [key: string]: string } = {
')': '(',
'}': '{',
']': '['
};
for (const char of s) {
if (!pairs[char]) {
stack.push(char);
} else if (stack.pop() !== pairs[char]) {
return false;
}
}
return stack.length === 0;
}

## 10. Heap/Priority Queue

Used for finding k-th largest/smallest elements and maintaining sorted elements.

### Example: Find k-th largest element using min-heap

typescript
class MinHeap {
private heap: number[] = [];
push(val: number) {
this.heap.push(val);
this.bubbleUp();
}
pop(): number {
if (this.heap.length === 0) return -1;
if (this.heap.length === 1) return this.heap.pop()!;
const result = this.heap[0];
this.heap[0] = this.heap.pop()!;
this.bubbleDown();
return result;
}
// Additional heap methods would go here...
}
function findKthLargest(nums: number[], k: number): number {
const minHeap = new MinHeap();
for (const num of nums) {
minHeap.push(num);
if (minHeap.size() > k) minHeap.pop();
}
return minHeap.peek();
}
