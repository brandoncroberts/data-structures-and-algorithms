import { assertEquals } from "jsr:@std/assert";
import { missingNumber } from "./main.ts";

Deno.test("missingNumber returns correct result", () => {
    assertEquals(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1]), 8);
});

Deno.test("missingNumber returns correct result", () => {
    assertEquals(missingNumber([0, 1]), 2);
});
