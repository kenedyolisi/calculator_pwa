<script lang="ts">
  import HistoryEntries from "@components/history_entries.svelte";
  import MemoryEntries from "@components/memory_entries.svelte";
  import { createTabs, melt } from "@melt-ui/svelte";
  import { historyEntries, memoryEntries } from "src/store";
  import { cubicInOut } from "svelte/easing";
  import { crossfade } from "svelte/transition";

  const {
    elements: { content, list, root, trigger },
    states: { value },
  } = createTabs({ defaultValue: "history" });
  const [send, receive] = crossfade({ duration: 200, easing: cubicInOut });
  const triggerItems = ["history", "memory"];
</script>

<div
  class="fixed bottom-0 left-0 right-0 h-4/5 w-full flex-col overflow-hidden
    bg-white px-3 py-1 sm:static sm:flex sm:h-full sm:w-2/5 sm:max-w-96"
  use:melt={$root}
>
  <div class="mb-2 flex w-full shrink-0 items-center gap-2" use:melt={$list}>
    {#each triggerItems as triggerItem (triggerItem)}
      <button
        class="relative px-3 py-1 capitalize"
        use:melt={$trigger(triggerItem)}
      >
        {triggerItem}
        {#if $value === triggerItem}
          <div
            class="absolute bottom-0 left-1/2 h-[2px] w-4/5 -translate-x-1/2 rounded-full bg-blue-500"
            in:send={{ key: "trigger" }}
            out:receive={{ key: "trigger" }}
          ></div>
        {/if}
      </button>
    {/each}
  </div>
  <div
    class="grow flex-col overflow-auto text-end
    {$value === 'history' ? 'flex' : 'hidden'}"
    use:melt={$content("history")}
  >
    <div class="grow overflow-auto" style="scrollbar-width: thin;">
      <HistoryEntries />
    </div>
    <div
      class="absolute bottom-0 right-[3px] w-full px-3 py-2 text-end sm:static"
    >
      <button
        class="items-center gap-1 rounded-lg p-2
          {$historyEntries.length ? 'inline-flex' : 'hidden'}"
        type="button"
        onclick={() => {
          historyEntries.set([]);
        }}
      >
        <span class="icon icon-trash"></span>
        Clear
      </button>
    </div>
  </div>
  <div
    class="grow flex-col {$value === 'memory' ? 'flex' : 'hidden'}"
    use:melt={$content("memory")}
  >
    <div class="grow overflow-auto">
      <MemoryEntries />
    </div>
    <div
      class="absolute bottom-0 right-[3px] w-full px-3 py-2 text-end sm:static"
    >
      <button
        class=" items-center gap-1 rounded-lg p-2 hover:bg-slate-300
          {$memoryEntries.length ? 'inline-flex' : 'hidden'}"
        type="button"
        onclick={() => {
          memoryEntries.set([]);
        }}
      >
        <span class="icon icon-trash"></span>
        Clear
      </button>
    </div>
  </div>
</div>

<style>
  [data-state="active"] {
    @apply text-blue-500;
  }
</style>
