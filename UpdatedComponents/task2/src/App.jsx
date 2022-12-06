import React from 'react';
import Dialog from './Dialog.jsx';
import './styles.scss';

class App extends React.Component {
	state = {
		isOpen: false,
	};

	handleClick = () => {
		this.setState({
			isOpen: !this.state.isOpen,
		});
	};

	closeWindow = (e) => {
		e.preventDefault();
		this.setState({
			isOpen: false,
		});
	};

	render() {
		return (
			<div className='app'>
				<button className='btn' onClick={this.handleClick}>
					Show dialog
				</button>
				{this.state.isOpen && (
					<Dialog title='Recommendation' onClick={this.closeWindow}>
						<p>
							Use immutable array methods to work with data. It will help to
							avoid bugs
						</p>
					</Dialog>
				)}
			</div>
		);
	}
}

export default App;
