import React from "react";
import Header from "./components/Header";
import Container from "./components/Container";
import UserFilter from "./components/UserFilter";
import UserList from "./components/UserList";
import AddUser from "./components/AddUser";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      filter: ""
    };

    this.filteredUsers = this.filteredUsers.bind(this);
    this.handleAddUser = this.handleAddUser.bind(this);
  }

  filteredUsers() {
    const { users, filter } = this.state;
    return users.filter(user => {
      return user.name.toLowerCase().includes(filter.toLowerCase());
    });
  }

  handleAddUser(username) {
    const { users } = this.state;
    if (!users.some(user => user.username === username)) {
      fetch(`https://api.github.com/users/${username}`)
        .then(res => (res.ok ? res.json() : null))
        .then(data => {
          if (data) {
            const user = {
              id: data.id,
              username: data.login,
              name: data.name || "Unknown",
              avatar: data.avatar_url || "https://via.placeholder.com/75",
              company: data.company || "None"
            };
            this.setState(state => ({
              users: [...state.users, user]
            }));
          }
        });
    }
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Container>
          <div className="d-flex">
            <UserFilter onChange={value => this.setState({ filter: value })} />
            <div className="p-4 w-100">
              <div className="row justify-content-center">
                <div className="col-3 mb-4">
                  <AddUser onAddUser={this.handleAddUser} />
                  <UserList users={this.filteredUsers()} />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    );
  }
}

export default App;
