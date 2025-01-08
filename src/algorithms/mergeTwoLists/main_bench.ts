import { mergeTwoLists } from "./main.ts";
import { createLinkedList } from "./utils.ts";

Deno.bench("mergeTwoLists", () => {
  const list1 = createLinkedList([1, 2, 4]);
  const list2 = createLinkedList([1, 3, 4]);
  mergeTwoLists(list1, list2);
});
