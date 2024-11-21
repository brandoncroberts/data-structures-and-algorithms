import { linked_list_constructor } from "./main.ts";
Deno.bench("linked_list_constructor", () => {
    linked_list_constructor();
});
