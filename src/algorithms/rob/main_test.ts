import { assertEquals } from "jsr:@std/assert";
import { rob } from "./main.ts";

Deno.test("rob returns correct result", () => {
  assertEquals(rob([2, 7, 9, 3, 1]), 12);
});
