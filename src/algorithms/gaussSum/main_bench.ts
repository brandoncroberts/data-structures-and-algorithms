import { gaussSum } from "./main.ts";

Deno.bench("gaussSum", () => {
  gaussSum(100);
});
