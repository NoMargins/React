import React from 'react';
import UsersList from './UsersList';
import users from './users.js';

const App = () => {
	return <UsersList userList={users} />;
};

export default App;
