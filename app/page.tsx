import Link from "next/link";

export default function Home() {
  return (
    <div style={{display:'flex',height:'100vh',alignItems:'center',justifyContent:'center'}}>
      <Link href="/dashboard">Go to Dashboard</Link>
    </div>
  );
}