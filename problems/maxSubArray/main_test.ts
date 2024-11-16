import { assertEquals } from "jsr:@std/assert";
import { maxSubArray } from "./main.ts";

Deno.test("maxSubArray returns correct result", () => {
    assertEquals(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]), 6);
    assertEquals(maxSubArray([5, 4, -1, 7, 8]), 23);
});
