type NullableNode<T> = Node<T> | null;

export class Node<T> {
  value: T;
  next: NullableNode<T>;

  constructor(value: T, next: NullableNode<T> = null) {
    this.value = value;
    this.next = next;
  }
}

export class LinkedList<T> {
  head: NullableNode<T> = null;
  tail: NullableNode<T> = null;
  length: number = 0;

  constructor(value?: T) {
    if (value !== undefined) {
      const newNode: Node<T> = new Node(value);
      this.head = newNode;
      this.tail = newNode;
      this.length = 1;
    }
  }
}
