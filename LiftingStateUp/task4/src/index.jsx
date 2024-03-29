import React from 'react';
import ReactDOM from 'react-dom';
import FilterableProductTable from './FilterableProductTable.jsx';

const rootElem = document.querySelector('#root');

const PRODUCTS = [
	{
		category: 'Sporting Goods',
		price: '$49.99',
		stocked: true,
		name: 'Football',
	},
	{
		category: 'Sporting Goods',
		price: '$9.99',
		stocked: true,
		name: 'Baseball',
	},
	{
		category: 'Sporting Goods',
		price: '$29.99',
		stocked: false,
		name: 'Basketball',
	},
	{
		category: 'Electronics',
		price: '$99.99',
		stocked: true,
		name: 'iPod Touch',
	},
	{
		category: 'Electronics',
		price: '$399.99',
		stocked: false,
		name: 'iPhone 5',
	},
];

ReactDOM.render(<FilterableProductTable products={PRODUCTS} />, rootElem);
