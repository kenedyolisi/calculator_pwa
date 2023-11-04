import { Button } from "react-bootstrap";

interface DeleteButtonProps {
  handleClick: () => void;
}

export function DeleteButton({ handleClick }: DeleteButtonProps) {
  return (
    <Button className="btn-danger col m-1" onClick={handleClick}>
      DEL
    </Button>
  );
}
