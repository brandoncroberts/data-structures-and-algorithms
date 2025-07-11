/**
 * Description: Given two strings s and t, return true if t is an anagram of s, and false otherwise.
 * An anagram is a word formed by rearranging the letters of another word.
 *
 * @param {string} s - The first string.
 * @param {string} t - The second string.
 * @returns {boolean} - Returns true if t is an anagram of s, false otherwise.
 *
 * @example
 * // Example 1:
 * // Input: s = "anagram", t = "nagaram"
 * // Output: true
 * // Explanation: "nagaram" is an anagram of "anagram" as they contain the same letters.
 *
 * @example
 * // Example 2:
 * // Input: s = "rat", t = "car"
 * // Output: false
 * // Explanation: "car" is not an anagram of "rat" as they contain different letters.
 *
 * @see https://leetcode.com/problems/valid-anagram/description/
 */

/**
 * Optimized Solution
 *
 * Time Complexity: O(n)
 * - We only loop through the strings once
 * - Single pass means fewer operations overall
 * - 'n' is the length of the input strings
 *
 * Space Complexity: O(1) - Constant Space
 * - Uses a fixed size array of 26 elements
 * - Size doesn't grow with input
 * - Like having 26 counters, one for each letter
 */
export const isAnagram = (s: string, t: string): boolean => {
  // First check: if strings are different lengths, they can't be anagrams
  if (s.length !== t.length) return false;

  // Create an array of 26 zeros to track character frequency differences
  // Index 0 represents 'a', index 1 represents 'b', etc.
  const charCount = new Array(26).fill(0);

  for (let i = 0; i < s.length; i++) {
    // For each character in string s:
    // 1. Convert char to ASCII code with charCodeAt()
    // 2. Subtract 97 (ASCII for 'a') to get 0-25 index
    // 3. Increment that position to track character from s
    charCount[s.charCodeAt(i) - 97]++;

    // Do the same for string t, but decrement instead
    // If strings are anagrams, all increments and decrements
    // will cancel each other out
    charCount[t.charCodeAt(i) - 97]--;
  }

  // Check if all counts are zero
  // If yes: all characters matched (it's an anagram)
  // If no: character frequencies didn't match (not an anagram)
  return charCount.every((count) => count === 0);
};

export const isAnagramMap = (s: string, t: string): boolean => {
  if (s.length !== t.length) return false;

  const charMap: Record<string, number> = {};

  // Count characters in the first string
  for (const char of s) {
    charMap[char] = (charMap[char] || 0) + 1;
  }

  // Decrement counts using the second string
  for (const char of t) {
    // If a character is not in the map or its count is zero, they can't be anagrams
    if (!charMap[char]) {
      return false;
    }
    charMap[char]--;
  }

  return true; // If the loop completes, it's an anagram
};

// Example walkthrough with s = "cat" and t = "tac":
// Length check passes (both are 3)
// Create array: [0,0,0,...,0] (26 zeros)
// First iteration (i=0):
// 'c' -> index 2: [0,0,1,0,...,0]
// 't' -> index 19: [0,0,1,0,...,-1,...,0]
// Second iteration (i=1):
// 'a' -> index 0: [1,0,1,0,...,-1,...,0]
// 'a' -> index 0: [0,0,1,0,...,-1,...,0]
// Third iteration (i=2):
// 't' -> index 19: [0,0,1,0,...,0,...,0]
// 'c' -> index 2: [0,0,0,0,...,0,...,0]
// Final check: all values are 0, return true
