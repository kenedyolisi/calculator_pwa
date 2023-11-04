export function DigitButton({ value }: { value: number; }) {
  return (
    <button
      className="btn col-2 m-1 text-bg-light"
      type="button"
      data-value={value}
    >
      {value}
    </button>
  );
}
