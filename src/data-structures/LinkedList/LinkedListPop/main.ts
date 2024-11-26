import { LinkedList as LinkedListConstructor } from "../LinkedListPush/main.ts";
import { NullableNode } from "../Node/main.ts";

export class LinkedList<T> extends LinkedListConstructor<T> {
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
}
