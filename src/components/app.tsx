import { Container, Row } from "react-bootstrap";
import { DigitButton } from "./digit_button";

export default function App() {
  return (
    <main>
      <Container className="app text-center bg-body-secondary rounded-3">
        <Row></Row>
        <Row className="justify-content-end bg-body-tertiary m-2 p-2 rounded-2">
          0
        </Row>
        <div className="m-2 p-2">
          <Row className="">
            <DigitButton value={7} />
            <DigitButton value={8} />
            <DigitButton value={9} />

            <button type="button" className="btn col m-1 text-bg-secondary">
              (
            </button>
            <button type="button" className="btn col m-1 text-bg-secondary">
              )
            </button>
          </Row>
          <Row className="">
            <DigitButton value={4} />
            <DigitButton value={5} />
            <DigitButton value={6} />
            <button type="button" className="btn col m-1 text-bg-light">
              ÷
            </button>
            <button type="button" className="btn col m-1 text-bg-light">
              ×
            </button>
          </Row>
          <Row className="">
            <DigitButton value={3} />
            <DigitButton value={2} />
            <DigitButton value={1} />
            <button type="button" className="btn col m-1 text-bg-light">
              +
            </button>
            <button type="button" className="btn col m-1 text-bg-light">
              -
            </button>
          </Row>
          <Row className="">
            <button type="button" className="btn col-2 m-1 text-bg-light">
              .
            </button>
            <DigitButton value={0} />
            <button type="button" className="btn col-2 m-1 text-bg-light">
              ∓
            </button>
            <button type="button" className="btn col m-1 text-bg-success">
              =
            </button>
          </Row>
        </div>
      </Container>
    </main>
  );
}


