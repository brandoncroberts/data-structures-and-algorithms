/**
 * Description: Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.
 *
 * @param {number[]} nums - The array of numbers.
 * @returns {number} - The missing number.
 *
 * @example
 * Example 1:
 * Input: nums = [3,0,1]
 * Output: 2
 * Explanation: n = 3 since there are 3 numbers, so all numbers are in the range [0,3]. 2 is the missing number in the range since it does not appear in nums.
 
 * @see https://leetcode.com/problems/missing-number/description/
 */

export const missingNumber = (nums: number[]): number => {
  // Calculate the sum of the first n natural numbers
  const fullSum = gaussSum(nums.length);

  // Initialize the actual sum of the numbers in the array
  let actualSum = 0;

  // Iterate through the array to calculate the actual sum
  for (let i = 0; i < nums.length; i++) {
    actualSum += nums[i];
  }

  // The missing number is the difference between the full sum and the actual sum
  return fullSum - actualSum;
};

const gaussSum = (n: number) => {
  return (n * (n + 1)) / 2;
};
