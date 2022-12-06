import React from 'react';
import ProductsList from './ProductsList.jsx';

class CartTitle extends React.Component {
	render() {
		return (
			<>
				<div className='cart-title'>
					{this.props.userData.firstName}, you added{' '}
					{this.props.cartItems.length} items
				</div>
				<div className='products'>
					{this.props.cartItems.map((el) => (
						<ProductsList key={el.id} cartItems={el} />
					))}
					<div className='products__total'>
						Total: $
						{this.props.cartItems.reduce((acc, el) => acc + el.price, 0)}
					</div>
				</div>
			</>
		);
	}
}

export default CartTitle;
