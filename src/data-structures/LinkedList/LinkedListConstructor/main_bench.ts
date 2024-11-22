import { LinkedList } from "./main.ts";
Deno.bench("linked_list_constructor", () => {
  new LinkedList(5);
});
