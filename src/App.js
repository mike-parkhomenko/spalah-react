import React, { Component } from 'react';
import {SearchBar} from './components/SearchBar';
import {ToolBar} from './components/ToolBar';
import {UserList} from './components/UserList';
import {users} from "./data";

 class App extends Component {
	 state = {
		 users: users
	 };

	 filterUsers = (str) => {
		const filteredUsers = this.state.users.filter( (user) => {
			return user.name.includes(str);
		});
		this.setState({
			users: filteredUsers
		});
	 };

	 handleSearhChenge = (e) => {
		 console.log('value:' + target.value);
		 this.state.users;
		 this.filterUsers(e.target.value);
	 };

  render() {
    return (
      <div className="App">
        <SearchBar onSearchChange={this.handleSearhChenge} />
		<ToolBar />
		<UserList users={this.state.users}/>
      </div>
    );
  }
}

export default App;
