import { lengthOfLongestSubstring } from "./main.ts";
Deno.bench("lengthOfLongestSubstring", () => {
  lengthOfLongestSubstring("abcdefghijklmnopqrstuvwxyza");
});
