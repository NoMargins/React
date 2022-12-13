import React from 'react';
import User from './User.jsx';
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';
import './styles.scss';

const App = () => {
	return (
		<div className='page'>
			<BrowserRouter>
				<div className='page__content'>
					<h1>Users</h1>
					<ul className='navigation'>
						<li className='navigation__item'></li>
						<li className='navigation__item'>
							<Link to='/users/github'>Github</Link>
						</li>
						<li className='navigation__item'>
							<Link to='/users/facebook'>Facebook</Link>
						</li>
					</ul>
					<Switch>
						<Route exact path='/'>
							<span>Select a user please</span>
						</Route>
						<Route path='/users/:userId'>
							<User />
						</Route>
					</Switch>
				</div>
			</BrowserRouter>
		</div>
	);
};

export default App;
