import { assertEquals } from "jsr:@std/assert";
import { linked_list_constructor } from "./main.ts";

Deno.test("linked_list_constructor returns correct result", () => {
    assertEquals(linked_list_constructor(), 'expected result');
});
