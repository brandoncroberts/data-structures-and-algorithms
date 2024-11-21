import { assertEquals } from "jsr:@std/assert";
import { twoSum } from "./main.ts";

Deno.test("twoSum returns correct tuple", () => {
    assertEquals(twoSum([2, 7, 11, 15], 9), [0, 1]);
});

Deno.test("twoSum returns correct tuple on 11000 length array", () => {
    const arr = Array.from(
        { length: 11000 },
        (_, i) => i === 9000 || i === 10000 ? 4 : 1,
    );

    assertEquals(twoSum(arr, 8), [9000, 10000]);
});
