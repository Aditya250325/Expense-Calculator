import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";

const ExpensesList = (props) => {
  return (
    <ul className="expenses-list">
      {props.filteredExpenses.length === 0 ? (
        <p className="expenses-list__fallback">No Content Found.</p>
      ) : (
        props.filteredExpenses.map((item) => {
          return <ExpenseItem key={item.id} expenseItem={item} />;
        })
      )}
    </ul>
  );
};

export default ExpensesList;
