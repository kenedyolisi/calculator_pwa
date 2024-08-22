<script lang="ts">
  import Chronicle from "@components/chronicle.svelte";
  import { chronicles } from "src/store";
</script>

<ul class="flex flex-col-reverse gap-1">
  {#each $chronicles as chronicle, index (index)}
    <li>
      <Chronicle {chronicle} />
    </li>
  {/each}
</ul>
