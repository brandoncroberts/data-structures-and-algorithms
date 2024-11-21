type NullableNode = Node | null;

export class Node {
  value: number;
  next: NullableNode;

  constructor(value: number, next: NullableNode = null) {
    this.value = value;
    this.next = next;
  }
}

export class LinkedList {
  head: NullableNode = null;
  tail: NullableNode = null;
  length: number = 0;

  constructor(value?: number) {
    if (value !== undefined) {
      const newNode = new Node(value);
      this.head = newNode;
      this.tail = newNode;
      this.length = 1;
    }
  }
}
