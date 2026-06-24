type SalesData = {
  year: number;
  sales: number;
};

type Props = {
  data?: SalesData | null;
  type: "bar" | "line";
};

export default function SalesChart({ data, type }: Props) {
  if (!data) {
    return <div>No data available</div>;
  }

  return (
    <div>
      <h2>{type.toUpperCase()} CHART</h2>

      {/* Simple visual representation (no libraries needed) */}
      <div
        style={{
          height: type === "bar" ? data.sales : 2,
          width: 200,
          background: "steelblue",
          marginTop: 10,
        }}
      />

      <p>
        Year: {data.year} | Sales: {data.sales}
      </p>
    </div>
  );
}