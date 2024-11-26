import { assertEquals } from "jsr:@std/assert";
import { LinkedList } from "../../LinkedList/main.ts";

Deno.test("LinkedListShift returns correct result when list.length > 2", () => {
  const list = new LinkedList(5);
  list.push(4);
  list.push(3);

  assertEquals(list.length, 3);
  const shiftReturnValue = list.shift();

  const expectedShiftReturnValue = {
    value: 5,
    next: null,
  };

  const expectedTailNode = {
    value: 3,
    next: null,
  };

  const expectedHeadNode = {
    value: 4,
    next: expectedTailNode,
  };

  const expectedListLengthPostShift = 2;
  assertEquals(shiftReturnValue?.value, expectedShiftReturnValue.value);
  assertEquals(shiftReturnValue?.next, expectedShiftReturnValue.next);
  assertEquals(list.length, expectedListLengthPostShift);

  assertEquals(list.tail?.value, expectedTailNode.value);
  assertEquals(list.tail?.next, expectedTailNode.next);

  assertEquals(list.head?.value, expectedHeadNode.value);
  assertEquals(list.head?.next?.value, expectedHeadNode.next.value);
  assertEquals(list.head?.next?.next, expectedHeadNode.next.next);
});

Deno.test(
  "LinkedListShift returns correct result when list.length === 2",
  () => {
    const list = new LinkedList(5);
    list.push(4);

    assertEquals(list.length, 2);
    const shiftReturnValue = list.shift();

    const expectedShiftReturnValue = {
      value: 5,
      next: null,
    };

    const expectedHeadNode = {
      value: 4,
      next: null,
    };

    const expectedTailNode = expectedHeadNode;

    const expectedListLengthPostShift = 1;
    assertEquals(shiftReturnValue?.value, expectedShiftReturnValue.value);
    assertEquals(shiftReturnValue?.next, expectedShiftReturnValue.next);
    assertEquals(list.length, expectedListLengthPostShift);

    assertEquals(list.tail?.value, expectedTailNode.value);
    assertEquals(list.tail?.next, expectedTailNode.next);

    assertEquals(list.head?.value, expectedHeadNode.value);
    assertEquals(list.head?.next, expectedHeadNode.next);
    assertEquals(list.head?.next, expectedHeadNode.next);
  }
);

Deno.test(
  "LinkedListShift returns correct result when list.length === 1",
  () => {
    const list = new LinkedList(5);

    assertEquals(list.length, 1);
    const shiftReturnValue = list.shift();

    const expectedShiftReturnValue = {
      value: 5,
      next: null,
    };

    const expectedHeadNode = null;
    const expectedTailNode = null;

    const expectedListLengthPostShift = 0;
    assertEquals(shiftReturnValue?.value, expectedShiftReturnValue.value);
    assertEquals(shiftReturnValue?.next, expectedShiftReturnValue.next);
    assertEquals(list.length, expectedListLengthPostShift);

    assertEquals(list.tail, expectedTailNode);
    assertEquals(list.tail, expectedTailNode);

    assertEquals(list.head, expectedHeadNode);
    assertEquals(list.head, expectedHeadNode);
    assertEquals(list.head, expectedHeadNode);
  }
);

Deno.test("LinkedListShift returns correct result when list.length > 0", () => {
  const list = new LinkedList();
  assertEquals(list.length, 0);
  const shiftReturnValue = list.shift();

  const expectedTailNode = null;
  const expectedHeadNode = null;

  const expectedListLengthPostShift = 0;
  assertEquals(shiftReturnValue, undefined);
  assertEquals(list.length, expectedListLengthPostShift);

  assertEquals(list.tail, expectedTailNode);
  assertEquals(list.tail, expectedTailNode);

  assertEquals(list.head, expectedHeadNode);
});
