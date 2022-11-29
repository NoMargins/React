import React from 'react';
import Pagination from './Pagination.jsx';
import User from './User.jsx';
import './styles.scss';

class UsersList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			firstPage: 1,
			userList: [],
		};
	}
	render() {
		return (
			<div>
				<Pagination userList={this.props.userList} />
				<ul className='user'>
					{this.props.userList.map((el) => (
						<User key={el.id} {...el} />
					))}
				</ul>
			</div>
		);
	}
}

export default UsersList;
