import React from 'react';
import './styles.scss';
import ShoppingCart from './ShoppingCart.jsx';
import Profile from './Profile.jsx';

class App extends React.Component {
	state = {
		userData: {
			firstName: 'user',
			lastName: 'userln',
		},
	};

	handleInput = (event) => {
		const { name, value } = event.target;
		this.setState({
			userData: {
				...this.state.userData,
				[name]: value,
			},
		});
	};

	render() {
		return (
			<div className='page'>
				<h1 className='title'>
					Hello, {this.state.userData.firstName} {this.state.userData.lastName}
				</h1>
				<main className='content'>
					<ShoppingCart userData={this.state.userData} />
					<Profile
						userData={this.state.userData}
						handleInput={this.handleInput}
					/>
				</main>
			</div>
		);
	}
}

export default App;
