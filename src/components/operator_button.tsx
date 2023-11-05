import { Button } from "react-bootstrap";

interface OperatorButtonProps {
  value: string;
  handleClick: () => void;
}

export function OperatorButton({ value, handleClick }: OperatorButtonProps) {
  return (
    <Button
      className="btn-secondary col m-1"
      type="button"
      onClick={handleClick}
      value={value}
    >
      {value.trim()}
    </Button>
  );
}
