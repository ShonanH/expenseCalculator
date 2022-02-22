import React, { useState } from "react";
import Card from "../UI/Card";
import ExpensesFilter from "../UI/ExpenseFilter";
import "./Expenses.css";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {
  const [newDate, setNewDate] = useState("2021");
  const newYearHandler = (newYear) => {
    // console.log("IT WORKS IN EXPENSE", newYear);
    setNewDate(newYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === newDate;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={newDate} getNewYear={newYearHandler} />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
}

export default Expenses;
