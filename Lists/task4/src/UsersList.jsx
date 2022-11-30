import React from 'react';
import Pagination from './Pagination.jsx';
import User from './User.jsx';
import './styles.scss';

class UsersList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			currentPage: 1,
			itemsPerPage: this.props.itemsPerPage,
			totalItems: this.props.userList.length,
			lastPage: Math.ceil(this.props.userList.length / this.props.itemsPerPage),
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
				sliceTo: Number(this.props.itemsPerPage),
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

	componentDidMount() {
		document.querySelector('.previous').addEventListener('click', this.goPrev);
		document.querySelector('.next').addEventListener('click', this.goNext);
	}

	componentWillUnmount() {
		document
			.querySelector('.previous')
			.removeEventListener('click', this.goPrev);
		document.querySelector('.next').removeEventListener('click', this.goNext);
	}

	render() {
		return (
			<div>
				<Pagination
					currentPage={this.state.currentPage}
					lastPage={this.state.lastPage}
				/>
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

export default UsersList;
