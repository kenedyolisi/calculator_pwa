import { Button } from "react-bootstrap";

interface CalcButtonProps {
  variant?: string;
  colspan?: number;
  value: number | string;
  html?: string;
}

export function CalcButton({ variant, colspan, value, html }: CalcButtonProps) {
  return (
    <Button
      className={`${variant ? "btn-" + variant : "btn-light"} ${
        colspan ? "col-" + colspan : "col"
      } m-1`}
      type="button"
      value={value}
    >
      {html ? html : value}
    </Button>
  );
}
