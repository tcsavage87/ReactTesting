import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ProductConsumer } from '../context';

// Link creates an anchor wrapper around image directing to component with matching path, as set by Route

class Product extends React.Component {
	render() {
		// Destructure product properties
		const {id, title, img, price, inCart} = this.props.product;
		return (
			<ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
				<div className="card">
					<div className="img-container p-5" onClick={console.log('Click')}>
						<Link to="/details">
							<img src={img} alt={title} className="card-img-top"/>
						</Link>
					</div>
				</div>
			</ProductWrapper>
		);
	}
}

// Styled components create an element of type styled.type with styles within template strings
	// Use const as JSX

const ProductWrapper = styled.div`
	
`;

export default Product;