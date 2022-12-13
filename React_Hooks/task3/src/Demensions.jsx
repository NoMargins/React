import React, { useEffect, useState } from 'react';
import './styles.scss';

const Demensions = () => {
	const [demensions, setDemensions] = useState({
		width: null,
		height: null,
	});

	useEffect(() => {
		const { innerHeight, innerWidth } = window;
		setDemensions({
			width: innerWidth,
			heigth: innerHeight,
		});

		const onWindowSizeChange = (e) => {
			const { innerWidth, innerHeight } = e.target;
			setDemensions({
				width: innerWidth,
				heigth: innerHeight,
			});
		};

		window.addEventListener('resize', onWindowSizeChange);

		return () => window.removeEventListener('resize', onWindowSizeChange);
	}, []);

	return (
		<div className='dimensions'>
			{demensions.width}px - {demensions.heigth}px
		</div>
	);
};

export default Demensions;
