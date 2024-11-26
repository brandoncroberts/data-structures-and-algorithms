import { assertEquals } from "jsr:@std/assert";
import { LinkedList } from "../../LinkedList/main.ts";
import { Node } from "../../Node/main.ts";

Deno.test(
  "LinkedListUnshift returns correct result when list.length > 0",
  () => {
    const list = new LinkedList(5);
    assertEquals(list.length, 1);
    const unshiftReturnValue = list.unshift(4);

    const expectedTailNode: InstanceType<typeof Node<number>> = {
      value: 5,
      next: null,
    };

    const expectedHeadNode = {
      value: 4,
      next: expectedTailNode,
    };

    const expectedListLengthPostUnshift = 2;
    assertEquals(unshiftReturnValue, expectedListLengthPostUnshift);
    assertEquals(list.length, expectedListLengthPostUnshift);

    assertEquals(list.tail?.value, expectedTailNode.value);
    assertEquals(list.tail?.next, expectedTailNode.next);

    assertEquals(list.head?.value, expectedHeadNode.value);
    assertEquals(list.head?.next?.value, expectedHeadNode.next.value);
    assertEquals(list.head?.next?.next, expectedHeadNode.next.next);
  }
);

Deno.test(
  "LinkedListUnshift returns correct result when list.length > 0",
  () => {
    const list = new LinkedList();
    assertEquals(list.length, 0);
    const unshiftReturnValue = list.unshift(5);

    const expectedTailNode: InstanceType<typeof Node<number>> = {
      value: 5,
      next: null,
    };

    const expectedHeadNode: InstanceType<typeof Node<number>> = {
      value: 5,
      next: null,
    };

    const expectedListLengthPostUnshift = 1;
    assertEquals(unshiftReturnValue, expectedListLengthPostUnshift);
    assertEquals(list.length, expectedListLengthPostUnshift);

    assertEquals(list.tail?.value, expectedTailNode.value);
    assertEquals(list.tail?.next, expectedTailNode.next);

    assertEquals(list.head?.value, expectedHeadNode.value);
    assertEquals(list.head?.next, expectedHeadNode.next);
  }
);
