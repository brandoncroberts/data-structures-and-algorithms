/**
 * Description: Given an integer array nums, find the subarray with the largest sum, and return its sum.
 *
 * @param {number[]} nums
 * @returns {number}
 *
 * @example
 *Example 1:
 *
 *Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
 *Output: 6
 *Explanation: The subarray [4,-1,2,1] has the largest sum 6.
 *
 * @see https://leetcode.com/problems/maximum-subarray/description/
 */
export const maxSubArray = (nums: number[]): number => {
  let maxSub = nums[0];
  let currentSum = 0;

  for (const num of nums) {
    if (currentSum < 0) currentSum = 0;
    currentSum += num;
    maxSub = Math.max(currentSum, maxSub);
  }
  return maxSub;
};

// this solution is even a bit cleaner, but is slower on bench test

export const maxSubArray2 = (nums: number[]): number => {
  let maxSub = nums[0];
  let currentSum = 0;

  for (const num of nums) {
    currentSum = Math.max(num, currentSum + num);
    maxSub = Math.max(currentSum, maxSub);
  }
  return maxSub;
};
