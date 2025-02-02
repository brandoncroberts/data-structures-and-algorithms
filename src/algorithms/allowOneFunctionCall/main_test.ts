import { assertEquals } from "jsr:@std/assert";
import { once } from "./main.ts";

Deno.test("once function returns correct result on first call", () => {
  const fn = (a: number, b: number) => a + b;
  const onceFn = once(fn);
  assertEquals(onceFn(1, 2), 3);
});

Deno.test("once function returns undefined on subsequent calls", () => {
  const fn = (a: number, b: number) => a + b;
  const onceFn = once(fn);
  onceFn(1, 2); // First call
  assertEquals(onceFn(3, 4), undefined); // Second call
});

Deno.test("once function works with different functions", () => {
  const add = (a: number, b: number) => a + b;
  const multiply = (a: number, b: number) => a * b;
  const onceAdd = once(add);
  const onceMultiply = once(multiply);

  assertEquals(onceAdd(1, 2), 3);
  assertEquals(onceAdd(3, 4), undefined);

  assertEquals(onceMultiply(2, 3), 6);
  assertEquals(onceMultiply(4, 5), undefined);
});
