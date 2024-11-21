import { assertEquals } from "jsr:@std/assert";
import { climbStairs } from "./main.ts";

Deno.test("climbStairs returns correct result", () => {
    assertEquals(climbStairs(3), 3);
});

Deno.test("climbStairs returns correct result", () => {
    assertEquals(climbStairs(10), 89);
});

Deno.test("climbStairs returns correct result", () => {
    assertEquals(climbStairs(100), 89);
});
