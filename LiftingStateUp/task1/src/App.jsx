import React from 'react';
import './styles.scss';
import UserMenu from './UserMenu.jsx';
import UserProfile from './UserProfile.jsx';

class App extends React.Component {
	state = {
		userData: {},
	};

	componentDidMount() {
		this.fetchUser(this.props.userId);
	}

	fetchUser = (userId) => {
		fetch(`https://api.github.com/users/${userId}`)
			.then((response) => response.json())
			.then((userData) =>
				this.setState({
					userData,
				})
			);
	};

	render() {
		return (
			<div className='page'>
				<header className='header'>
					<UserMenu userData={this.state.userData} />
				</header>
				<UserProfile userData={this.state.userData} />
			</div>
		);
	}
}

export default App;
