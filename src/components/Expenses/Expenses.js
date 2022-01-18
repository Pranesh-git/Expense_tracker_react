import React, { useState } from "react";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const [enteredYear, setEnteredYear] = useState("2020");

  const filterChangeHandler = (yearSelected) => {
    setEnteredYear(yearSelected);
  };

  const filteredExpenses = props.expense.filter((item) => {
    return item.date.getFullYear().toString() === enteredYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selectedYear={enteredYear}
          onChangeYear={filterChangeHandler}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList filteredItems={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;
