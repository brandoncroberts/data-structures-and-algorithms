import { isValidParentheses } from "./main.ts";

Deno.bench("isValidParentheses", () => {
  // Long nested valid string with multiple types of brackets
  const longValidString =
    "({[]}){[()]}([{}]){([])}({[]})([{}])({[]}){[()]}([{}]){([])}";
  isValidParentheses(longValidString);
});
