import React from "react";
import UserItem from "./UserItem";
import AddUser from "./AddUser";

function UserList(props) {
  const { users } = props;

  return (
    <div className="p-4 w-100">
      <div className="row justify-content-center">
        <div className="col-3 mb-4">
          <AddUser />
        </div>
      </div>
      {users.map(user => (
        <div className="row justify-content-center">
          <div className="col-3 mb-4">
            <UserItem user={user} key={user.id} />
          </div>
        </div>
      ))}
    </div>
  );
}

export default UserList;
