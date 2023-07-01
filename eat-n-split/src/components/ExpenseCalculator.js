import React from "react";

function ExpenseCalculator({ selected }) {
  console.log("selected", selected);
  return (
    <form className="calulatorContainer">
      <h1>Split A Bill with Anthony</h1>

      <div className="input-container">
        <p>💰 Bill value</p>
        <input type="number" />
      </div>

      <div className="input-container">
        <p>🧍‍♂️ Your expense</p>
        <input type="number" />
      </div>

      <div className="input-container">
        <p>👫 Anthony's expense</p>
        <input type="number" />
      </div>

      <div className="input-container">
        <p>🤑 Who is paying the bill?</p>
        <select>
          <option>You</option>
          <option>Anthony</option>
        </select>
      </div>

      <div className="buttonContainer">
        <button className="btn">Add Friend</button>
      </div>
    </form>
  );
}

export default ExpenseCalculator;
