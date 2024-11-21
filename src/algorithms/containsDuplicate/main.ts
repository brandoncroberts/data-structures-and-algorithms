// https://leetcode.com/problems/contains-duplicate/description/

// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

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
export const containsDuplicate = (nums: number[]): boolean => {
  const map: Record<number, number> = {};
  for (let i = 0; i < nums.length; i++) {
    if (map[nums[i]] !== undefined) return true;
    map[nums[i]] = nums[i];
  }
  return false;
};

containsDuplicate([1, 2, 3, 1]);
