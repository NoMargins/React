import React, { useEffect, useState } from 'react';
import './styles.scss';

const Dimensions = () => {
	const [dimensions, setDimensions] = useState({
		width: null,
		height: null,
	});

	useEffect(() => {
		const { innerHeight, innerWidth } = window;
		setDimensions({
			width: innerWidth,
			heigth: innerHeight,
		});

		const onWindowSizeChange = (e) => {
			const { innerWidth, innerHeight } = e.target;
			setDimensions({
				width: innerWidth,
				heigth: innerHeight,
			});
		};

		window.addEventListener('resize', onWindowSizeChange);

		return () => window.removeEventListener('resize', onWindowSizeChange);
	}, []);

	return (
		<div className='dimensions'>
			{dimensions.width}px - {dimensions.heigth}px
		</div>
	);
};

export default Dimensions;
