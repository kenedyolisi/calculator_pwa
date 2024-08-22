<script context="module">
  export type Datum = { expression: string; result: string };
</script>

<script lang="ts">
  import { slide } from "svelte/transition";

  interface Props {
    chronicle: Chronicle;
  }

  let { chronicle }: Props = $props();
</script>

<div
  class="flex flex-col items-end rounded-lg px-3 py-1 text-end hover:bg-slate-100"
  in:slide
>
  <div>{chronicle.expression}</div>
  <div>{chronicle.result}</div>
</div>
