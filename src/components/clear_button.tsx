import { Button } from "react-bootstrap";

interface ClearButtonProps {
  handleClick: () => void;
}

export function ClearButton({ handleClick }: ClearButtonProps) {
  return (
    <Button className="btn-danger col m-1" onClick={handleClick}>
      AC
    </Button>
  );
}
