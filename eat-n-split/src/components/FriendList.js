import React from "react";
import FriendListItem from "./FriendListItem";
import AddFriend from "./AddFriend";

const friendList = [
  {
    name: "Clark",
    profileImage: "https://i.pravatar.cc/48",
    id: 1,
  },
  {
    name: "Sarah",
    profileImage: "https://i.pravatar.cc/49",
    id: 2,
  },
  {
    name: "Anthony",
    profileImage: "https://i.pravatar.cc/49",
    id: 3,
  },
];

function FriendList() {
  return (
    <div>
      <div className="friendContainer">
        {friendList.map((friend) => (
          <FriendListItem
            key={friend.id}
            name={friend.name}
            profile={friend.profileImage}
          />
        ))}
      </div>
      <div className="buttonContainer">
        <button className="btn">Add Friend</button>
      </div>
      <AddFriend />
      <div className="buttonContainer">
        <button className="btn">Close</button>
      </div>
    </div>
  );
}

export default FriendList;
