import { Button } from "react-bootstrap";

export function OperatorButton({ value }: { value: string }) {
  return (
    <Button className="btn-secondary col m-1" type="button">
      {value}
    </Button>
  );
}
