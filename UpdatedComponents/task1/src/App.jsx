import React from 'react';
import Numbers from './Numbers.jsx';
import EvenNumbers from './EvenNumbers.jsx';
import OddNumbers from './OddNumbers.jsx';
import './styles.scss';

class App extends React.Component {
	state = {
		number: 0,
	};

	componentDidMount() {
		this.interval = setInterval(
			() =>
				this.setState({
					number: this.state.number + 1,
				}),
			1000
		);
	}

	componentWillUnmount() {
		clearInterval(this.interval);
	}

	render() {
		return (
			<div className='app'>
				<Numbers title='All numbers' number={this.state.number} />
				<EvenNumbers number={this.state.number} />
				<OddNumbers number={this.state.number} />
			</div>
		);
	}
}

export default App;
