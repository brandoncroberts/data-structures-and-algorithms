import { assertEquals } from "jsr:@std/assert";
import { LinkedList } from "../LinkedList/main.ts";

Deno.test("LinkedList push method adds a single element correctly", () => {
  const list = new LinkedList<number>();
  list.push(1);
  assertEquals(list.head?.value, 1);
  assertEquals(list.tail?.value, 1);
  assertEquals(list.length, 1);
});

Deno.test("LinkedList push method adds multiple elements correctly", () => {
  const list = new LinkedList<number>();
  list.push(1);
  list.push(2);
  list.push(3);
  assertEquals(list.head?.value, 1);
  assertEquals(list.head?.next?.value, 2);
  assertEquals(list.tail?.value, 3);
  assertEquals(list.length, 3);
});

Deno.test("LinkedList push method maintains correct order", () => {
  const list = new LinkedList<number>();
  list.push(1);
  list.push(2);
  list.push(3);

  assertEquals(list.head?.value, 1);
  assertEquals(list.head?.next?.value, 2);
  assertEquals(list.head?.next?.next?.value, 3);
  assertEquals(list.tail?.value, 3);
  assertEquals(list.length, 3);
});

Deno.test("LinkedList push method works with different types", () => {
  const list = new LinkedList<string>();
  list.push("a");
  list.push("b");
  list.push("c");
  assertEquals(list.head?.value, "a");
  assertEquals(list.head?.next?.value, "b");
  assertEquals(list.head?.next?.next?.value, "c");
  assertEquals(list.tail?.value, "c");
  assertEquals(list.length, 3);
});
