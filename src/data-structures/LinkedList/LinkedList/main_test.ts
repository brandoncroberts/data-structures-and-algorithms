import { assertEquals } from "jsr:@std/assert";
import { LinkedList } from "../LinkedList/main.ts";
import { Node } from "../Node/main.ts";

Deno.test(
  "LinkedList initializes correctly with a single node when initialized with a value",
  () => {
    const linkedList = new LinkedList(5);
    const expectedLinkedList = {
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
    const expectedLinkedList = {
      head: null,
      tail: null,
      length: 0,
    };

    assertEquals(linkedList.head, expectedLinkedList.head);
    assertEquals(linkedList.tail, expectedLinkedList.tail);
    assertEquals(linkedList.length, expectedLinkedList.length);
  }
);
