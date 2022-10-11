import React from 'react';
import './card.css';
const ProductCard = ({ products }) => {
	return products.map((product) => (
		<div className="container" key={product.id}>
			<img src={product.image} alt="Product Image" />
			<h4>{product.title}</h4>
		</div>
	));
};

export default ProductCard;
