import { twoSum } from "./main.ts";

Deno.bench("twoSum", () => {
    twoSum([2,7,11,15], 9)
  });


Deno.bench("twoSum large", () => {
  // an array with 10000 elements and only allow twoSum to be correct for the 9000th and 10000th element
  const arr = Array.from({length: 11000}, (_, i) => i === 9000 || i === 10000 ? 4 : 1);
  twoSum(arr, 8)
});