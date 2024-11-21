import { maxSubArray } from "./main.ts";
Deno.bench("maxSubArray", () => {
    maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]);
});
