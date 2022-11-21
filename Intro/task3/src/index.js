import React from 'react';
import './styles.css';

const ReactDOM = require('react-dom/client');

const rootElement = document.querySelector('#root');
const root = ReactDOM.createRoot(rootElement);

const newElem = (
	<div className='greeting'>
		<h1 className='greeting__title'>Hello, world!</h1>
		<p className='greeting__text'>I'm learning React</p>
	</div>
);

root.render(newElem);
