import { assertEquals } from "jsr:@std/assert";
import { rob } from "./main.ts";

Deno.test("rob returns correct result", () => {
    assertEquals(rob([2, 7, 9, 3, 1]), 12);
    assertEquals(rob([15, 6, 14, 100, 3, 8, 4, 20, 20, 15]), 12);
});
