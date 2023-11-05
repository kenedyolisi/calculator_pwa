import { Container, Row } from "react-bootstrap";
import { DigitButton } from "./digit_button";
import { OperatorButton } from "./operator_button";
import { ResultButton } from "./result_button";
import { ClearButton } from "./clear_button";
import { DeleteButton } from "./delete_button";
import { useState } from "react";
import { CalcPlaceholder } from "./calc_placeholder";


export function App() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState(0);

  function handleNumberClick(event: Event) {
    setInput(input + event.target?.value);
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
      <Container className="app text-center bg-body-secondary rounded-3">
        <div className="display text-bg-info m-2 p-2 rounded-2">
          <div className="display-input">{input}</div>
          <div className="display-result">{result}</div>
        </div>
        <div className="m-2 p-2">
          <Row className="justify-content-end">
            <DeleteButton handleClick={handleDeleteClick} />
            <ClearButton handleClick={handleClearClick} />
            <CalcPlaceholder colspan={2} />
            <CalcPlaceholder colspan={2} />
            <CalcPlaceholder colspan={2} />
          </Row>
          <Row className="">
            <DigitButton value={7} handleClick={handleNumberClick} />
            <DigitButton value={8} handleClick={handleNumberClick} />
            <DigitButton value={9} handleClick={handleNumberClick} />
            <OperatorButton value=" ( " handleClick={handleOperatorClick} />
            <OperatorButton value=" ) " handleClick={handleOperatorClick} />
          </Row>
          <Row className="">
            <DigitButton value={4} handleClick={handleNumberClick} />
            <DigitButton value={5} handleClick={handleNumberClick} />
            <DigitButton value={6} handleClick={handleNumberClick} />
            <OperatorButton value=" ÷ " handleClick={handleOperatorClick} />
            <OperatorButton value=" × " handleClick={handleOperatorClick} />
          </Row>
          <Row className="">
            <DigitButton value={3} handleClick={handleNumberClick} />
            <DigitButton value={2} handleClick={handleNumberClick} />
            <DigitButton value={1} handleClick={handleNumberClick} />
            <OperatorButton value=" + " handleClick={handleOperatorClick} />
            <OperatorButton value=" - " handleClick={handleOperatorClick} />
          </Row>
          <Row className="">
            <DigitButton value="." />
            <DigitButton value={0} handleClick={handleNumberClick} />
            <DigitButton value="∓" />

            <ResultButton />
          </Row>
        </div>
      </Container>
    </main>
  );
}
