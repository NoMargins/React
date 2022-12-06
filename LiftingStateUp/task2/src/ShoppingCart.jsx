import React from 'react';
import CartTitle from './CartTitle.jsx';

class ShoppingCart extends React.Component {
	state = {
		cartItems: [
			{
				id: 2,
				name: 'iPadPro',
				price: 799,
			},
			{
				id: 3,
				name: 'iPhone',
				price: 699,
			},
		],
	};

	render() {
		if (!this.props.userData) {
			return null;
		}
		return (
			<div className='column'>
				<CartTitle
					userData={this.props.userData}
					cartItems={this.state.cartItems}
				/>
			</div>
		);
	}
}

export default ShoppingCart;
