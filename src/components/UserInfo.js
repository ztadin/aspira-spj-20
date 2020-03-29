import React from "react";

function UserInfo(props) {
  const { user } = props;
  return (
    <div className="media-body">
      <h5 className="mt-0">{user.name}</h5>
      <span>{user.company}</span>
    </div>
  );
}

export default UserInfo;
