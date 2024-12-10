import { assertEquals } from "jsr:@std/assert";
import { isAnagram } from "./main.ts";

Deno.test("isAnagram - should return true for valid anagrams", () => {
  assertEquals(isAnagram("anagram", "nagaram"), true);
});

Deno.test("isAnagram - should return false for non-anagrams", () => {
  assertEquals(isAnagram("rat", "car"), false);
});
