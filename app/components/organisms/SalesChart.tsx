import { salesData } from "../../data/salesData";

export default function SalesChart() {
  if (!salesData) return null;

  return (
    <div>
      <h2>Sales Chart</h2>
      <ul>
        {salesData.map((item) => (
          <li key={item.year}>
            {item.year}: {item.sales}
          </li>
        ))}
      </ul>
    </div>
  );
}