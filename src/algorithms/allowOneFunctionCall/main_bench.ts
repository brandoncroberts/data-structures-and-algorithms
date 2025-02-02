import { once } from "./main.ts";

Deno.bench("once function - first call", () => {
  const fn = (a: number, b: number) => a + b;
  const onceFn = once(fn);
  onceFn(1, 2);
});

Deno.bench("once function - subsequent calls", () => {
  const fn = (a: number, b: number) => a + b;
  const onceFn = once(fn);
  onceFn(1, 2); // First call
  onceFn(3, 4); // Second call
  onceFn(5, 6); // Third call
});
