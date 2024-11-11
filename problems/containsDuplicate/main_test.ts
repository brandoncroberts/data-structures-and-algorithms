import { assertEquals } from "jsr:@std/assert";
import { containsDuplicate } from "./main.ts";

Deno.test("containsDuplicate returns correct result", () => {
    assertEquals(containsDuplicate([1, 2, 3, 1]), true);
});

// create test that makes an array with numbers 1 to 10000 in order, and expects false
Deno.test("containsDuplicate returns correct result", () => {
    const arr = Array.from({ length: 10000 }, (_, i) => i + 1);
    assertEquals(containsDuplicate(arr), true);
});
