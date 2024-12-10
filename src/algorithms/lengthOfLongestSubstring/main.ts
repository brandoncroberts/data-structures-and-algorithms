/**
 * Description: Given a string s, find the length of the longest substring without repeating characters.
 *
 * @param {string} s Param Description:
 * @returns {number} Return Description:
 *
 * @example
 * Example 1:
 * Input: s = "abcabcbb"
 * Output: 3
 * Explanation: The answer is "abc", with the length of 3.
 * Example 2:
 * @example
 * Input: s = "pwwkew"
 * Output: 3
 * Explanation: The answer is "wke", with the length of 3.
 * Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
 *
 * @see https://leetcode.com/problems/longest-substring-without-repeating-characters/description/
 */

export const lengthOfLongestSubstring = (s: string): number => {
  // Left pointer - marks the start of our current window
  let l = 0;

  // Set to store unique characters in our current window
  const set = new Set();

  // Tracks the length of the longest valid substring we've seen
  let max = 0;

  // Right pointer - iterates through the string
  // This creates a sliding window between l and r
  for (let r = 0; r < s.length; r++) {
    // If we find a duplicate character (s[r] already exists in our set)
    // we need to shrink our window from the left until we remove that duplicate
    while (set.has(s[r])) {
      // Remove the leftmost character from our set
      set.delete(s[l]);
      // Move the left pointer forward, shrinking our window
      l++;
    }

    // At this point, s[r] is guaranteed to be unique in our set
    // Add the current character to our set
    set.add(s[r]);

    // Update max if our current window (represented by set.size) is larger
    max = Math.max(max, set.size);
  }
  return max;
};
