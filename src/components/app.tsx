import { Container, Row } from "react-bootstrap";
import { DigitButton } from "./digit_button";
import { OperatorButton } from "./operator_button";
import { ResultButton } from "./result_button";
import { Placeholder } from "./placeholder";
import { ClearButton } from "./clear_button";
import { DeleteButton } from "./delete_button";
import { useState } from "react";

export function App() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState(0);

  function handleNumberClick(event: Event) {
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
            <Placeholder colspan={2} />
            <Placeholder colspan={2} />
            <Placeholder colspan={2} />
            <DeleteButton />
            <ClearButton />
          </Row>
          <Row className="">
            <DigitButton value={7} handleClick={handleNumberClick} />
            <DigitButton value={8} handleClick={handleNumberClick} />
            <DigitButton value={9} handleClick={handleNumberClick} />
            <OperatorButton value="(" />
            <OperatorButton value=")" />
          </Row>
          <Row className="">
            <DigitButton value={4} handleClick={handleNumberClick} />
            <DigitButton value={5} handleClick={handleNumberClick} />
            <DigitButton value={6} handleClick={handleNumberClick} />
            <OperatorButton value="÷" />
            <OperatorButton value="×" />
          </Row>
          <Row className="">
            <DigitButton value={3} handleClick={handleNumberClick} />
            <DigitButton value={2} handleClick={handleNumberClick} />
            <DigitButton value={1} handleClick={handleNumberClick} />
            <OperatorButton value="+" />
            <OperatorButton value="-" />
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
