import { Container, Row } from "react-bootstrap";

export default function App() {
  return (
    <main>
      <Container className="app text-center bg-body-secondary rounded-3">
        <Row className="justify-content-end bg-body-tertiary m-2 p-2 rounded-2">
          0
        </Row>
        <div className="m-2 p-2">
          <Row className="">
            <button
              type="button"
              className="btn col-2 m-1 text-bg-light"
              data-value={7}
            >
              7
            </button>
            <button
              type="button"
              className="btn col-2 m-1 text-bg-light"
              data-value={8}
            >
              8
            </button>
            <button
              type="button"
              className="btn col-2 m-1 text-bg-light"
              data-value={9}
            >
              9
            </button>
            <button type="button" className="btn col m-1 text-bg-secondary">
              (
            </button>
            <button type="button" className="btn col m-1 text-bg-secondary">
              )
            </button>
          </Row>
          <Row className="">
            <button
              type="button"
              className="btn col-2 m-1 text-bg-light"
              data-value={4}
            >
              4
            </button>
            <button
              type="button"
              className="btn col-2 m-1 text-bg-light"
              data-value={5}
            >
              5
            </button>
            <button
              type="button"
              className="btn col-2 m-1 text-bg-light"
              data-value={6}
            >
              6
            </button>
            <button type="button" className="btn col m-1 text-bg-light">
              ÷
            </button>
            <button type="button" className="btn col m-1 text-bg-light">
              ×
            </button>
          </Row>
          <Row className="">
            <button
              type="button"
              className="btn col-2 m-1 text-bg-light"
              data-value={1}
            >
              1
            </button>
            <button
              type="button"
              className="btn col-2 m-1 text-bg-light"
              data-value={2}
            >
              2
            </button>
            <button
              type="button"
              className="btn col-2 m-1 text-bg-light"
              data-value={3}
            >
              3
            </button>
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
            <button
              type="button"
              className="btn col-2 m-1 text-bg-light"
              data-value={0}
            >
              0
            </button>
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
