import React from "react";

function FriendListItem({ profile, name, onSelect, id }) {
  return (
    <div className="friendItem">
      <img src={profile} className="profile" />
      <div style={{ minWidth: "150px" }}>
        <p className="name">{name}</p>
        <p className="summary">You owe Clark 7$</p>
      </div>
      <button className="btn" onClick={() => onSelect(id)}>
        Select
      </button>
    </div>
  );
}

export default FriendListItem;
