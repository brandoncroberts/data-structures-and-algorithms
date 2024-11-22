import { assertEquals } from "jsr:@std/assert";
import { Node } from "./main.ts";

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
