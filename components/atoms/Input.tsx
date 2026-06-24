export default function Input({ value, onChange }: any) {
  return (
    <input value={value} onChange={onChange} placeholder="threshold" />
  );
}