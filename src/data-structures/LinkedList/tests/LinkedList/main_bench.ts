import { LinkedList } from "../../LinkedList/main.ts";
Deno.bench("linked_list_constructor", () => {
  new LinkedList(5);
});
