import React from "react";
import ReactDOM from "react-dom/client";
import StarRating from "./StarRating";
// import App from "./App";
// import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <StarRating
      maxRating={5}
      className='test'
      messages={["Terrible", "Bad", "Okay", "Good", "Amazing"]}
    />
  </React.StrictMode>
);
