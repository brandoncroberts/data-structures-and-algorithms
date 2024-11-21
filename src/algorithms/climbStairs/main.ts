/**
 * Calculates the number of distinct ways to climb to the top of a staircase with `n` steps.
 * Each time you can either climb 1 or 2 steps.
 *
 * @param {number} n - The total number of steps to reach the top.
 * @returns {number} The number of distinct ways to climb to the top.
 *
 * @example
 * // Example 1:
 * // Input: n = 2
 * // Output: 2
 * // Explanation: There are two ways to climb to the top.
 * // 1. 1 step + 1 step
 * // 2. 2 steps
 *
 * @example
 * // Example 2:
 * // Input: n = 3
 * // Output: 3
 * // Explanation: There are three ways to climb to the top.
 * // 1. 1 step + 1 step + 1 step
 * // 2. 1 step + 2 steps
 * // 3. 2 steps + 1 step
 *
 * @see https://leetcode.com/problems/climbing-stairs/description/
 */

export const climbStairs = (n: number): number => {
  // Base case: if there are 0 or 1 steps, there's only one way to climb.
  // For n = 0, there's one way to stay at the ground level.
  if (n <= 1) return 1;

  // Initialize variables to represent the number of ways to reach the first and second steps.
  // These variables act as a form of memoization, storing the results of subproblems.
  let previous = 1;
  let current = 1;

  // Loop from 2 to n to calculate the number of ways to reach each step.
  // This loop builds the solution using the results of previously solved subproblems.
  for (let i = 2; i <= n; i++) {
    // Calculate the number of ways to reach the current step.
    // This is done by summing the ways to reach the two previous steps.
    const next = previous + current;
    // Update previous and current for the next iteration.
    // This effectively shifts the window of our memoization.
    previous = current;
    current = next;
  }

  // Return the number of ways to reach the nth step.
  return current;
};
