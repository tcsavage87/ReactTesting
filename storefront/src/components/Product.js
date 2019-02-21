import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ProductConsumer } from '../context';
//PropTypes built into react
import PropTypes from 'prop-types';

// Link creates an anchor wrapper around image directing to component with matching path, as set by Route

class Product extends React.Component {
	render() {
		// Destructure product properties
		const {id, title, img, price, inCart} = this.props.product;
		return (
			<ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
				<div className="card">
					<div className="img-container p-5" onClick={() => console.log('Click')}>
						<Link to="/details">
							<img 
								src={img} 
								alt={title} 
								className="card-img-top"
							/>
						</Link>
						<button 
							className="cart-btn" 
							disabled={inCart ? true : false} 
							onClick={() => console.log('added to cart')}
						>
						{inCart ? (<p className="text-capitalize mb-0" disabled>In Cart</p>) : (<i className="fas fa-cart-plus" />)}
						</button>
					</div>
					<div className="card-footer d-flex justify-content-between">
						<p className="align-self-center mb-0">{title}</p>
						<h5 className="text-blue font-italic mb-0">
							<span className="mr-1">${price}</span>
						</h5>
					</div>
				</div>
			</ProductWrapper>
		);
	}
}

// defin propTypes to ensure data coming in is correct type
	// If data is incorrect, will return errors

Product.propTypes = {
	product: PropTypes.shape({
		id: PropTypes.number,
		img: PropTypes.string,
		title: PropTypes.string,
		price: PropTypes.number,
		inCart: PropTypes.bool
	}).isRequired
};

// Styled components create an element of type styled.type with styles within template strings
	// Use const as JSX

const ProductWrapper = styled.div`
	.card {
		border-color: transparent;
	}
	.card-footer {
		background: transparent;
		border-top: transparent;
	}
	&:hover {
		.card {
			border: 0.05rem solid rgba(0,0,0,0.2);
			box-shadow: 2px 2px 5px 0px rgba(0,0,0,0.2);
		}
		.card-footer {
			background: rgba(247,247,247);
		}
	}
	.img-container {
		position: relative;
		overflow: hidden;
	}

	.card-img-top {
		transition: all 1s linear;
	}
	.img-container:hover .card-img-top {
		transform: scale(1.2);
	}

	.cart-btn {
		position: absolute;
		bottom: 0;
		right: 0;
		padding: .25rem .4rem;
		background: var(--lightBlue);
		border: none;
		color: var(--mainWhite);
		font-size: 1.4rem;
		border-radius: .5rem 0 0 0;
		transform: translate(100%, 100%);
		transition: all .25s linear;
	}

	.img-container:hover .cart-btn {
		transform: translate(0,0);
	}

	.cart-btn:hover {
		color: var(--mainBlue);
		cursor: pointer;
	}
`;

export default Product;