<script lang="ts">
  import HistoryEntry from "@components/history_entry.svelte";
  import { historyEntries } from "src/store";
</script>

{#if $historyEntries.length}
  <ul class="flex flex-col-reverse gap-1">
    {#each $historyEntries as historyEntry, index (index)}
      <HistoryEntry {historyEntry} />
    {/each}
  </ul>
{:else}
  <p class="text-center text-sm">There is nothing in history yet.</p>
{/if}
