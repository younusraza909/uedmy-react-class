import React, { useState } from "react";
import ExpenseCalculator from "./ExpenseCalculator";
import FriendList from "./FriendList";

function SplitNPay() {
  const [friendList, setFriendList] = useState([]);
  const [selectedfriend, setSelectedFriend] = useState();

  function onSelect(id) {
    let selected = friendList.filter((f) => f.id === id);
    setSelectedFriend(selected);
  }

  function handleAddFriend(name, profile) {
    if (!name || !profile) return;

    let newFriend = { id: Date.now(), name, profileImage: profile };

    setFriendList((list) => [...list, newFriend]);
  }

  return (
    <div className="container">
      <FriendList
        friendList={friendList}
        addFriend={handleAddFriend}
        onSelect={onSelect}
      />
      <ExpenseCalculator selected={selectedfriend} />
    </div>
  );
}

export default SplitNPay;
