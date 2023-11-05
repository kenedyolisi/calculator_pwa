import { useState } from "react";
import { Container, Row} from "react-bootstrap";
import { CalcButton } from "./calc_button";
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
            <CalcButton value=" ( " variant="secondary" />
            <CalcButton value=" ) " variant="secondary" />
          </Row>
          <Row>
            <CalcButton value={4} colspan={2} />
            <CalcButton value={5} colspan={2} />
            <CalcButton value={6} colspan={2} />
            <CalcButton value=" ÷ " variant="secondary" />
            <CalcButton value=" × " variant="secondary" />
          </Row>
          <Row>
            <CalcButton value={1} colspan={2} />
            <CalcButton value={2} colspan={2} />
            <CalcButton value={3} colspan={2} />
            <CalcButton value=" + " variant="secondary" />
            <CalcButton value=" - " variant="secondary" />
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
