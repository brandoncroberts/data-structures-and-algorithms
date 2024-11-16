import { assertEquals } from "jsr:@std/assert";
import { containsDuplicate } from "./main.ts";

Deno.test("containsDuplicate returns correct result short array", () => {
    assertEquals(containsDuplicate([1, 2, 3, 1]), true);
});

Deno.test("containsDuplicate returns correct result long array", () => {
    const arr = Array.from({ length: 10000 }, (_, i) => i + 1);
    assertEquals(containsDuplicate(arr), false);
});
