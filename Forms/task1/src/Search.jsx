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

	search = (e) => {
		e.preventDefault();
		alert(`Search text: ${this.state.value}`);
	};

	render() {
		return (
			<form className='search' onSubmit={this.search}>
				<input
					type='text'
					className='search__input'
					value={this.state.value}
					onChange={this.handleValue}
				/>
				<button className='search__button' type='submit'>
					Search
				</button>
			</form>
		);
	}
}

export default Search;
