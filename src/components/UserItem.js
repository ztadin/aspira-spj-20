import React from "react";
import PropTypes from "prop-types";
import Avatar from "./Avatar";
import UserInfo from "./UserInfo";

function UserItem(props) {
  const { user, dark } = props;
  return (
    <div className={`card ${dark ? "bg-light" : ""}`}>
      <div className="card-body">
        <div className="media">
          <Avatar user={user} />
          <UserInfo user={user} />
        </div>
      </div>
    </div>
  );
}

UserItem.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number.isRequired,
    username: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired
  }).isRequired,
  dark: PropTypes.bool
};

UserItem.defaultProps = {
  dark: false
};

export default UserItem;
