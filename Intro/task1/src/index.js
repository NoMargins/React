const rootEl = document.querySelector('#root');
const newElem = React.createElement(
	'div',
	{ className: 'greeting' },
	'Hello, React!'
);

ReactDOM.render(newElem, rootEl);
