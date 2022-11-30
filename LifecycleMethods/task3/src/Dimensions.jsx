import React from 'react';
import './styles.scss';

class Dimensions extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			width: window.innerWidth,
			heigth: window.innerHeight,
		};

		document.title = `${this.state.width} x ${this.state.heigth}`;
	}

	onWindowSizeChange = (e) => {
		const { innerWidth, innerHeight } = e.target;
		this.size = this.setState({
			width: innerWidth,
			heigth: innerHeight,
		});

		document.title = `${this.state.width} x ${this.state.heigth}`;
	};

	componentDidMount() {
		window.addEventListener('resize', this.onWindowSizeChange);
	}

	componentWillUnmount() {
		window.removeEventListener('resize', this.onWindowSizeChange);
	}

	render() {
		return (
			<div className='dimensions'>
				{this.state.width}px - {this.state.heigth}px
			</div>
		);
	}
}

export default Dimensions;
