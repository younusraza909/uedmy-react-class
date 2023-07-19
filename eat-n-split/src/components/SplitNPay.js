import React, { useState } from "react";
import ExpenseCalculator from "./ExpenseCalculator";
import FriendList from "./FriendList";

function SplitNPay() {
  const [friendList, setFriendList] = useState([]);
  const [selectedfriend, setSelectedFriend] = useState(null);

  function onSelect(id) {
    let selected = friendList.filter((f) => f.id === id);
    setSelectedFriend(...selected);
  }

  function handleAddFriend(name, profile) {
    if (!name || !profile) return;

    let newFriend = { id: Date.now(), name, profileImage: profile, total: 0 };

    setFriendList((list) => [...list, newFriend]);
  }

  function adjustBill(value, id) {
    setFriendList((f) =>
      f.map((f) =>
        f.id === id
          ? { ...f, total: Number(f.total) + Number(value) }
          : { ...f }
      )
    );
  }

  return (
    <div className='container'>
      <FriendList
        friendList={friendList}
        addFriend={handleAddFriend}
        onSelect={onSelect}
      />

      {selectedfriend && (
        <ExpenseCalculator
          selected={selectedfriend}
          onFormSubmit={adjustBill}
          key={selectedfriend.id}
        />
      )}
    </div>
  );
}

export default SplitNPay;
