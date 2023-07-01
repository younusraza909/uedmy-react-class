import React, { useState } from "react";

function ExpenseCalculator({ selected, onFormSubmit }) {
  const { name, id } = selected;

  const [bill, setBill] = useState(0);
  const [yourExpense, setYourExpense] = useState(0);
  const [whoPaying, setWhoPaying] = useState("you");

  let friendExpense = Number(bill) - Number(yourExpense);

  function handleFormSubmit(e) {
    e.preventDefault();

    const remaining = whoPaying === "you" ? friendExpense : -yourExpense;

    onFormSubmit(remaining, id);

    setBill(0);
    setYourExpense(0);
    setWhoPaying("you");
  }

  return (
    <form className="calulatorContainer" onSubmit={handleFormSubmit}>
      <h1>Split A Bill with {name}</h1>

      <div className="input-container">
        <p>💰 Bill value</p>
        <input
          type="number"
          value={bill}
          onChange={(e) => setBill(e.target.value)}
        />
      </div>

      <div className="input-container">
        <p>🧍‍♂️ Your expense</p>
        <input
          type="number"
          value={yourExpense}
          onChange={(e) => setYourExpense(e.target.value)}
        />
      </div>

      <div className="input-container">
        <p>👫 {name}'s expense</p>
        <input type="number" value={friendExpense} disabled />
      </div>

      <div className="input-container">
        <p>🤑 Who is paying the bill?</p>
        <select onChange={(e) => setWhoPaying(e.target.value)}>
          <option value="you">You</option>
          <option value={name}>{name}</option>
        </select>
      </div>

      <div className="buttonContainer">
        <button className="btn" disabled={bill <= 0}>
          Split Bill
        </button>
      </div>
    </form>
  );
}

export default ExpenseCalculator;
