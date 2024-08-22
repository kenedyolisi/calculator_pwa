import { writable, type Writable } from "svelte/store";

export interface IHistoryEntry {
  expression: string;
  result: string;
}

export const historyEntries: Writable<IHistoryEntry[]> = writable([
  { expression: "12 + 5 = ", result: "17" },
]);

export const memoryEntries: Writable<string[]> = writable([]);

