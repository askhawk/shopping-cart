import React from 'react';
import data from '../data.json';
import Products from '../components/products/Products';
import './app.css';
//
class App extends React.Component {

  constructor() {
    super();
    this.state = {
      products: data.products,
      size: "",
      sort: "",
    };
}

  render() {
    return (
      <div className='grid-container'>
      <header className='App-header'>
        <a href="/">React Shopping Cart</a>
      </header>
      <main>
          <div className="content">
            <div className="main">
              <Products products={this.props.products}></Products>
            </div>
            <div className="sidebar">
              Cart Items
            </div>
        </div>
      </main>
      <footer>
        Copyright © 2021 Coding With Asknet.
      </footer>
    </div>
    )
  }
}

/* function App() {
  return (
    <div className='grid-container'>
      <header className='App-header'>
        <a href="/">React Shopping Cart</a>
      </header>
      <main>
        Product List
      </main>
      <footer>
        Copyright © 2021 Coding With Asknet.
      </footer>
    </div>
  );
} */

export default App;
