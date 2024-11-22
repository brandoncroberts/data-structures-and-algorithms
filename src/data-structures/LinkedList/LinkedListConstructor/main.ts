type NullableNode<T> = Node<T> | null;

export class Node<T> {
  value: T;
  next: NullableNode<T>;

  constructor(value: T, next: NullableNode<T> = null) {
    this.value = value;
    this.next = next;
  }
}

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
export class LinkedList<T> {
  head: NullableNode<T> = null;
  tail: NullableNode<T> = null;
  length: number = 0;

  constructor(value?: T) {
    if (value !== undefined) {
      const newNode: Node<T> = new Node(value);
      this.head = newNode;
      this.tail = this.head;
      this.length = 1;
    }
  }
}
