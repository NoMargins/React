import React from 'react';
import UserForm from './UserForm.jsx';
import "./styles.scss"

const App = () => {

	 const createUser = (user) => {
	console.log(user); 
	}

	return <UserForm onSubmit={createUser}/>
	
}

export default App;
