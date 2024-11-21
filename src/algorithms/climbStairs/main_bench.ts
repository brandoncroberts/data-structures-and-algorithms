import { climbStairs } from "./main.ts";
Deno.bench("climbStairs", () => {
    climbStairs(45);
});
