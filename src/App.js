import React from "react";
import Header from "./components/Header";
import Container from "./components/Container";
import UserFilter from "./components/UserFilter";
import UserList from "./components/UserList";
import "./App.css";

const users = [
  {
    id: 1,
    firstName: "Marko",
    lastName: "Matic",
    avatar: "https://via.placeholder.com/75",
    company: "Aspira"
  },
  {
    id: 2,
    firstName: "Ivan",
    lastName: "Ivic",
    avatar: "https://via.placeholder.com/75",
    company: "Pseudocode"
  },
  {
    id: 3,
    firstName: "Filip",
    lastName: "Filic",
    avatar: "https://via.placeholder.com/75",
    company: "Infobip"
  }
];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [...users],
      filter: ""
    };

    this.filterUsers = this.filterUsers.bind(this);
  }

  filterUsers() {
    const { users, filter } = this.state;
    return users.filter(user => {
      const fullName = `${user.firstName} ${user.lastName}`.toLowerCase();
      return fullName.includes(filter.toLowerCase());
    });
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Container>
          <div className="d-flex">
            <UserFilter onChange={value => this.setState({ filter: value })} />
            <UserList users={this.filterUsers()} />
          </div>
        </Container>
      </div>
    );
  }
}

export default App;
