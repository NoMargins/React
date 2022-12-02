import React from 'react';
import UsersList from './UsersList.jsx';
import users from './users.js';

class App extends React.Component {
	render() {
		return <UsersList users={users} />;
	}
}

export default App;
