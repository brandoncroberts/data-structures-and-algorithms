import { containsDuplicate } from "./main.ts";
Deno.bench("containsDuplicate short", () => {
    const arr = Array.from({ length: 10 }, (_, i) => i + 1);
    containsDuplicate(arr);
});

Deno.bench("containsDuplicate long", () => {
    const arr = Array.from({ length: 10000 }, (_, i) => i + 1);
    containsDuplicate(arr);
});
