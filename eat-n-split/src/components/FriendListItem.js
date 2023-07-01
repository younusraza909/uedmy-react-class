import React from "react";

function FriendListItem({ profileImage, name, onSelect, id, total }) {
  const text =
    total === 0
      ? `You are all settled with ${name}`
      : total > 0
      ? `${name} owes you ${Math.abs(total)}$`
      : `You owe ${name} ${Math.abs(total)}$`;

  return (
    <div className="friendItem">
      <img src={profileImage} className="profile" />
      <div style={{ minWidth: "150px" }}>
        <p className="name">{name}</p>
        <p
          className="summary"
          style={
            total > 0 ? { color: "green" } : total < 0 ? { color: "red" } : {}
          }
        >
          {text}
        </p>
      </div>
      <button className="btn" onClick={() => onSelect(id)}>
        Select
      </button>
    </div>
  );
}

export default FriendListItem;
