import React, { useState } from "react";
import FriendListItem from "./FriendListItem";
import AddFriend from "./AddFriend";

function FriendList({ friendList, addFriend, onSelect }) {
  const [isOpen, setIsOpen] = useState(false);

  function handleToggle() {
    setIsOpen((op) => !op);
  }
  return (
    <div>
      <div className="friendContainer">
        {friendList.map((friend) => (
          <FriendListItem
            key={friend.id}
            id={friend.id}
            name={friend.name}
            profile={friend.profileImage}
            onSelect={onSelect}
          />
        ))}
      </div>
      <div className="buttonContainer">
        <button className="btn" onClick={handleToggle}>
          Add Friend
        </button>
      </div>
      {isOpen && (
        <>
          <AddFriend addFriend={addFriend} />
          <div className="buttonContainer">
            <button className="btn" onClick={handleToggle}>
              Close
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default FriendList;
