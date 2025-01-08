import { assertEquals } from "jsr:@std/assert";
import { mergeTwoLists } from "./main.ts";
import { linkedListToArray, createLinkedList } from "./utils.ts";

Deno.test(
  "mergeTwoLists returns correct result for [1,2,4] and [1,3,4]",
  () => {
    const list1 = createLinkedList([1, 2, 4]);
    const list2 = createLinkedList([1, 3, 4]);
    const result = mergeTwoLists(list1, list2);
    assertEquals(linkedListToArray(result), [1, 1, 2, 3, 4, 4]);
  }
);

Deno.test("mergeTwoLists returns correct result for [] and []", () => {
  const list1 = createLinkedList([]);
  const list2 = createLinkedList([]);
  const result = mergeTwoLists(list1, list2);
  assertEquals(linkedListToArray(result), []);
});

Deno.test("mergeTwoLists returns correct result for [] and [0]", () => {
  const list1 = createLinkedList([]);
  const list2 = createLinkedList([0]);
  const result = mergeTwoLists(list1, list2);
  assertEquals(linkedListToArray(result), [0]);
});

// Additional test cases
Deno.test(
  "mergeTwoLists returns correct result for [5,6,7] and [1,2,3]",
  () => {
    const list1 = createLinkedList([5, 6, 7]);
    const list2 = createLinkedList([1, 2, 3]);
    const result = mergeTwoLists(list1, list2);
    assertEquals(linkedListToArray(result), [1, 2, 3, 5, 6, 7]);
  }
);

Deno.test(
  "mergeTwoLists returns correct result for [1,3,5] and [2,4,6]",
  () => {
    const list1 = createLinkedList([1, 3, 5]);
    const list2 = createLinkedList([2, 4, 6]);
    const result = mergeTwoLists(list1, list2);
    assertEquals(linkedListToArray(result), [1, 2, 3, 4, 5, 6]);
  }
);
