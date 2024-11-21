import { maxProfit, maxProfitBruteForce } from "./main.ts";
import { prices } from "./main_test_data.ts";

// time/iter (avg) 3.7s

Deno.bench({
    name: "maxProfitBruteForce",
    ignore: true, // uncomment to run slow benchmark
    fn: () => {
        maxProfitBruteForce(prices);
    },
});

// time/iter (avg) 434.2 µs
Deno.bench("maxProfit", () => {
    maxProfit(prices);
});

// 1 second = 1,000,000 microseconds
// 3.7 seconds = 3.7 * 1,000,000 = 3,700,000 microseconds
// 3,700,000 µs / 434.2 µs ≈ 8,520.8

// Therefore, maxProfit with average completion time of 434.2 µs is 8,520.8 times faster than maxProfitBruteForce with an average time of 3.7 seconds.
