import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 242.57,
    date: new Date(2021, 7, 15),
  },
  {
    id: "e2",
    title: "Car Insurance",
    amount: 124.57,
    date: new Date(2019, 6, 14),
  },
  {
    id: "e3",
    title: "Bike Services",
    amount: 224.37,
    date: new Date(2022, 5, 16),
  },
  {
    id: "e4",
    title: "Toilet Paper",
    amount: 42.57,
    date: new Date(2022, 0, 15),
  },
];
const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
};

export default App;
