import React from 'react';
import User from './User.jsx';

class Pagination extends React.Component {
	constructor(props) {
		super(props);
		const currentPage = 1;
		const totalItems = this.props.userList.length;
		const itemsPerPage = this.props.itemsPerPage;
		const lastPage = Math.ceil(totalItems / itemsPerPage);

		this.state = {
			currentPage,
			itemsPerPage,
			totalItems,
			lastPage,
			sliceFrom: 0,
			sliceTo: Number(this.props.itemsPerPage),
		};
	}

	goPrev = () => {
		if (this.state.currentPage > 1) {
			this.setState({
				currentPage: this.state.currentPage - 1,
				sliceFrom: (this.state.currentPage - 2) * this.state.itemsPerPage,
				sliceTo: (this.state.currentPage - 1) * this.state.itemsPerPage,
			});
		} else {
			this.setState({
				currentPage: 1,
				sliceFrom: 0,
				sliceTo: this.state.sliceTo,
			});
		}
	};

	goNext = () => {
		if (this.state.currentPage < this.state.lastPage) {
			this.setState({
				currentPage: this.state.currentPage + 1,
				sliceFrom: this.state.currentPage * this.state.itemsPerPage,
				sliceTo: (this.state.currentPage + 1) * this.state.itemsPerPage,
			});
		} else {
			this.setState({
				currentPage: this.state.currentPage,
				sliceFrom: (this.state.currentPage - 1) * this.state.itemsPerPage,
				sliceTo: this.state.currentPage * this.state.itemsPerPage,
			});
		}
	};

	render() {
		console.log(
			this.state.currentPage,
			this.state.sliceFrom,
			this.state.sliceTo
		);
		return (
			<div className='pagination'>
				<button className='btn' onClick={this.goPrev}>
					{this.state.currentPage > 1 ? '←' : ''}
				</button>
				<span className='pagination__page'>{this.state.currentPage}</span>
				<button className='btn' onClick={this.goNext}>
					{this.state.currentPage < this.state.lastPage ? '→' : ''}
				</button>
				<ul className='user'>
					{this.props.userList
						.slice()
						.slice(this.state.sliceFrom, this.state.sliceTo)
						.map((el) => (
							<User key={el.id} {...el} />
						))}
				</ul>
			</div>
		);
	}
}

export default Pagination;
