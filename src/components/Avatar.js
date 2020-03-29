import React from "react";
import PropTypes from "prop-types";

function Avatar(props) {
  const { user } = props;
  return (
    <img
      src={user.avatar}
      className="mr-3"
      alt={user.name}
      style={{ width: "75px", height: "75px" }}
    />
  );
}

Avatar.propTypes = {
  user: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  }).isRequired
};

export default Avatar;
