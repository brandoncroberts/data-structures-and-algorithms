import { assertEquals } from "jsr:@std/assert";
import { isValidParentheses } from "./main.ts";

Deno.test("isValidParentheses returns correct result", async (t) => {
  await t.step('returns true for simple valid parentheses "()"', () => {
    assertEquals(isValidParentheses("()"), true);
  });

  await t.step('returns true for multiple valid parentheses "()[]{}"', () => {
    assertEquals(isValidParentheses("()[]{}"), true);
  });

  await t.step('returns false for mismatched parentheses "(]"', () => {
    assertEquals(isValidParentheses("(]"), false);
  });

  await t.step('returns true for nested valid parentheses "([])"', () => {
    assertEquals(isValidParentheses("([])"), true);
  });

  await t.step('returns false for single opening bracket "["', () => {
    assertEquals(isValidParentheses("["), false);
  });

  await t.step('returns false for double opening bracket "(("', () => {
    assertEquals(isValidParentheses("(("), false);
  });
});
