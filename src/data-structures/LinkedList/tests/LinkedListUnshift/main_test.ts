import { assertEquals } from "jsr:@std/assert";
import { LinkedList } from "../../LinkedList/main.ts";
import { Node } from "../../Node/main.ts";

Deno.test(
  "LinkedListUnshift returns correct result when list.length > 0",
  () => {
    const list = new LinkedList(5);
    assertEquals(list.length, 1);
    list.unshift(4);

    const expectedTailNode: InstanceType<typeof Node<number>> = {
      value: 5,
      next: null,
    };

    const expectedHeadNode: InstanceType<typeof Node<number>> = {
      value: 4,
      next: expectedTailNode,
    };

    assertEquals(list.length, 2);
    assertEquals(list.tail?.value, expectedTailNode.value);
    assertEquals(list.tail?.next, expectedTailNode.next);

    assertEquals(list.head?.value, expectedHeadNode.value);
    assertEquals(list.head?.next, expectedHeadNode.next);
  }
);

Deno.test(
  "LinkedListUnshift returns correct result when list.length > 0",
  () => {
    const list = new LinkedList();
    assertEquals(list.length, 0);
    list.unshift(5);

    const expectedTailNode: InstanceType<typeof Node<number>> = {
      value: 5,
      next: null,
    };

    const expectedHeadNode: InstanceType<typeof Node<number>> = {
      value: 5,
      next: null,
    };

    assertEquals(list.length, 1);
    assertEquals(list.tail?.value, expectedTailNode.value);
    assertEquals(list.tail?.next, expectedTailNode.next);

    assertEquals(list.head?.value, expectedHeadNode.value);
    assertEquals(list.head?.next, expectedHeadNode.next);
  }
);
