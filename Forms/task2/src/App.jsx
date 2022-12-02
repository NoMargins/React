import React from 'react';
import UserForm from './UserForm.jsx';
import "./styles.scss"

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
		name: "",
		student: "",
		occupation: "",
		about: ""
	}
	}

	handleInput = event => {
		const {name, value, checked, type} = event.target;
		const val = type === "checkbox" ? checked : value;
		this.setState({
			[name]: val,
		})
	}

	 createUser = (event) => {
		event.preventDefault();
		console.log(this.state);
	}

	render() {
	return <UserForm value={this.state} onChange={this.handleInput} onSubmit={this.createUser}/>
	}

}

export default App;
