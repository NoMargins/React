import React from 'react';
import Task from './Task.jsx';
import CreateTask from './CreateTask.jsx';
import {
	createTask,
	fetchTasksList,
	updateTask,
	deleteTask,
} from './tasksGateway.js';

class TasksList extends React.Component {
	state = {
		tasks: [],
	};

	componentDidMount() {
		this.fetchTasks();
	}

	fetchTasks = () => {
		fetchTasksList().then((tasksList) =>
			this.setState({
				tasks: tasksList,
			})
		);
	};

	createTaskFunct = (text) => {
		const newTask = {
			text,
			done: false,
		};

		createTask(newTask).then(() => this.fetchTasks());
		console.log(newTask);
	};

	handleCheckbox = (id) => {
		const { done, text } = this.state.tasks.find((task) => task.id === id);
		const updatedTask = {
			text,
			done: !done,
		};

		updateTask(id, updatedTask).then(() => this.fetchTasks());
	};

	deleteTask = (id) => {
		deleteTask(id).then(() => this.fetchTasks());
	};

	render() {
		let sortedList = [];
		if (this.state.tasks) {
			sortedList = this.state.tasks.sort((a, b) => a.done - b.done);
		}
		return (
			<>
				<CreateTask onClick={this.createTaskFunct} />
				<ul className='list'>
					{sortedList.length > 0 &&
						sortedList.map((task) => (
							<Task
								key={task.id}
								{...task}
								handleCheckbox={this.handleCheckbox}
								deleteTask={this.deleteTask}
							/>
						))}
				</ul>
			</>
		);
	}
}

export default TasksList;
