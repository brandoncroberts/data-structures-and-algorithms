/**
 * Definition for singly-linked list node
 */
export class ListNode {
  val: number;
  next: ListNode | null;

  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

/**
 * Merges two sorted linked lists into a single sorted linked list
 *
 * @param {ListNode | null} list1 First sorted linked list
 * @param {ListNode | null} list2 Second sorted linked list
 * @returns {ListNode | null} Merged sorted linked list
 *
 * @example
 * // Example 1:
 * // Input: list1 = [1,2,4], list2 = [1,3,4]
 * // Output: [1,1,2,3,4,4]
 * // Explanation: The lists are merged to form a single sorted list
 *
 * @example
 * // Example 2:
 * // Input: list1 = [], list2 = []
 * // Output: []
 * // Explanation: Both input lists are empty, so result is empty
 *
 * @example
 * // Example 3:
 * // Input: list1 = [], list2 = [0]
 * // Output: [0]
 * // Explanation: First list is empty, return second list
 *
 * Constraints:
 * - The number of nodes in both lists is in the range [0, 50]
 * - -100 <= Node.val <= 100
 * - Both list1 and list2 are sorted in non-decreasing order
 *
 * @see https://leetcode.com/problems/merge-two-sorted-lists/
 */

export const mergeTwoLists = (
  list1: ListNode | null,
  list2: ListNode | null
): ListNode | null => {
  const dummy = new ListNode();
  // The dummy node acts as placeholder at the beginning of the merged list.
  // By keeping dummy at the start and using tail to traverse,
  // we always have a reference to the beginning of the list via dummy.next.
  let tail = dummy;

  while (list1 && list2) {
    if (list1.val <= list2.val) {
      // Note: <= handles equal values
      tail.next = list1;
      list1 = list1.next;
    } else {
      tail.next = list2;
      list2 = list2.next;
    }
    // We know tail.next exists because we just assigned it
    tail = tail.next;
  }

  // Attach remaining list (if any)
  tail.next = list1 || list2;

  return dummy.next;
};
