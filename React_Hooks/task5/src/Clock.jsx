import React, { useState, useEffect } from 'react';

const Clock = ({ location, offset }) => {
	const [clockData, setClockData] = useState(new Date());

	useEffect(() => {
		const interval = setInterval(() => {
			setClockData(new Date().setHours(new Date().getUTCHours() + offset));
		}, 1000);

		return () => clearInterval(interval);
	}, []);

	return (
		<div className='clock'>
			<div className='clock__location'>{location}</div>
			<div className='clock__time'>
				{new Date(clockData).toLocaleTimeString('en-US')}
			</div>
		</div>
	);
};

export default Clock;
