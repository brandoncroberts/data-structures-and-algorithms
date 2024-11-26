import { assertEquals } from "jsr:@std/assert";
import { LinkedList } from "../LinkedList/main.ts";
import { Node } from "../Node/main.ts";

Deno.test(
  "LinkedList pop method retuns last node, and sets tail to second to last node with next value of null",
  () => {
    const list = new LinkedList(5);
    list.push(4);
    list.push(3);
    list.push(2);
    list.push(1);

    const expectedPoppedNode = list.tail;

    const expectedTailNode: InstanceType<typeof Node<number>> = {
      value: 2,
      next: null,
    };

    const prePopListLength = list.length;

    const poppedNode = list.pop();
    const tail = list.tail;

    // poppedNode contains correct values
    assertEquals(poppedNode?.value, expectedPoppedNode?.value);
    assertEquals(poppedNode?.value, expectedPoppedNode?.value);

    // tail contains correct values
    assertEquals(tail?.value, expectedTailNode.value);
    assertEquals(tail?.value, expectedTailNode.value);

    // length after pop is correct
    assertEquals(prePopListLength, 5);
    assertEquals(list.length, 4);
  }
);

Deno.test("LinkedList pop method returns null when list is empty", () => {
  const list = new LinkedList<number>();
  // length should be 0 before pop
  assertEquals(list.length, 0);

  const poppedNode = list.pop();
  const tail = list.tail;

  // poppedNode should be null
  assertEquals(poppedNode, undefined);

  // tail should be null
  assertEquals(tail, null);

  // length should be 0 after pop
  assertEquals(list.length, 0);
});

Deno.test(
  "LinkedList pop method returns the only node and sets tail to null when list has one node",
  () => {
    const list = new LinkedList(1);

    const expectedPoppedNode = list.tail;

    const prePopListLength = list.length;

    const poppedNode = list.pop();
    const tail = list.tail;

    // poppedNode contains correct values
    assertEquals(poppedNode?.value, expectedPoppedNode?.value);

    // tail should be null
    assertEquals(tail, null);

    // length after pop is correct
    assertEquals(prePopListLength, 1);
    ``;
    assertEquals(list.length, 0);
  }
);
