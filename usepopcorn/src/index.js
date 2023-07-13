import React from "react";
import ReactDOM from "react-dom/client";
import StartRating from "./StartRating";
// import App from "./App";
// import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <StartRating
      maxRating={5}
      className='test'
      messages={["Terrible", "Bad", "Okay", "Good", "Amazing"]}
    />
  </React.StrictMode>
);
