/**
 * Finds two numbers in an array that add up to a target value.
 *
 * @param {number[]} nums - An array of numbers.
 * @param {number} target - The target sum.
 * @returns {[number, number]} A tuple containing the indices of the two numbers that add up to the target.
 *
 * @example
 * // Example 1:
 * // Input: [2, 7, 11, 15], 9
 * // Output: [0, 1]
 * // Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
 *
 * @example
 * // Example 2:
 * // Input: [3, 2, 4], 6
 * // Output: [1, 2]
 * // Explanation: Because nums[1] + nums[2] == 6, we return [1, 2].
 *
 * @see https://leetcode.com/problems/two-sum/
 */

export function twoSum(nums: number[], target: number): [number, number] {
  // Create a map to store the indices of the numbers we have seen so far
  const map: Record<number, number> = {};

  // Iterate through the array of numbers
  for (let i = 0; i < nums.length; i++) {
    // Calculate the difference needed to reach the target sum
    const difference = target - nums[i];

    // Check if the difference is already in the map
    if (map[difference] !== undefined) {
      // If it is, return the indices of the two numbers as a tuple
      return [map[difference], i];
    }

    // Otherwise, add the current number and its index to the map
    map[nums[i]] = i;
  }

  // If no solution is found, throw an error
  throw new Error("No two sum solution found");
}
