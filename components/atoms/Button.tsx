export default function Button({ children, onClick }: any) {
  return (
    <button onClick={onClick} style={{padding:'8px 12px'}}>
      {children}
    </button>
  );
}