"use client";

type SalesItem = {
  year: number;
  sales: number;
};

type Props = {
  data: SalesItem | null;
  type: "bar" | "line";
};

export default function SalesChart({ data, type }: Props) {
  if (!data) return <p>No data found</p>;

  return (
    <div>
      <h2>Sales Chart ({type})</h2>

      <p>
        {data.year}: {data.sales}
      </p>
    </div>
  );
}