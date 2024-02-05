import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import { useState } from "react";

const NewExpense = (props) => {
  const [addNewExpense, setAddNewExpense] = useState(true);
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = { ...enteredExpenseData, id: Math.random().toString() };
    props.onAddExpense(expenseData);
  };
  const addExpenseHandler = () => setAddNewExpense(false);
  return (
    <div className="new-expense">
      {addNewExpense ? (
        <button onClick={addExpenseHandler}>Add New Expense</button>
      ) : (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          setAddNewExpense={setAddNewExpense}
        />
      )}
    </div>
  );
};

export default NewExpense;
