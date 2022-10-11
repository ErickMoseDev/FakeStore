import React, { useEffect, useState } from 'react';
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import ProductCard from './components/ProductCard';
import ProductDetails from './components/ProductDetails';

const App = () => {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		fetch('https://fakestoreapi.com/products')
			.then((response) => response.json())
			.then((data) => {
				setProducts(() => [...data]);
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);

	return (
		<div>
			<Routes>
				<Route
					path="/"
					element={
						<div>
							<div className="page-title">
								<h1>FAKE STORE</h1>
							</div>
							<div className="main-container">
								<ProductCard products={products} />
							</div>
						</div>
					}
				/>

				<Route path="/details/:id" element={<ProductDetails />} />
			</Routes>
		</div>
	);
};

export default App;
