import { useState } from "react";
import { Container, Row } from "react-bootstrap";
import { CalcButton } from "./calc_button";
import { CalcPlaceholder } from "./calc_placeholder";

export function App() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState(0);

  const numbers = "0123456789";

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

  function handleDeleteClick() {
    if (input) {
      setInput(input.slice(0, -1));
    }
  }

  function handleClearClick() {
    if (input) {
      setInput("");
    }
  }

  function handleOperatorClick(event: Event) {
    setInput(input + event.target?.value);
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
            <CalcButton value="÷" variant="secondary" />
            <CalcButton value="×" variant="secondary" />
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
