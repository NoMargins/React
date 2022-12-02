import React from 'react';
import './styles.scss';

class Search extends React.Component {
	state = {
		value: '',
	};

	handleValue = (event) => {
		this.setState({
			value: event.target.value,
		});
	};

	handleSubmit = (e) => {
		e.preventDefault();
		alert(`Search text: ${this.state.value}`);
	};

	render() {
		return (
			<form class='search'>
				<input
					type='text'
					className='search__input'
					value={this.state.value}
					onChange={this.handleValue}
				/>
				<button className='search__button' onClick={this.handleSubmit}>
					Search
				</button>
			</form>
		);
	}
}

export default Search;
