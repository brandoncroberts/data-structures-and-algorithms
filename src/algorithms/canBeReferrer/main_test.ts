import { assertEquals } from "jsr:@std/assert";
import { canBeReferrer, canBeReferrerIterative } from "./main.ts";

const urlData = [
  { url: "cart", referrer: ["search", "buy"] },
  { url: "search", referrer: ["/"] },
  { url: "/", referrer: [null] },
  { url: "buy", referrer: ["search"] },
];

Deno.test("canBeReferrer identifies direct referrers", () => {
  assertEquals(canBeReferrer("cart", "search", urlData), true);
  assertEquals(canBeReferrer("cart", "buy", urlData), true);
});

Deno.test("canBeReferrer identifies indirect referrers", () => {
  assertEquals(canBeReferrer("cart", "/", urlData), true);
});

Deno.test("canBeReferrer returns false for same URL", () => {
  assertEquals(canBeReferrer("cart", "cart", urlData), false);
});

Deno.test("canBeReferrer returns false for non-existent URLs", () => {
  assertEquals(canBeReferrer("cart", "unknown", urlData), false);
});

Deno.test("canBeReferrerIterative identifies direct referrers", () => {
  assertEquals(canBeReferrerIterative("cart", "search", urlData), true);
  assertEquals(canBeReferrerIterative("cart", "buy", urlData), true);
});

Deno.test("canBeReferrerIterative identifies indirect referrers", () => {
  assertEquals(canBeReferrerIterative("cart", "/", urlData), true);
});

Deno.test("canBeReferrerIterative returns false for same URL", () => {
  assertEquals(canBeReferrerIterative("cart", "cart", urlData), false);
});

Deno.test("canBeReferrerIterative returns false for non-existent URLs", () => {
  assertEquals(canBeReferrerIterative("cart", "unknown", urlData), false);
});
