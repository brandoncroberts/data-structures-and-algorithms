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
  push(value: T): void {
    const newNode = new Node(value);
    if (this.tail) {
      this.tail.next = newNode;
      this.tail = newNode;
    } else {
      this.head = newNode;
      this.tail = newNode;
    }
    this.length++;
  }

  pop(): NullableNode<T> | undefined {
    if (this.length === 0) return undefined;

    let current: NullableNode<T> = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
      this.length = 0;
      return current;
    }

    let prev: NullableNode<T> = null;
    while (current!.next) {
      prev = current;
      current = current!.next;
    }

    prev!.next = null;
    this.tail = prev;
    this.length--;
    return current;
  }

  unshift(value: T): number {
    const newNode = new Node(value);

    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length++;
    return this.length;
  }
}
