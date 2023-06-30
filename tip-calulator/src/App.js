import { useState } from "react";
import "./App.css";

function Input({ children }) {
  return <div>{children}</div>;
}

function TotalBill({ tip, totalBill }) {
  console.log(typeof tip);
  console.log(typeof totalBill);
  return (
    <p>
      You pay ${tip + totalBill} (${totalBill} + ${tip} tip)
    </p>
  );
}

function App() {
  const dropdownOptions = [
    { title: "Dissatisfied (0%)", value: 0 },
    { title: "It was okay (5%)", value: 5 },
    { title: "It was good (10%)", value: 10 },
    { title: "Absolutely amazing (20%)", value: 20 },
  ];
  const [bill, setBill] = useState(0);
  const [myReview, setMyReview] = useState(0);
  const [firendReview, setFriendsReview] = useState(0);

  const handleChangeBill = (e) => {
    let number = Number(e.target.value);
    setBill(Number(e.target.value));
  };

  const handleChangeMyReview = (review) => {
    setMyReview(review);
  };

  const handleChangeFriendsReview = (review) => {
    setFriendsReview(review);
  };

  const tip = bill * ((myReview + firendReview) / 2 / 100);

  return (
    <div className="App">
      <Input>
        <p>How much was the bill?</p>
        <input type="number" value={bill} onChange={handleChangeBill} />
      </Input>

      <Input>
        <p>How did you like the service?</p>
        <select
          name="review"
          onChange={(e) => handleChangeMyReview(Number(e.target.value))}
        >
          {dropdownOptions.map((op) => (
            <option value={op.value}>{op.title}</option>
          ))}
        </select>
      </Input>

      <Input>
        <p>How did your friend like the service?</p>
        <select
          name="firendsReview"
          onChange={(e) => handleChangeFriendsReview(Number(e.target.value))}
        >
          {dropdownOptions.map((op) => (
            <option value={op.value}>{op.title}</option>
          ))}
        </select>
      </Input>

      <TotalBill tip={averageReview} totalBill={bill} />
    </div>
  );
}

export default App;
