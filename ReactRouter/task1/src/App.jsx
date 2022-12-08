import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Contacts from './Contacts.jsx';
import Products from './Products.jsx';
import Home from './Home.jsx';
import PageNotFound from './PageNotFound.jsx';
import './styles.scss';

const App = () => {
	return (
		<div className='page'>
			<BrowserRouter>
				<Switch>
					<Route exact path='/'>
						<Home />
					</Route>
					<Route exact path='/products'>
						<Products />
					</Route>
					<Route exact path='/contacts'>
						<Contacts />
					</Route>
					<Route path='*'>
						<PageNotFound />
					</Route>
				</Switch>
			</BrowserRouter>
		</div>
	);
};

export default App;
