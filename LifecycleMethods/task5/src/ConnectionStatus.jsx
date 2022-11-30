import React from 'react';
import './styles.scss';

class ConnectionStatus extends React.Component {
	state = {
		status: 'online',
	};

	offlineFunc = () => {
		this.setState({
			status: 'offline',
		});
		document.querySelector('.status').classList.add('status_offline');
	};

	onlineFunc = () => {
		this.setState({
			status: 'online',
		});
		document.querySelector('.status').classList.remove('status_offline');
	};

	componentDidMount() {
		window.addEventListener('offline', this.offlineFunc);
		window.addEventListener('online', this.onlineFunc);
	}

	componentWillUnmount() {
		window.removeEventListener('offline', this.offlineFunc);
		window.removeEventListener('online', this.onlineFunc);
	}

	render() {
		return <div className='status'>{this.state.status}</div>;
	}
}

export default ConnectionStatus;
