import React from 'react';
import User from './User.jsx';
import Filter from './Filter.jsx';
import './styles.scss';

class UsersList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			age: '',
			count: '',
			filtredArr: this.props.users.slice(),
		};
	}

	filterUsers = (e) => {
		let filtredArr;
		if (e.target.value != '') {
			filtredArr = this.props.users
				.slice()
				.filter((el) =>
					el.name.toLowerCase().includes(e.target.value.toLowerCase())
				);
			this.setState({
				count: filtredArr.length,
				filtredArr,
			});
		} else {
			this.setState({
				count: '',
				filtredArr: this.props.users.slice(),
			});
		}
	};

	render() {
		console.log(this.state.filtredArr);

		return (
			<div>
				<Filter count={this.state.count} onChange={this.filterUsers} />
				<ul className='users'>
					{this.state.filtredArr.map((user) => (
						<User key={user.id} {...user} />
					))}
				</ul>
			</div>
		);
	}
}

export default UsersList;
