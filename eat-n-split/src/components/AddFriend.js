import React, { useState } from "react";

function AddFriend({ addFriend }) {
  const [name, setName] = useState("");
  const [profile, setProfile] = useState("https://i.pravatar.cc/49");

  function handleFormSubmit(e) {
    e.preventDefault();
    addFriend(name, profile);

    setName("");
  }

  return (
    <form className="formContainer" onSubmit={handleFormSubmit}>
      <div className="input-container">
        <p>👫 Friend Name</p>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div className="input-container">
        <p>🖼 Image Url</p>
        <input
          type="text"
          value={profile}
          onChange={(e) => setProfile(e.target.value)}
        />
      </div>

      <button className="btn btn-full">Add</button>
    </form>
  );
}

export default AddFriend;
