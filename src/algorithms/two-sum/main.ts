/**
 * Description:
 *
 * @param {number} n Param Description:
 * @returns {number} Return Description:
 *
 * @example
 * // Example 1:
 * // Input:
 * // Output:
 * // Explanation:
 *
 * @example
 * // Example 2:
 * // Input:
 * // Output:
 * // Explanation:
 *
 * @see https://
 */

export function twoSum(nums: number[], target: number): number[] {
  const map: Record<number, number> = {};
  for (let i = 0; i < nums.length; i++) {
    const difference = target - nums[i];
    if (map[difference] !== undefined) return [map[difference], i];
    map[nums[i]] = i;
  }
  throw new Error("No two sum solution found");
}
