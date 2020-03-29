import React from "react";

function Avatar(props) {
  const { user } = props;
  return (
    <img
      src={user.avatar}
      className="mr-3"
      alt={`${user.firstName} ${user.lastName}`}
    />
  );
}

export default Avatar;
