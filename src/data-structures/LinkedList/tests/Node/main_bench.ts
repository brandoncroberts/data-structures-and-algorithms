import { Node } from "../../Node/main.ts";
Deno.bench("Node", () => {
  new Node(5);
});
