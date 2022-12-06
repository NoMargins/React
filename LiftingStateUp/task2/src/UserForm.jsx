import React from 'react';

class UserForm extends React.Component {
	render() {
		return (
			<form className='user-form'>
				<input
					type='text'
					name='firstName'
					className='user-form__input'
					value={this.props.userData.firstName}
					onChange={this.props.handleInput}
				/>
				<input
					type='text'
					name='lastName'
					className='user-form__input'
					value={this.props.userData.lastName}
					onChange={this.props.handleInput}
				/>
			</form>
		);
	}
}

export default UserForm;
