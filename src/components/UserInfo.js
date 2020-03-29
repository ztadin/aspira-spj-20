import React from "react";
import PropTypes from "prop-types";

function UserInfo(props) {
  const { user } = props;
  return (
    <div className="media-body">
      <h5 className="mt-0">{user.name}</h5>
      <span>{user.company}</span>
    </div>
  );
}

UserInfo.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired
  }).isRequired
};

export default UserInfo;
