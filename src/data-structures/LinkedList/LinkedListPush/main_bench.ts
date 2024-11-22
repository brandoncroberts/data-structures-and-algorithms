import { LinkedList } from "./main.ts";
Deno.bench("LinkedList push", () => {
  const list = new LinkedList(5);
  list.push(10);
});
