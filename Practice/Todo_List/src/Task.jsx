import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const Task = ({ text, done, id, handleCheckbox, deleteTask }) => {
	const stylesDendengingOnCheckbox = classNames('list-item', {
		'list-item_done': done,
	});
	return (
		<li className={stylesDendengingOnCheckbox}>
			<input
				type='checkbox'
				className='list-item__checkbox'
				defaultChecked={done}
				onChange={() => handleCheckbox(id)}
			/>
			<span className='list-item__text'>{text}</span>
			<button
				className='list-item__delete-btn'
				onClick={() => deleteTask(id)}
			></button>
		</li>
	);
};

Task.propTypes = {
	text: PropTypes.string,
	done: PropTypes.bool,
	id: PropTypes.string,
	handleCheckbox: PropTypes.func,
	deleteTask: PropTypes.func,
};

export default Task;
