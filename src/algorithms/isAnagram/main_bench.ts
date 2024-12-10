import { isAnagram } from "./main.ts";

Deno.bench("isAnagram - long strings", () => {
  const s1 = "abcdefghijklmnopqrstuvwxyz".repeat(1000);
  const s2 = "zyxwvutsrqponmlkjihgfedcba".repeat(1000);
  isAnagram(s1, s2);
});
