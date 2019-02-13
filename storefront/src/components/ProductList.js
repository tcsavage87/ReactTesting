import React from 'react';
import Product from './Product';
import Title from './Title';
import { ProductConsumer } from '../context';

class ProductList extends React.Component {
	
// Inline arrow function within Consumer component returns whatever was passed to it in context

	render() {
		return (
			<React.Fragment>
				<div className="py-5">
					<div className="container">
						<Title name="our" title="products" />
						<div className="row">
							<ProductConsumer>
								{value => {
									return value.products.map(product => {
										return <Product key={product.id} product={product}/>;
										});
									}}
							</ProductConsumer>
						</div>
					</div>
				</div>
			</React.Fragment>
			
			
		);
	}
};

export default ProductList;