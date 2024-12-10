import { assertEquals } from "jsr:@std/assert";
import { lengthOfLongestSubstring } from "./main.ts";

Deno.test("lengthOfLongestSubstring returns correct result", () => {
  assertEquals(lengthOfLongestSubstring("pwwkew"), 3);
});

Deno.test("lengthOfLongestSubstring returns correct when length is 0", () => {
  assertEquals(lengthOfLongestSubstring(""), 0);
});

Deno.test("lengthOfLongestSubstring returns correct when length is 1", () => {
  assertEquals(lengthOfLongestSubstring(" "), 1);
});

Deno.test("lengthOfLongestSubstring returns correct when length is 2", () => {
  assertEquals(lengthOfLongestSubstring("au"), 2);
});

Deno.test("lengthOfLongestSubstring returns correct when string is repeating characters", () => {
  assertEquals(lengthOfLongestSubstring("bbbbb"), 1);
});

Deno.test("lengthOfLongestSubstring returns correct when string is `dvdf`", () => {
  assertEquals(lengthOfLongestSubstring("dvdf"), 3);
});
Deno.test("lengthOfLongestSubstring returns correct when string is `wobgrovw`", () => {
  assertEquals(lengthOfLongestSubstring("wobgrovw"), 6);
});

Deno.test("lengthOfLongestSubstring returns correct when string is `umvejcuuk`", () => {
  assertEquals(lengthOfLongestSubstring("umvejcuuk"), 6);
});
