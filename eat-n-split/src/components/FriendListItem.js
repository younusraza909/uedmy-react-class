import React from "react";

function FriendListItem({ profile, name }) {
  return (
    <div className="friendItem">
      <img src={profile} className="profile" />
      <div>
        <p className="name">{name}</p>
        <p className="summary">You owe Clark 7$</p>
      </div>
      <button className="btn">Select</button>
    </div>
  );
}

export default FriendListItem;
