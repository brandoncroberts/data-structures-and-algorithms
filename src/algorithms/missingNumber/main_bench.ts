import { missingNumber } from "./main.ts";
import { nums } from "./main_test_data.ts";
Deno.bench("missingNumber", () => {
    missingNumber(nums);
});
