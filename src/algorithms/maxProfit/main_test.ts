import { assertEquals } from "jsr:@std/assert";
import { maxProfit } from "./main.ts";
import { prices } from "./main_test_data.ts";

Deno.test("maxProfit returns correct result", () => {
    assertEquals(maxProfit([7, 1, 5, 3, 6, 4]), 5);
});

Deno.test("maxProfit returns correct result", () => {
    assertEquals(maxProfit(prices), 999);
});
