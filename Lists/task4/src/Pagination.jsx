import React from 'react';

// const pageOperations = {
//      currentPage: 1,
//     totalItems: props.userList.length,
//     itemsPerPage: 3,
//      lastPage: Math.ceil(totalItems / itemsPerPage);
// }

const Pagination = (props) => {
	let currentPage = 1;
	const totalItems = props.userList.length;
	const itemsPerPage = 3;
	const lastPage = Math.ceil(totalItems / itemsPerPage);

	const goPrev = () => {
		if (currentPage > 1) {
			return (currentPage = currentPage - 1);
		} else {
			currentPage = 1;
		}
	};

	const goNext = () => {
		if (currentPage < lastPage) {
			return (currentPage = currentPage + 1);
		} else {
			return currentPage;
		}
	};

	return (
		<div className='pagination'>
			<button className='btn' onClick={goPrev}>
				{currentPage > 1 ? '←' : ''}
			</button>
			<span className='pagination__page'>
				{currentPage} / {lastPage}
			</span>
			<button className='btn' onClick={goNext}>
				{currentPage < lastPage ? '→' : ''}
			</button>
		</div>
	);
};

export default Pagination;
