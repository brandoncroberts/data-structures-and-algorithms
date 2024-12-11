import { canBeReferrer } from "./main.ts";

// Test cases
const urlData = [
  { url: "cart", referrer: ["search", "buy"] },
  { url: "search", referrer: ["/"] },
  { url: "/", referrer: [null] },
  { url: "buy", referrer: ["search"] },
];

console.log(canBeReferrer("cart", "search", urlData)); // true (direct referrer)
console.log(canBeReferrer("cart", "/", urlData)); // true (indirect referrer)
console.log(canBeReferrer("cart", "buy", urlData)); // true (direct referrer)
console.log(canBeReferrer("cart", "cart", urlData)); // false (same URL)
console.log(canBeReferrer("cart", "unknown", urlData)); // false (non-existent URL)
