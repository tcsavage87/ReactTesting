import React from 'react';
// Import product data to be passed as object in context
import { storeProducts, detailProduct } from './data';

// Use of context API to handle state for all components
// Context comes with two components: Provider, Consumer
	// Provider - supplies info for entire application
	// Consumer - accessed when using info from provider
// Within Component return ProductContext.Provider component
	// Also return all props.children passed to it

// Provider must sit on top of Application

const ProductContext = React.createContext();

// Whatever is passed into Provider as value parameter will be passed down as context

class ProductProvider extends React.Component {
	// Import data/state is created as a reference to original data, and changing it will change original data
		// Must initialize state to empty array, and later set to product values

	state = {
		products: [],
		detailProduct: detailProduct
	}

	componentDidMount() {
		this.setProducts();
	}

	setProducts = () => {
		let tempProducts = [];
		storeProducts.forEach(product => {
		// destructuring fixes reference issue
			// Pull each object item out as variable, and push into new array
			const singleItem = {...item};
			tempProducts = [...tempProducts, singleItem];
		});
		this.setState({ products: tempProducts });
	}
	
	handleDetail = () => {
		console.log('hello from detail');
	}

	addToCart = () => {
		console.log('hello from addToCart');
	}

	render() {
		return (
			<ProductContext.Provider value={{
				products: this.state.products,
				detailProduct: this.state.detailProduct,
				handleDetail: this.handleDetail,
				addToCart: this.addToCart
			}}>
				{this.props.children}
			</ProductContext.Provider>
		);
	}
};

// Create variable for Consumer component

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };