import { useState } from "react";
import { Container, Row } from "react-bootstrap";
import { CalcButton } from "./calc_button";
import { CalcPlaceholder } from "./calc_placeholder";
import { evaluate } from "mathjs";

export function App() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState<unknown>(0);

  const operators = "/*+-";

  /**
   * Check if a str is an operator.
   * @param str string to check
   * @returns boolean
   */
  function isOperator(str: string) {
    return operators.includes(str);
  }

  function handleClick(event: Event) {
    const button: HTMLButtonElement = event.target?.closest("button"); // button element or it's descendants

    // Handle non button click
    if (!button) {
      return;
    }

    // Handle button click
    switch (button.value) {
      // Handle operators
      case "/":
      case "*":
      case "+":
      case "-":
        // Check if input area is not empty since operator cannot begin
        // expression
        if (input) {
          isOperator(input.slice(-1))
            ? setInput(input.slice(0, -1) + button.value)
            : setInput(input + button.value);
        }

        break;
      case "(":
      case ")":
        setInput(input + button.value);
        break;

      // Handle decimal
      case ".":
        break;

      // Handle sign
      case "∓":
        break;

      // Handle delete button
      case "DEL":
        if (input) {
          setInput(input.slice(0, -1));
        }
        break;

      // Handle clear button
      case "AC":
        if (input) {
          setInput("");
        }
        setResult(0);
        break;

      // Handle equals button
      case "=":
        setResult(evaluate(input));
        break;
      default:
        setInput(input + button.value);
        break;
    }
  }

  return (
    <main>
      <Container
        className="app text-center bg-body-secondary rounded-3"
        onClick={handleClick}
      >
        <div className="display text-bg-info m-2 p-2 rounded-2">
          <div className="input">{input}</div>
          <div className="result">{result}</div>
        </div>
        <div className="m-2 p-2">
          <Row>
            <CalcPlaceholder colspan={2} />
            <CalcPlaceholder colspan={2} />
            <CalcPlaceholder colspan={2} />
            <CalcButton value="DEL" variant="danger" />
            <CalcButton value="AC" variant="danger" />
          </Row>
          <Row>
            <CalcButton value={7} colspan={2} />
            <CalcButton value={8} colspan={2} />
            <CalcButton value={9} colspan={2} />
            <CalcButton value="(" variant="secondary" />
            <CalcButton value=")" variant="secondary" />
          </Row>
          <Row>
            <CalcButton value={4} colspan={2} />
            <CalcButton value={5} colspan={2} />
            <CalcButton value={6} colspan={2} />
            <CalcButton value="/" html="÷" variant="secondary" />
            <CalcButton value="*" html="×" variant="secondary" />
          </Row>
          <Row>
            <CalcButton value={1} colspan={2} />
            <CalcButton value={2} colspan={2} />
            <CalcButton value={3} colspan={2} />
            <CalcButton value="+" variant="secondary" />
            <CalcButton value="-" variant="secondary" />
          </Row>
          <Row>
            <CalcButton value="." colspan={2} />
            <CalcButton value={0} colspan={2} />
            <CalcButton value="∓" colspan={2} />
            <CalcButton value="=" variant="success" />
          </Row>
        </div>
      </Container>
    </main>
  );
}
