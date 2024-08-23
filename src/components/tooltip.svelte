<script lang="ts">
  import {
    createTooltip,
    melt,
    type CreateTooltipProps,
  } from "@melt-ui/svelte";
  import type { Snippet } from "svelte";
  import { fade } from "svelte/transition";

  interface Props {
    text: string;
    placement: CreateTooltipProps["positioning"];
  }

  let { children, text, placement }: Props & { children: Snippet } = $props();
  const {
    elements: { arrow, content, trigger },
    states: { open },
  } = createTooltip({
    closeDelay: 0,
    forceVisible: true,
    openDelay: 0,
    positioning: { placement },
  });
</script>

<div class="" use:melt={$trigger}>
  {@render children()}
</div>

{#if $open}
  <div
    class="z-50 rounded-md bg-slate-300 px-3 py-1 dark:bg-slate-800"
    use:melt={$content}
    transition:fade={{ duration: 200 }}
  >
    <div use:melt={$arrow}></div>
    {text}
  </div>
{/if}
