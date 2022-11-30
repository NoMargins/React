import React from 'react';
import './styles.scss';

class Life extends React.Component {
	constructor(props) {
		super(props);
		console.log('constructor: good place to create state');
	}

	componentDidMount() {
		console.log('componentDidMount: API calls, subscriptions');
	}

	shouldComponentUpdate(nextProps, nextState) {
		console.log(
			'shouldComponentUpdate(nextProps, nextState): decide to render or not to render'
		);
	}

	componentDidUpdate() {
		console.log(
			'componentDidUpdate(prevProps, prevState): some updates based on new props'
		);
	}

	componentWillUnmount() {
		console.log(
			'componentWillUnmount(): clean before DOM related to component will be removed'
		);
	}

	render() {
		console.log('return React element to build DOM');
		return <div>I'm learning Lifecycle methods of React</div>;
	}
}

export default Life;
