import React, { useState, useEffect } from 'react';

const ProductDetails = ({ id }) => {
	const [details, setDetails] = useState({});
	useEffect(() => {
		fetch(`https://fakestoreapi.com/products/${id}`)
			.then((res) => res.json())
			.then((data) => {
				setDetails({ ...data });
			});
	}, []);

	return <div className="main-page"></div>;
};

export default ProductDetails;
