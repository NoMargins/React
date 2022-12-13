import React from 'react';

class User extends React.Component {
	state = {
		userData: {},
	};

	componentDidMount() {
		this.fetchUserData();
	}

	componentDidUpdate(prevProps) {
		const prevUser = prevProps.match.params.userID;
		const currentUser = this.props.match.params.userID;

		if (prevUser !== currentUser) this.fetchUserData();
	}

	fetchUserData() {
		fetch(`https://api.github.com/users/${this.props.match.params.userID}`)
			.then((res) => res.json())
			.then((userData) =>
				this.setState({
					userData,
				})
			);
	}

	render() {
		if (!this.state.userData) return null;
		return (
			<div className='user'>
				<img
					alt='User Avatar'
					src={this.state.userData.avatar_url}
					className='user__avatar'
				/>
				<div className='user__info'>
					<span className='user__name'>{this.state.userData.name}</span>
					<span className='user__location'>{this.state.userData.location}</span>
				</div>
			</div>
		);
	}
}

export default User;
