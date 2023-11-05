import { Button } from "react-bootstrap";

interface CalcButtonProps {
  variant?: string;
  colspan?: number;
  value: number | string;
}

export function CalcButton({ variant, colspan, value }: CalcButtonProps) {
  return (
    <Button
      className={`${variant ? "btn-" + variant : "btn-light"} ${
        colspan ? "col-" + colspan : "col"
      } m-1`}
      type="button"
      value={value}
    >
      {value}
    </Button>
  );
}
