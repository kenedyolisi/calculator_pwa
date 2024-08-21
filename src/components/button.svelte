<script lang="ts">
  import type { HTMLButtonAttributes } from "svelte/elements";
  interface Props extends HTMLButtonAttributes {
    text: string;
    label: string;
    dataValue: string;
  }
  let {
    text,
    label,
    dataValue,
    class: ClassName,
    ...attributes
  }: Props = $props();
</script>

<button
  class="inline-flex items-center justify-center rounded-md min-w-12 bg-slate-200 min-h-12 {ClassName}"
  aria-label={label}
  data-value={dataValue}
  {...attributes}
>
  {text}
</button>
