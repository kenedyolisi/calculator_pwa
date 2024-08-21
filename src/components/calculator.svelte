<script lang="ts">
  import Button from "@components/button.svelte";

  let input = $state("0");
  let result = $state("");

  const buttons = [
    { text: "DEL", dataValue: "DEL", label: "delete" },
    { text: "AC", dataValue: "AC", label: "clear" },
    { text: "7", dataValue: "7", label: "7" },
    { text: "8", dataValue: "8", label: "8" },
    { text: "9", dataValue: "9", label: "9" },
    { text: "(", dataValue: "(", label: "open bracket" },
    { text: ")", dataValue: ")", label: "close bracket" },
    { text: "4", dataValue: "4", label: "4" },
    { text: "5", dataValue: "5", label: "5" },
    { text: "6", dataValue: "6", label: "6" },
    { text: "÷", dataValue: "/", label: "divide by" },
    { text: "×", dataValue: "*", label: "multiply by" },
    { text: "1", dataValue: "1", label: "1" },
    { text: "2", dataValue: "2", label: "2" },
    { text: "3", dataValue: "3", label: "3" },
    { text: "+", dataValue: "+", label: "plus" },
    { text: "-", dataValue: "-", label: "minus" },
    { text: "±", dataValue: "", label: "negate" },
    { text: "0", dataValue: "0", label: "0" },
    { text: ".", dataValue: ".", label: "point" },
    { text: "=", dataValue: "=", label: "equals" },
  ];

  function handleClick(
    event: MouseEvent & { target: EventTarget & HTMLElement },
  ) {
    const button: HTMLButtonElement | null = event.target?.closest("button");

    // Ignore non-buttons
    if (!button) {
      return;
    }

    const dataValue = button.getAttribute("data-value");

    if (dataValue) {
      // Handle button click
      switch (dataValue) {
        // Handle numbers
        case "1":
        case "2":
        case "3":
        case "4":
        case "5":
        case "6":
        case "7":
        case "8":
        case "9":
          if (input === "0") {
            input = dataValue;
          } else {
            input += dataValue;
          }
          break;
        // Handle 0
        case "0":
          if (input.length === 1) {
            return;
          } else {
            input += dataValue;
          }
          break;

        default:
          break;
      }
    }
  }
</script>

<!-- Calculator -->
<div
  class="h-full w-full max-w-md space-y-3 rounded-md border-4 border-slate-300 bg-slate-100 px-4 py-2"
>
  <!-- Display -->
  <div class="rounded-md bg-white text-end">
    <!-- Input -->
    <div class="h-9">
      <input
        class="block h-full w-full rounded-t-md px-3 py-1 text-end focus-within:outline-none"
        type="text"
        bind:value={input}
      />
    </div>
    <!-- Result -->
    <div class="h-9 px-3 py-1">
      {result}
    </div>
  </div>
  <!-- svelte-ignore a11y_click_events_have_key_events -->
  <!-- svelte-ignore a11y_no_static_element_interactions -->
  <div class="grid h-full w-full grid-cols-5 gap-2" onclick={handleClick}>
    {#each buttons as { dataValue, label, text } (text)}
      <Button
        class={`${text === "DEL" ? "col-start-4" : ""} ${text === "=" ? "col-span-2 bg-green-500" : ""}`}
        {text}
        {label}
        {dataValue}
      />
    {/each}
  </div>
</div>
