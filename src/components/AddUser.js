import React from "react";

function AddUser() {
  return (
    <div className="input-group mb-3">
      <input
        type="text"
        className="form-control"
        placeholder="GitHub username..."
      />
      <div className="input-group-append">
        <button className="btn btn-dark" type="button">
          Add card
        </button>
      </div>
    </div>
  );
}

export default AddUser;
