import React from 'react';
import './styles.scss';
import TasksList from './TasksList.jsx';

const App = () => {
	return (
		<>
			<h1 className='title'>Todo List</h1>
			<main className='todo-list'>
				<TasksList />
			</main>
		</>
	);
};

export default App;
