import React from "react";
import Avatar from "./Avatar";
import UserInfo from "./UserInfo";

function UserItem(props) {
  const { user } = props;
  return (
    <div className="card">
      <div className="card-body">
        <div className="media">
          <Avatar user={user} />
          <UserInfo user={user} />
        </div>
      </div>
    </div>
  );
}

export default UserItem;
