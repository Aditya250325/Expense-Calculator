import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.expenseItem.date} />
      <div className="expense-item__description">
        <h2>{props.expenseItem.title}</h2>
        <div className="expense-item__price">${props.expenseItem.amount}</div>
      </div>
    </Card>
  );
};

export default ExpenseItem;
