import React from 'react';
import './styles.scss';

class ConnectionStatus extends React.Component {
	state = {
		status: window.ononline ? 'online' : 'offline',
	};

	offlineFunc = (e) => {
		if (e.target.onoffline) {
			this.setState({
				status: 'offline',
			});
		}
	};

	onlineFunc = (e) => {
		if (e.target.ononline) {
			this.setState({
				status: 'online',
			});
		}
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
		return (
			<div
				className={
					this.state.status === 'offline' ? 'status status_offline' : 'status'
				}
			>
				{this.state.status}
			</div>
		);
	}
}

export default ConnectionStatus;
