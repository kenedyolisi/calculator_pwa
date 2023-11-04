import { Button } from "react-bootstrap";

export function DigitButton({ value }: { value: number | string }) {
  return (
    <Button className="btn-light col-2 m-1" type="button" data-value={value}>
      {value}
    </Button>
  );
}
