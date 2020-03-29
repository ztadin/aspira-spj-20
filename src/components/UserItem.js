import React from "react";

function UserItem(props) {
  const { user } = props;
  return (
    <div className="col-6 mb-4">
      <div className="card">
        <div className="card-body">
          <div className="media">
            <img src={user.avatar} className="mr-3" alt="..." />
            <div className="media-body">
              <h5 className="mt-0">
                {user.firstName} {user.lastName}
              </h5>
              <span>{user.company}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserItem;
