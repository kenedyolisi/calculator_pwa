<script lang="ts">
  import { evaluate } from "mathjs";
  import { historyEntries } from "src/store";

  let input = $state("0");
  let result = $state("");

  function isOperator(input: string) {
    return /[ \/\*\+\-]{3}$/.test(input);
  }

  function isEquals(input: string) {
    return /([= ]){2}$/.test(input);
  }

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
          if (input === "0" || /([= ]){3}$/.test(input)) {
            input = dataValue;
          } else {
            input += dataValue;
          }
          break;
        // Handle 0
        case "0":
          if (input === "0") {
            return;
          } else {
            input += dataValue;
          }
          break;
        // Handle operators
        case "/":
        case "*":
        case "+":
        case "-":
          // Check if the last input is operator
          if (isOperator(input)) {
            input = input.slice(0, -2) + dataValue + " ";
          } else if (isEquals(input) && result) {
            input = result + " " + dataValue + " ";
          } else {
            input += " " + dataValue + " ";
          }
          break;
        // Handle equals
        case "=":
          if (isEquals(input)) {
            return;
          }
          input += " " + dataValue;
          result = evaluate(input.slice(0, -2));
          $historyEntries = [...$historyEntries, { expression: input, result }];
          break;
        // Handle clear
        case "AC":
          input = "0";
          result = "";
          break;
        // Handle delete
        case "DEL":
          if (input === "0") {
            return;
          }
          if (input.length > 1) {
            input = input.slice(0, -1);
          } else {
            input = "0";
          }
          break;

        default:
          break;
      }
    }
  }
</script>

<!-- Calculator -->
<div class="flex h-full flex-col space-y-3 rounded-md bg-slate-100 p-4">
  <!-- Display -->
  <div class="rounded-md bg-white text-end">
    <!-- Input -->
    <input
      class="my-1 block w-full rounded-t-md px-3 py-1 text-end text-xl focus-within:outline-none"
      type="text"
      bind:value={input}
    />

    <!-- Result -->
    <div class="my-1 h-10 px-3 py-1 text-2xl font-medium">
      {result}
    </div>
  </div>
  <!-- svelte-ignore a11y_click_events_have_key_events -->
  <!-- svelte-ignore a11y_no_static_element_interactions -->
  <div class="grid grow grid-cols-5 gap-2" onclick={handleClick}>
    <button
      class="col-start-4 bg-rose-200 hover:bg-rose-300"
      type="button"
      data-value="DEL"
      aria-label="delete"
    >
      DEL
    </button>
    <button
      class="bg-rose-200 hover:bg-rose-300"
      type="button"
      data-value="AC"
      aria-label="clear"
    >
      AC
    </button>
    <button
      class="bg-blue-200 hover:bg-blue-300"
      type="button"
      data-value="7"
      aria-label="7"
    >
      7
    </button>
    <button
      class="bg-blue-200 hover:bg-blue-300"
      type="button"
      data-value="8"
      aria-label="8"
    >
      8
    </button>
    <button
      class="bg-blue-200 hover:bg-blue-300"
      type="button"
      data-value="9"
      aria-label="9"
    >
      9
    </button>
    <button
      class="bg-slate-200 hover:bg-slate-300"
      type="button"
      data-value="("
      aria-label="open bracket"
    >
      (
    </button>
    <button
      class="bg-slate-200 hover:bg-slate-300"
      type="button"
      data-value=")"
      aria-label="close bracket"
    >
      )
    </button>
    <button
      class="bg-blue-200 hover:bg-blue-300"
      type="button"
      data-value="3"
      aria-label="3"
    >
      3
    </button>
    <button
      class="bg-blue-200 hover:bg-blue-300"
      type="button"
      data-value="4"
      aria-label="4"
    >
      4
    </button>
    <button
      class="bg-blue-200 hover:bg-blue-300"
      type="button"
      data-value="5"
      aria-label="5"
    >
      5
    </button>
    <button
      class="bg-slate-200 hover:bg-slate-300"
      type="button"
      data-value="/"
      aria-label="divide by"
    >
      &div;
    </button>
    <button
      class="bg-slate-200 hover:bg-slate-300"
      type="button"
      data-value="*"
      aria-label="multiply by"
    >
      &times;
    </button>
    <button
      class="bg-blue-200 hover:bg-blue-300"
      type="button"
      data-value="1"
      aria-label="1"
    >
      1
    </button>
    <button
      class="bg-blue-200 hover:bg-blue-300"
      type="button"
      data-value="2"
      aria-label="2"
    >
      2
    </button>
    <button
      class="bg-blue-200 hover:bg-blue-300"
      type="button"
      data-value="3"
      aria-label="3"
    >
      3
    </button>
    <button
      class="bg-slate-200 hover:bg-slate-300"
      type="button"
      data-value="+"
      aria-label="plus"
    >
      +
    </button>
    <button
      class="bg-slate-200 hover:bg-slate-300"
      type="button"
      data-value="-"
      aria-label="minus"
    >
      -
    </button>
    <button
      class="bg-blue-200 hover:bg-blue-300"
      type="button"
      data-value="±"
      aria-label="negate"
    >
      ±
    </button>
    <button
      class="bg-blue-200 hover:bg-blue-300"
      type="button"
      data-value="0"
      aria-label="0"
    >
      0
    </button>
    <button
      class="bg-blue-200 hover:bg-blue-300"
      type="button"
      data-value="."
      aria-label="dot"
    >
      &dot;
    </button>
    <button
      class="col-span-2 bg-green-200 hover:bg-green-300"
      type="button"
      data-value="="
      aria-label="equals"
    >
      =
    </button>
  </div>
</div>

<style>
  button {
    @apply rounded-lg active:scale-95;
  }
</style>
