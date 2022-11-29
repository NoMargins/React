import React from 'react';
import Pagination from './Pagination.jsx';
import User from './User.jsx';
import './styles.scss';

class UsersList extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div>
				<Pagination userList={this.props.userList} itemsPerPage='2' />
				
			</div>
		);
	}
}

export default UsersList;
