import { rob } from "./main.ts";
Deno.bench("rob", () => {
  rob([2, 7, 9, 3, 1]);
});
