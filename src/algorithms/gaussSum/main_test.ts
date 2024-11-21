import { assertEquals } from "jsr:@std/assert";
import { gaussSum } from "./main.ts";

Deno.test("gaussSum returns correct result for positive numbers", () => {
  assertEquals(gaussSum(10), 55);
  assertEquals(gaussSum(100), 5050);
  assertEquals(gaussSum(1), 1);
});

Deno.test("gaussSum returns 0 for 0", () => {
  assertEquals(gaussSum(0), 0);
});
