import ExpensesList from "./ExpensesList";
import ExpensesFilter from "./ExpensesFilter";
import "./Expenses.css";
import Card from "../UI/Card";
import { useState } from "react";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const [selectedYear, setSelectedYear] = useState("2022");

  const filteredExpenses = props.expenses.filter((item) => {
    return item.date.getFullYear().toString() === selectedYear;
  });

  const selectedValueHandler = (value) => {
    setSelectedYear(value);
  };
  return (
    <li>
      <Card className="expenses">
        <ExpensesFilter
          selectedYear={selectedYear}
          selectedValue={selectedValueHandler}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList filteredExpenses={filteredExpenses} />
      </Card>
    </li>
  );
};

export default Expenses;
