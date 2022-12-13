import React, { useState, useEffect } from 'react';
import './styles.scss';
import classNames from 'classnames';

const ConnectionStatus = () => {
	const [connectionStatus, setConnectionStatus] = useState('online');

	useEffect(() => {
		const offlineFunc = () => {
			setConnectionStatus('offline');
		};

		const onlineFunc = () => {
			setConnectionStatus('online');
		};

		window.addEventListener('offline', offlineFunc);
		window.addEventListener('online', onlineFunc);

		return () => {
			window.removeEventListener('offline', offlineFunc);
			window.removeEventListener('online', onlineFunc);
		};
	}, []);

	const style = classNames([
		'status',
		{ status_offline: connectionStatus === 'offline' },
	]);

	return <div className={style}>{connectionStatus}</div>;
};

export default ConnectionStatus;
