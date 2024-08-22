<script lang="ts">
  interface Props {
    memoryEntry: string;
  }
  let { memoryEntry }: Props = $props();
</script>

<li class="rounded-lg px-3 py-2 hover:bg-slate-200">
  {memoryEntry}
</li>
