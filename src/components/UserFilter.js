import React from "react";

function UserFilter(props) {
  const { onChange } = props;
  return (
    <div className="d-flex flex-column align-items-center p-4 bg-light">
      <span className="font-weight-bold mb-4">Find user</span>
      <input
        className="form-control"
        placeholder="Search..."
        onChange={e => onChange(e.target.value)}
      />
    </div>
  );
}

export default UserFilter;
