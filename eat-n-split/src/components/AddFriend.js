import React from "react";

function AddFriend() {
  return (
    <form className="formContainer">
      <div className="input-container">
        <p>👫 Friend Name</p>
        <input type="text" />
      </div>

      <div className="input-container">
        <p>🖼 Image Url</p>
        <input type="text" />
      </div>

      <button className="btn btn-full">Add</button>
    </form>
  );
}

export default AddFriend;
