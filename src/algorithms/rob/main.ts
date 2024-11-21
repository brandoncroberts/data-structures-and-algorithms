/**
 * You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security systems connected and it will automatically contact the police if two adjacent houses were broken into on the same night.
 * Given an integer array nums representing the amount of money of each house, return the maximum amount of money you can rob tonight without alerting the police.
 *
 * @param {number[]} nums - An array of non-negative integers representing the amount of money of each house.
 * @returns {number} - The maximum amount of money that can be robbed.
 *
 * @example
 * // Example 1:
 * // Input: [1, 2, 3, 1]
 * // Output: 4
 * // Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
 * // Total amount you can rob = 1 + 3 = 4.
 *
 * @example
 * // Example 2:
 * // Input: [2, 7, 9, 3, 1]
 * // Output: 12
 * // Explanation: Rob house 1 (money = 2), rob house 3 (money = 9), and rob house 5 (money = 1).
 * // Total amount you can rob = 2 + 9 + 1 = 12.
 *
 * @see https://leetcode.com/problems/house-robber/
 */
export const rob = (nums: number[]): number => {
  let robOne = 0; // Initialize the maximum amount robbed from the previous house
  let robTwo = 0; // Initialize the maximum amount robbed from the house before the previous house

  for (const num of nums) {
    const temp = Math.max(num + robOne, robTwo); // Calculate the maximum amount that can be robbed by either robbing the current house or skipping it
    robOne = robTwo; // Update robOne to the value of robTwo for the next iteration
    robTwo = temp; // Update robTwo to the maximum amount robbed so far
  }
  return robTwo; // Return the maximum amount robbed
};
