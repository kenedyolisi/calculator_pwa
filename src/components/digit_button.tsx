import { Button } from "react-bootstrap";

interface DigitButtonProps {
  value: number | string;
  handleClick: () => void;
}

export function DigitButton({ value, handleClick }: DigitButtonProps) {
  return (
    <Button
      className="btn-light col-2 m-1"
      type="button"
      value={value}
      onClick={ handleClick}
    >
      {value}
    </Button>
  );
}
