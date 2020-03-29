import React from "react";
import UserItem from "./UserItem";

function UserList(props) {
  const { users } = props;

  return users.map((user, index) => (
    <div className="row justify-content-center" key={user.id}>
      <div className="col mb-4">
        {index % 2 === 0 ? (
          <UserItem user={user} />
        ) : (
          <UserItem user={user} dark={true} />
        )}
      </div>
    </div>
  ));
}

export default UserList;
