import React from 'react';
import Numbers from './Numbers.jsx';

class OddNumbers extends React.Component {
	shouldComponentUpdate(nextProps) {
		return nextProps.number % 2 != 0;
	}

	render() {
		return <Numbers title='Odd number' number={this.props.number} />;
	}
}

export default OddNumbers;
