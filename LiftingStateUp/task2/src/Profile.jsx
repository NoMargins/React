import React from 'react';
import UserForm from './UserForm.jsx';

const Profile = ({ userData, handleInput }) => {
	if (!userData) {
		return null;
	}

	return (
		<div className='column'>
			<UserForm userData={userData} handleInput={handleInput} />
		</div>
	);
};

export default Profile;
