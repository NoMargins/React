import React from 'react';
import Users from './Users.jsx';
import Home from './Home.jsx';
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';
import './styles.scss';

const App = () => {
	return (
		<div className='page'>
			<BrowserRouter>
				<ul className='navigation'>
					<li className='navigation__item'>
						<Link to='/'>Home</Link>
					</li>
					<li className='navigation__item'>
						<Link to='/users'>Users</Link>
					</li>
				</ul>
				<Switch>
					<Route path='/users' component={Users} />
					<Route exact path='/'>
						<Home />
					</Route>
				</Switch>
			</BrowserRouter>
		</div>
	);
};

export default App;
