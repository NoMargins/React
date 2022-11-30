import React from 'react';
import Clock from './Clock.jsx';

const App = () => {
	return (
		<>
			{<Clock offset={+2} location='Kyiv' />}
			{<Clock offset={0} location='London' />}
			{<Clock offset={-5} location='New York' />}
		</>
	);
};

// const App = () => {
// 	return (
// 		<>
// 			{<Clock continent='Europe' city='Kyiv' />}
// 			{<Clock continent='Europe' city='London' />}
// 			{<Clock continent='America' city='New_York' />}
// 		</>
// 	);
// };

export default App;
