import React from 'react';

const UserForm = (props) => {

	const {name, student, occupation, about} = props;

	return (
		<form className='login-form' onSubmit={props.onSubmit}>
			<h1 className='form-title'>Profile</h1>
			<div className='form-control'>
				<label className='form-label' htmlFor='name'>
					Name
				</label>
				<input className='form-input' type='text' id='name' name='name' value={name} onChange={props.onChange} />
			</div>
			<div className='form-control'>
				<label className='form-label' htmlFor='student'>
					Student
				</label>
				<input className='form-input' type='checkbox' id='student' name='student'  value={student} onChange={props.onChange}/>
			</div>
			<div className='form-control'>
				<label className='form-label' id='occupation' htmlFor='occupation'>
					Occupation
				</label>
				<select name='occupation' className='form-input'  value={occupation} onChange={props.onChange}>
					<option value='london'>London</option>
					<option value='new-york'>New York</option>
					<option value='coconut'>Sidney</option>
					<option value='mango'>Berlin</option>
				</select>
			</div>
			<div className='form-control'>
				<label className='form-label' id='about' htmlFor='about'>
					About
				</label>
				<textarea name='about' className='form-input'  value={about} onChange={props.onChange}/>
			</div>
			<button className='submit-button' type='submit'>
				Submit
			</button>
		</form>
	)
	};

export default UserForm;
