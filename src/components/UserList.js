import React from "react";
import PropTypes from "prop-types";
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

UserList.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      username: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
      company: PropTypes.string.isRequired
    })
  )
};

export default UserList;
