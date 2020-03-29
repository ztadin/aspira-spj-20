import React from "react";

class AddUser extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: ""
    };

    this.handleUsernameChange = this.handleUsernameChange.bind(this);
  }

  handleUsernameChange(e) {
    this.setState({ username: e.target.value });
  }

  render() {
    const { onAddUser } = this.props;
    const { username } = this.state;
    return (
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="GitHub username..."
          value={username}
          onChange={this.handleUsernameChange}
        />
        <div className="input-group-append">
          <button
            className="btn btn-dark"
            type="button"
            onClick={() => {
              onAddUser(username);
              this.setState({ username: "" });
            }}
          >
            Add card
          </button>
        </div>
      </div>
    );
  }
}

export default AddUser;
