/**
 * @param {number} n The number up to which the sum is calculated.
 * @returns {number} The sum of the first n natural numbers.
 *
 * @example
 * // Example 1:
 * // Input: 10
 * // Output: 55
 * // Explanation: Sum of numbers from 1 to 10 is 55.
 *
 * @example
 * // Example 2:
 * // Input: 100
 * // Output: 5050
 * // Explanation: Sum of numbers from 1 to 100 is 5050.
 *
 * @see https://letstalkscience.ca/educational-resources/backgrounders/gauss-summation
 */
export const gaussSum = (n: number): number => {
  return (n * (n + 1)) / 2;
};
