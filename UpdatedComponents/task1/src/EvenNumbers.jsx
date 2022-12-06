import React from 'react';
import Numbers from './Numbers.jsx';

class EvenNumbers extends React.Component {
	shouldComponentUpdate(nextProps) {
		return nextProps.number % 2 === 0;
	}

	render() {
		return <Numbers title='Even number' number={this.props.number} />;
	}
}

export default EvenNumbers;
