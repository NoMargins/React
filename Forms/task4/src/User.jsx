import React from 'react';

const User = ({}) => {
	return (
		<div>
			<div class='filter'>
				<span class='filter__count'>5</span>
				<input type='text' class='filter__input' value='a' />
			</div>
			<ul class='users'>
				<li class='user'>
					<span class='user__name'>Tad</span>
					<span class='user__age'>18</span>
				</li>
				<li class='user'>
					<span class='user__name'>Anna</span>
					<span class='user__age'>45</span>
				</li>
			</ul>
		</div>
	);
};

export default User;
