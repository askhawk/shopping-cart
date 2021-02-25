import React from "react";
import { Provider } from "react-redux";
import store from "../redux/store/store";
// import data from "../data.json";
import Products from "../components/products/Products";
import Filter from "../components/filter/Filter";
import Cart from "../components/cart/Cart";
import "./app.css";
//
class App extends React.Component {
	/* constructor() {
		super();
		this.state = {
			//products: data.products,
			cartItems: localStorage.getItem("cartItems")
				? JSON.parse(localStorage.getItem("cartItems"))
				: [],
			sort: "",
			size: "",
		};
	}
 */
	///
	/* 	removeFromCart = (product) => {
		const cartItems = this.state.cartItems.slice();
		this.setState({
			cartItems: cartItems.filter((x) => x._id !== product._id),
		});
		localStorage.setItem(
			"cartItems",
			JSON.stringify(cartItems.filter((x) => x._id !== product._id))
		);
	}; */
	///
	/* 	createOrder = (order) => {
		alert("Need to save order for " + order.name);
	}; */
	///
	/* 	addToCart = (product) => {
		const cartItems = this.state.cartItems.slice();
		let alreadyInCart = false;
		cartItems.forEach((item) => {
			if (item._id === product._id) {
				item.count++;
				alreadyInCart = true;
			}
		});
		if (!alreadyInCart) {
			cartItems.push({ ...product, count: 1 });
		}
		this.setState({ cartItems });
		localStorage.setItem("cartItems", JSON.stringify(cartItems));
	}; */
	/// Before implementing Redux functionality
	/* 	sortProducts = (event) => {
		const sort = event.target.value;
		console.log(sort);
		console.log(this.setState);

		this.setState((state) => ({
			sort: sort,
			products: this.state.products
				.slice()

				.sort((a, b) =>
					sort === "lowest"
						? a.price > b.price
							? 1
							: -1
						: //
						sort === "highest"
						? a.price < b.price
							? 1
							: -1
						: //

						a._id < b._id
						? 1
						: -1
				),
		}));
	}; */
	/// Before implementing Redux functionality
	/* 	filterProducts = (event) => {
		console.log(event.target.value);
		if (event.target.value === "") {
			this.setState({ size: event.target.value, products: data.products });
		} else {
			this.setState({
				size: event.target.value,
				products: data.products.filter(
					(product) => product.availableSizes.indexOf(event.target.value) >= 0
				),
			});
		}
	}; */
	///
	render() {
		return (
			<Provider store={store}>
				<div className="grid-container">
					<header className="App-header">
						<a href="/">React Shopping Cart</a>
					</header>
					<main>
						<div className="content">
							<div className="main">
								<Filter
								/* count={this.state.products.length}
									size={this.state.products.size}
									sort={this.state.products.sort}
									filterProducts={this.filterProducts}
									sortProducts={this.sortProducts} */
								/>
								<Products
								/* products={this.state.products}
									addToCart={this.addToCart} */
								></Products>
							</div>
							<div className="sidebar">
								<Cart
								/* cartItems={this.state.cartItems}
									removeFromCart={this.removeFromCart}
									createOrder={this.createOrder} */
								/>
							</div>
						</div>
					</main>
					<footer>Copyright © 2021 Coding With Asknet.</footer>
				</div>
			</Provider>
		);
	}
}

export default App;
