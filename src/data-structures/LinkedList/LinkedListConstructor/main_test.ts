import { assertEquals } from "jsr:@std/assert";
import { LinkedList, Node } from "./main.ts";

Deno.test(
  "LinkedList initializes correctly with a single node when initialized with a value",
  () => {
    const linkedList = new LinkedList(5);
    const expectedLinkedList: InstanceType<typeof LinkedList<number>> = {
      head: new Node(5),
      tail: new Node(5),
      length: 1,
    };

    assertEquals(linkedList.head!.value, expectedLinkedList.head!.value);
    assertEquals(linkedList.tail!.value, expectedLinkedList.tail!.value);
    assertEquals(linkedList.length, expectedLinkedList.length);
  }
);

Deno.test(
  "LinkedList initializes correctly with an empty LinkedList when initialized without a value",
  () => {
    const linkedList = new LinkedList();
    const expectedLinkedList: InstanceType<typeof LinkedList> = {
      head: null,
      tail: null,
      length: 0,
    };

    assertEquals(linkedList.head, expectedLinkedList.head);
    assertEquals(linkedList.tail, expectedLinkedList.tail);
    assertEquals(linkedList.length, expectedLinkedList.length);
  }
);

Deno.test("Node initializes correctly with a value and no next node", () => {
  const node = new Node(5);
  const expectedNode: InstanceType<typeof Node<number>> = {
    value: 5,
    next: null,
  };

  assertEquals(node.value, expectedNode.value);
  assertEquals(node.next, expectedNode.next);
});

Deno.test("Node initializes correctly with a value and a next node", () => {
  const nextNode = new Node(10);
  const node = new Node(5, nextNode);
  const expectedNode: InstanceType<typeof Node<number>> = {
    value: 5,
    next: nextNode,
  };

  assertEquals(node.value, expectedNode.value);
  assertEquals(node.next, expectedNode.next);
});
