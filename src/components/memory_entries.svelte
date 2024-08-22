<script lang="ts">
  import MemoryEntry from "@components/memory_entry.svelte";
  import { memoryEntries } from "src/store";
</script>

{#if $memoryEntries.length}
  <ul>
    {#each $memoryEntries as memoryEntry, index (index)}
      <MemoryEntry {memoryEntry} />
    {/each}
  </ul>
{:else}
  <p class="text-center text-sm">There is nothing in memory yet.</p>
{/if}
