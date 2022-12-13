import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import User from './User.jsx';

class Users extends React.Component {
	render() {
		const { match } = this.props;
		return (
			<div className='page__content'>
				<h1>Users</h1>
				<ul className='navigation'>
					<li className='navigation__item'>
						<Link to={`${match.url}/github`}>Github</Link>
					</li>
					<li className='navigation__item'>
						<Link to={`${match.url}/facebook`}>Facebook</Link>
					</li>
				</ul>

				<Switch>
					<Route exact path={`${match.url}`}>
						<span>Select a user please</span>
					</Route>
					<Route path={`${match.url}/:userID`} component={User}></Route>
				</Switch>
			</div>
		);
	}
}

export default Users;
