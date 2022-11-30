import React from 'react';
import Clock from './Clock.jsx';
import './styles.scss';

class App extends React.Component {
	state = {
		isVisible: true,
	};

	toggleFucntion = () => {
		this.setState({
			isVisible: !this.state.isVisible,
		});
	};

	render() {
		return (
			<>
				<>
					{this.state.isVisible && <Clock offset={+2} location='Kyiv' /> && (
							<Clock offset={0} location='London' />
						) && <Clock offset={-5} location='New York' />}
				</>
				<button className='toggle' onClick={this.toggleFucntion}>
					{this.state.isVisible ? 'Hide' : 'Show'}
				</button>
			</>
		);
	}
}

// const App = () => {
// 	return (
// 		<>
// 			{<Clock continent='Europe' city='Kyiv' />}
// 			{<Clock continent='Europe' city='London' />}
// 			{<Clock continent='America' city='New_York' />}
// 		</>
// 	);
// };

export default App;
