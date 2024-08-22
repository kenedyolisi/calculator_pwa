<script lang="ts">
  import type { IHistoryEntry } from "src/store";
  import { slide } from "svelte/transition";

  interface Props {
    historyEntry: IHistoryEntry;
  }

  let { historyEntry }: Props = $props();
</script>

<div
  class="flex flex-col items-end rounded-lg px-3 py-1 text-end hover:bg-slate-100"
  in:slide
>
  <div aria-label="expression">{historyEntry.expression}</div>
  <div aria-label="result">{historyEntry.result}</div>
</div>
