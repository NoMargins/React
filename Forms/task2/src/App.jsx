import React from 'react';
import UserForm from './UserForm.jsx';
import './styles.scss';

const App = () => {
	const createUser = (userData) => {
		console.log({ ...userData });
	};

	return <UserForm onSubmit={createUser} />;
};

export default App;
