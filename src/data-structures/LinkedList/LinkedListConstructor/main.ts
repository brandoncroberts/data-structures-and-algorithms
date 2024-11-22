import { Node, NullableNode } from "../Node/main.ts";

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
