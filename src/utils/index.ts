export function toggleSign(input: string) {
  // Remove leading and trailing whitespace from the input
  input = input.trim();

  // If input is empty or is 0, do nothing
  if (input === "" || input === "0") {
    return;
  }

  // Split the input by spaces to handle operators surrounded by spaces
  let parts = input.split(" ");
  let lastPart = parts.at(-1);

  // Check if the last part is an operator
  const operators = ["+", "-", "*", "/"];

  if (lastPart && (operators.includes(lastPart) || lastPart === "")) {
    // Do nothing if the last part is an operator or empty
    return;
  }

  // Toggle the sign of the last part
  if (lastPart?.startsWith("-")) {
    lastPart = lastPart.slice(1);
  } else {
    lastPart = "-" + lastPart;
  }

  // Update the input parts with the toggled last part
  parts = parts.with(-1, lastPart);

  // Return parts joined back into a single string with spaces
  return parts.join(" ");
}
