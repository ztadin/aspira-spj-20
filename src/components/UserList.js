import React from "react";
import UserItem from "./UserItem";

function UserList(props) {
  const { users } = props;

  return (
    <div className="p-4 w-100">
      <div className="row">
        {users.map(user => (
          <UserItem user={user} key={user.id} />
        ))}
      </div>
    </div>
  );
}

export default UserList;
