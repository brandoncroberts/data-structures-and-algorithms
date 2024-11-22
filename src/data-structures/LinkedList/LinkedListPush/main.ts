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
 */
import {
  LinkedList as LinkedListConstructor,
  Node,
} from "../LinkedListConstructor/main.ts";

export class LinkedList<T> extends LinkedListConstructor<T> {
  push(value: T): void {
    const newNode = new Node(value);
    if (this.tail) {
      this.tail.next = newNode;
      this.tail = newNode;
    } else {
      // if !this.tail it is an empty LinkedList, and therefore newNode is the first item in the LinkedList
      this.head = newNode;
      this.tail = newNode;
    }
    this.length++;
  }
}
