/**
 * Given a string containing just the characters '(', ')', '{', '}', '[' and ']',
 * determine if the input string is valid.
 *
 * An input string is valid if:
 * 1. Open brackets must be closed by the same type of brackets.
 * 2. Open brackets must be closed in the correct order.
 * 3. Every close bracket has a corresponding open bracket of the same type.
 *
 * @param {string} s String containing only parentheses characters: '()[]{}'
 * @returns {boolean} Returns true if the parentheses are valid, false otherwise
 *
 * @example
 * // Example 1:
 * // Input: s = "()"
 * // Output: true
 * // Explanation: The opening parenthesis '(' is closed by the matching closing parenthesis ')'
 *
 * @example
 * // Example 2:
 * // Input: s = "()[]{}"
 * // Output: true
 * // Explanation: Each opening bracket is closed by its corresponding closing bracket
 *
 * @example
 * // Example 3:
 * // Input: s = "(]"
 * // Output: false
 * // Explanation: The closing bracket ']' does not match the opening bracket '('
 *
 * @example
 * // Example 4:
 * // Input: s = "([])"
 * // Output: true
 * // Explanation: The brackets are properly nested and matched
 *
 * Constraints:
 * - 1 <= s.length <= 104
 * - s consists of parentheses only '()[]{}'
 *
 * @see https://leetcode.com/problems/valid-parentheses/description/
 */
export const isValidParentheses = (s: string): boolean => {
  if (s.length < 2) return false;

  type OpeningBracket = "(" | "[" | "{";
  type ClosingBracket = ")" | "]" | "}";

  const openSet = new Set<OpeningBracket>(["(", "[", "{"]);

  const closeOpenMap: Record<ClosingBracket, OpeningBracket> = {
    ")": "(",
    "]": "[",
    "}": "{",
  };

  const openStack = [];

  for (let i = 0; i < s.length; i++) {
    if (openSet.has(s[i] as OpeningBracket)) {
      openStack.push(s[i]);
    } else {
      const poppedOpenStack = openStack.pop();
      const expectedOpenBracket = closeOpenMap[s[i] as ClosingBracket];
      if (poppedOpenStack !== expectedOpenBracket) return false;
    }
  }
  return openStack.length === 0;
};
