import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';

class Expand extends React.Component {
	render() {
		const { title, children, onClick, isVisible } = this.props;
		const icon = isVisible === false ? faChevronUp : faChevronDown;

		return (
			<div className='expand border'>
				<div className='expand__header'>
					<span className='expand__title'>{title}</span>
					<button className='expand__toggle-btn' onClick={onClick}>
						<FontAwesomeIcon icon={icon} />
					</button>
				</div>
				<div className='expand__content'>{children}</div>
			</div>
		);
	}
}

export default Expand;
