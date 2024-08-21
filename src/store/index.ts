import { writable, type Writable } from "svelte/store";

export const chronicles: Writable<Chronicle[]> = writable([]);

