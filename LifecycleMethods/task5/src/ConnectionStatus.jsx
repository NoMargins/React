import React from 'react';
import './styles.scss';

class ConnectionStatus extends React.Component {
	state = {
		status: 'online',
	};

	offlineFunc = () => {
		if (window.onoffline) {
			this.setState({
				status: 'offline',
			});
		document.querySelector('status').classList.add('status_offline');
		}
	};
    
	componentDidMount() {
		window.addEventListener('offline', this.offlineFunc);
	}

	componentWillUnmount() {
		window.removeEventListener('offline', this.offlineFunc);
		document.querySelector('status').classList.remove('status_offline');
	}

	render() {
		return <div className='status'>{this.state.status}</div>;
	}
}

export default ConnectionStatus;
