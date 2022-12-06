import React from 'react';

class ProductsList extends React.Component {
	render() {
		return (
			<div className='products'>
				<ul className='products__list'>
					<li className='products__list-item'>
						<span className='products__item-name'>
							{this.props.cartItems.name}
						</span>
						<span className='products__item-price'>
							${this.props.cartItems.price}
						</span>
					</li>
				</ul>
			</div>
		);
	}
}

export default ProductsList;
