import { LinkedList as LinkedListConstructor } from "../LinkedListConstructor/main.ts";
import { Node } from "../Node/main.ts";

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
