export type NullableNode<T> = Node<T> | null;

export class Node<T> {
  value: T;
  next: NullableNode<T>;

  constructor(value: T, next: NullableNode<T> = null) {
    this.value = value;
    this.next = next;
  }
}
