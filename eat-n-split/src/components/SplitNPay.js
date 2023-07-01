import React from "react";
import ExpenseCalculator from "./ExpenseCalculator";
import FriendList from "./FriendList";

function SplitNPay() {
  return (
    <div className="container">
      <FriendList />
      <ExpenseCalculator />
    </div>
  );
}

export default SplitNPay;
