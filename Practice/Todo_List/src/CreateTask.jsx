import React from 'react';
import PropTypes from 'prop-types';

class CreateTask extends React.Component {
	state = {
		value: '',
	};

	handleInput = (e) => {
		this.setState({
			value: e.target.value,
		});
	};

	render() {
		return (
			<div className='create-task'>
				<input
					className='create-task__input'
					type='text'
					value={this.state.value}
					onChange={this.handleInput}
				/>
				<button
					className='btn create-task__btn'
					onClick={() => this.props.onClick(this.state.value)}
				>
					Create
				</button>
			</div>
		);
	}
}

CreateTask.propTypes = {
	onClick: PropTypes.func,
};

export default CreateTask;
