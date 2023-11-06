import { useState } from "react";
import { Container, Row } from "react-bootstrap";
import { CalcButton } from "./calc_button";
import { CalcPlaceholder } from "./calc_placeholder";

export function App() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState(0);

  const numbers = "0123456789";
  const operators = "÷×+-";

  function handleClick(event: Event) {
    const button = event.target?.closest("button"); // button element or it's descendants

    // Handle non button click
    if (!button) {
      return;
    }

    // Handle numbers click
    if (numbers.includes(button.value)) {
      setInput(input + button.value);
    }

    // Handle operators click
    if (operators.includes(button.value)) {
      // Check if the last input is an operator and replace it with the current
      // operator since operators cannot follow each other
      if (operators.includes(input.slice(-1))) {
        setInput(input.slice(0, -1) + button.value);
      } else {
        setInput(input + button.value);
      }
    }

    // Handle bracket Click
    if (button.value === "(" || button.value === ")") {
      setInput(input + button.value);

      // TODO: add bracket color
    }

    // Handle delete click
    if (button.value === "DEL") {
      // Check if input area is not empty
      if (input) {
        setInput(input.slice(0, -1));
      }
    }

    // Handle clear click
    if (button.value === "AC") {
      if (input) {
        setInput("");
      }
    }
  }

  function handleDecimalPointClick() {
    const lastInput = input.slice(-1);
    if (!lastInput) {
      setInput("0.");
    } else {
      if (lastInput === ".") {
        return;
      } else setInput(input + ".");
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
