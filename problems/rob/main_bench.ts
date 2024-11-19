import { rob } from "./main.ts";
Deno.bench("rob", () => {
    rob();
});
