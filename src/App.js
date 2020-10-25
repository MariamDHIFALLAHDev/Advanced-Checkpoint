import React, { Component } from 'react'
import ReactBootstrap from 'react-bootstrap'
import './App.css'
import PropTypes from 'prop-types'
import ProductTable from './ProductTable'
import AddProduct from './AddProduct'

class App extends Component {

  state={
    products:[
      {name:"2 Piece Set Tracksuit Women Summer Seamless Yoga Sets Gym Clothes Sport Set Fitness Clothing Workout Clothes for Woment",price:"29,65 €",category:"clothes",id:1},
      {name:"KRUPS ESSENTIAL NOIRE Bean coffee machine Professional Bean grinder coffee machine Espresso maker 2 cups Automatic cleaning Cappuccino steam nozzle YY8125FD",price:"599.99 €",category:"electronics",id:2},
      {name:"Asus ROG Strix Hero G731GV Full HD 144 Hz Gaming Laptop - (Intel i7-9750H, Nvidia GeForce RTX 2060 6 Go, 512 Go SSD PCI-E",price:"3 508,63 €",category:"electronics",id:3},
      {name:"SONGMICS Chaise Gamer Fauteuil de Bureau Racing Sport avec Support Lombaire et Coussin Noir, Gris RCG02G",price:"192,99 €",category:"electronics",id:4},
      {name:"E Tronic Edge Fanny Pack And Sport Belt: The Best Comfortable Running Belt That Fits All Phone Models And All Waist Sizes",price:"22,73 €",category:"clothes",id:5}

    ]
  }

  addProduct = (product) => {
    product.id = Math.random()
    let products = [...this.state.products, product]
    
    this.setState({
      products:products
    })

  }

  render() {
    return (
      <div >
        <h3 className="title" style={{textAlign:'center'}}>Products Table</h3>
        <table className="table" style={{width:'80%'}}>
          <thead> 
            <tr>
              <th> NAME</th>
              <th> PRICE</th>
              <th> CATEGORY</th>
            </tr>
          </thead>
          <ProductTable products={this.state.products} /> 
        </table>
        <AddProduct addProduct={this.addProduct} />
      </div>
    )
  }
 


 
};

export default App
