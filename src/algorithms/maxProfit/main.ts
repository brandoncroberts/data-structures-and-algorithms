// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/

// Example 1:

// Input: prices = [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
// Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
// Example 2:

// Input: prices = [7,6,4,3,1]
// Output: 0
// Explanation: In this case, no transactions are done and the max profit = 0.

// Constraints:

// 1 <= prices.length <= 105
// 0 <= prices[i] <= 104

/**
 * Description: You are given an array prices where prices[i] is the price of a given stock on the ith day.
 * You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
 * Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.
 *
 * @param {number[]} prices - An array of prices where prices[i] is the price of a given stock on the ith day.
 * @returns {number} The maximum profit that can be achieved.
 *
 * @example
 * // Example 1:
 * // Input: prices = [7,1,5,3,6,4]
 * // Output: 5
 * // Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
 * // Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
 *
 * @example
 * // Example 2:
 * // Input: prices = [7,6,4,3,1]
 * // Output: 0
 * // Explanation: In this case, no transactions are done and the max profit = 0.
 *
 * @see https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
 *
 * @constraints
 * // 1 <= prices.length <= 105
 * // 0 <= prices[i] <= 104
 */

export const maxProfit = (prices: number[]): number => {
  let maxProfit = 0; // Initialize maxProfit to 0
  let l = 0; // Initialize left pointer to the start of the array
  let r = 1; // Initialize right pointer to the second element of the array

  // Iterate while the right pointer is within the array bounds
  while (r < prices.length) {
    const difference = prices[r] - prices[l]; // Calculate the difference between the prices at the right and left pointers
    if (difference > 0) {
      // If the difference is positive, a profit can be made
      maxProfit = Math.max(difference, maxProfit); // Update maxProfit if the current difference is greater than the current maxProfit
    } else {
      l = r; // If no profit can be made, move the left pointer to the right pointer's position
    }
    r++; // Move the right pointer to the next position
  }

  return maxProfit; // Return the maximum profit found
};

export const maxProfitBruteForce = (prices: number[]): number => {
  let maxProfit = 0;
  let i;
  let j;
  for (i = 0; i < prices.length; i++) {
    for (j = i + 1; j < prices.length; j++) {
      const difference = prices[j] - prices[i];
      if (difference > maxProfit) {
        maxProfit = difference;
      }
    }
  }
  return maxProfit;
};
