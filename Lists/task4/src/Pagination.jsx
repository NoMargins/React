import React from 'react';

const Pagination = (props) => {
	return (
		<div className='pagination'>
			<button className='btn previous'>
				{props.currentPage > 1 ? '←' : ''}
			</button>
			<span className='pagination__page'>{props.currentPage}</span>
			<button className='btn next'>
				{props.currentPage < props.lastPage ? '→' : ''}
			</button>
		</div>
	);
};

export default Pagination;
