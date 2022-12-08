import React from 'react';
import Expand from './Expand.jsx';
import './styles.scss';

class App extends React.Component {
	state = {
		isVisiable: false,
	};

	showContent = () => {
		this.setState({
			isVisiable: !this.state.isVisiable,
		});
	};

	render() {
		return (
			<div className='app'>
				<Expand
					title='Some title'
					onClick={this.showContent}
					isVisiable={this.state.isVisiable}
				>
					{this.state.isVisiable && (
						<p>
							Hooks are a new addition in React 16.8. They let you use state and
							other React features without writing a class.
						</p>
					)}
				</Expand>
			</div>
		);
	}
}

export default App;
