import React, { Component } from 'react'
import PropTypes from 'prop-types'
export class ProductTable extends Component {
    
    render() {
        const {products} = this.props
        const productList = products.map(product => {
            return (
                <tr key={product.id}>
                    <td> {product.name} </td>
                    <td> {product.price} </td>
                    <td> {product.category}</td>
                </tr>
            )
        })
        return (
            
              <tbody>
                  {productList}
              </tbody>   
            
           
        )
    }
}

export default ProductTable

