import { LinkedList } from "../../LinkedList/main.ts";
const list = new LinkedList(5);
Deno.bench("LinkedList push", () => {
  list.push(10);
});
