import { Node } from "./main.ts";
Deno.bench("Node", () => {
  new Node(5);
});
