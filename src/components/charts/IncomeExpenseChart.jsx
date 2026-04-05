import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

import { useAppContext } from "../../context/AppContext";
import "../../styles/incomeExpenseChart.css";

const IncomeExpenseChart = () => {
  const { transactions, theme } = useAppContext();

  const monthlyMap = {};

  transactions.forEach((t) => {
    const date = new Date(t.date);
    const month = date.toLocaleString("default", {
      month: "short",
    });

    if (!monthlyMap[month]) {
      monthlyMap[month] = {
        month,
        income: 0,
        expense: 0,
      };
    }

    if (t.type === "income") {
      monthlyMap[month].income += t.amount;
    } else {
      monthlyMap[month].expense += t.amount;
    }
  });

  const data = Object.values(monthlyMap);

  return (
    <div className={`ie-card ${theme}`}>
      <h2 className="ie-title">Income vs Expense</h2>

      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />

          <Bar dataKey="income" fill="#14b8a6" radius={[6, 6, 0, 0]} />
          <Bar dataKey="expense" fill="#ef4444" radius={[6, 6, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default IncomeExpenseChart;