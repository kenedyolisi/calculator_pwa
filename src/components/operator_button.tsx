export function OperatorButton({ value }: { value: string }) {
  return (
    <button className="btn col m-1 text-bg-secondary" type="button">
      {value}
    </button>
  );
}
