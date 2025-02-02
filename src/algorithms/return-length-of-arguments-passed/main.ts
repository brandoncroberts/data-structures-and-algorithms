/**
 * Description:
 * Write a function argumentsLength that returns the count of arguments passed to it.
 *
 * @param {...any} args - The arguments passed to the function.
 * @returns {number} - The count of arguments passed.
 *
 * @example
 * // Example 1:
 * // Input: args = [5]
 * // Output: 1
 * // Explanation:
 * // argumentsLength(5); // 1
 * // One value was passed to the function so it should return 1.
 *
 * @example
 * // Example 2:
 * // Input: args = [{}, null, "3"]
 * // Output: 3
 * // Explanation:
 * // argumentsLength({}, null, "3"); // 3
 * // Three values were passed to the function so it should return 3.
 *
 * @see https://leetcode.com/problems/return-length-of-arguments-passed/description/
 */
type JSONValue = null | boolean | number | string | JSONValue[] | {
  [key: string]: JSONValue;
};

export function argumentsLength(...args: JSONValue[]): number {
  return args.length;
}
