//

// Example 1:

// Input: nums = [1,2,3,1]

// Output: true

// Explanation:

// The element 1 occurs at the indices 0 and 3.

// Example 2:

// Input: nums = [1,2,3,4]

// Output: false

// Explanation:

// All elements are distinct.

// Example 3:

// Input: nums = [1,1,1,3,3,4,3,2,4,2]

// Output: true

/**
 * Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.
 *
 * @param {number[]} nums - The array of numbers to check.
 * @returns {boolean} - Returns true if any value appears at least twice in the array, and false if every element is distinct.
 *
 * @example
 * // Example 1:
 * // Input: nums = [1,2,3,4]
 * // Output: false
 * // Explanation: All elements are distinct.
 *
 * @example
 * // Example 2:
 * // Input: nums = [1,1,1,3,3,4,3,2,4,2]
 * // Output: true
 * // Explanation: Some elements appear more than once.
 *
 * @see https://leetcode.com/problems/contains-duplicate/description/
 */

export const containsDuplicate = (nums: number[]): boolean => {
  // Create an empty map to store the occurrences of each number
  const map: Record<number, number> = {};

  // Iterate through each number in the array
  for (let i = 0; i < nums.length; i++) {
    // If the number is already in the map, return true (duplicate found)
    if (map[nums[i]] !== undefined) return true;

    // Otherwise, add the number to the map
    map[nums[i]] = nums[i];
  }

  // If no duplicates are found after iterating through loop, return false
  return false;
};
