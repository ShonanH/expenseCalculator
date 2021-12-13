import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpenseData/NewExpense";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    {
      id: "e2",
      title: "New TV",
      amount: 194.12,
      date: new Date(2020, 11, 14),
    },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 594.12,
      date: new Date(2021, 1, 11),
    },
    {
      id: "e4",
      title: "New Computer",
      amount: 1194.12,
      date: new Date(2021, 10, 15),
    },
  ];

  const updateExpenseHandler = (newExpense) => {
    console.log(newExpense);
  };
  return (
    <div>
      <NewExpense onAddExpense={updateExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
