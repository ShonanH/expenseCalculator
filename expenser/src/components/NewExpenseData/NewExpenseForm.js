import React, { useState } from "react";
import "./NewExpenseForm.css";

const NewExpenseForm = (props) => {
  const [newTitle, setNewTitle] = useState("");
  const [newAmount, setNewAmount] = useState("");
  const [newDate, setNewDate] = useState("");
  // const [userInput, setUserInput] = useState({ newTitle: '',  newAmount: '', newDate: ''})

  const titleChangeHandler = (event) => {
    //setUserInput((prevState) => {
    //   ...prevState,
    //   newTitle: event.target.value
    // }
    setNewTitle(event.target.value);
  };
  const amountChangeHandler = (event) => {
    //setUserInput((prevState) => {
    //   ...prevState,
    //   newAmount: event.target.value
    // }
    setNewAmount(event.target.value);
  };
  const dateChangeHandler = (event) => {
    //setUserInput((prevState) => {
    //   ...prevState,
    //   newDate: event.target.value
    // }
    setNewDate(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: newTitle,
      amount: newAmount,
      date: new Date(newDate),
    };
    props.getExpenseData(expenseData);
    setNewTitle("");
    setNewAmount("");
    setNewDate("");
  };
  return (
    <div>
      <form onSubmit={formSubmitHandler}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Title</label>
            <input type="text" value={newTitle} onChange={titleChangeHandler} />
          </div>
          <div className="new-expense__control">
            <label>Amount</label>
            <input
              type="number"
              min="0.01"
              step="0.01"
              value={newAmount}
              onChange={amountChangeHandler}
            />
          </div>
          <div className="new-expense__control">
            <label>Date</label>
            <input
              type="date"
              min="2021-01-01"
              step="2023-12-31"
              value={newDate}
              onChange={dateChangeHandler}
            />
          </div>
        </div>
        <div className="new-expense__actions">
          <button type="submit">Add Expense</button>
        </div>
      </form>
    </div>
  );
};

export default NewExpenseForm;
