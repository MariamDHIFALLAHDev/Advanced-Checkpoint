import React, { Component } from 'react'

class AddProduct extends Component {

    state = {
        
        name:'',
        price:'',
        category:'',
        id:''
        
    }
    
    handleChangeName = (e) => {
        this.setState({
            name : e.target.value
            
        })
    }

    handleChangePrice = (e) => {
        this.setState({
            price : e.target.value 
        })
    }

    handleChangeCategory = (e) => {
        this.setState({
            category : e.target.value
        })
    }

    handleSubmit = (e) => {
        
       const submit = (this.state.name.length &&  this.state.price.length &&  this.state.category.length) ? (
            this.props.addProduct(this.state),
            this.setState({
                name:"",
                price:"",
                category:""
            })
        ) : (            
        alert("All fields are required")         
        )

        return {submit} 


        
    }

    render() {
     return (

    <div className="inputs">
         
    

        <div className="input-group mb-3">
            <div className="input-group-prepend">
                <span className="input-group-text" id="basic-addon1">Product Name (*) </span>
            </div>
            <input type="text" onChange={this.handleChangeName} className="form-control" placeholder="Enter product name" aria-label="Username" aria-describedby="basic-addon1" value={this.state.name}/>
        </div>

        <div className="input-group mb-3">
            <input type="text" onChange={this.handleChangePrice} className="form-control" placeholder="Enter product price (with $ symbole)" aria-label="Recipient's username" aria-describedby="basic-addon2" value={this.state.price}/>
            <div className="input-group-append">
                <span className="input-group-text" id="basic-addon2">Product Price (*) </span>
             </div>
        </div>

        <div className="input-group mb-3">
            <select onChange={this.handleChangeCategory} className="custom-select" id="inputGroupSelect02" value={this.state.category}>
                <option defaultValue="Choose..">Choose...</option>            
                <option value="Clothes">Clothes</option>
                <option value="Electronis">Electronics</option>
            </select>
            <div className="input-group-append">
                <label className="input-group-text" htmlFor="inputGroupSelect02">Product Category (*) </label>
            </div>
        </div>

        
         <button className="btn btn-outline-secondary" onClick={this.handleSubmit} type="button">Add Product</button>
            
            


     
    </div>
    )
}
}

export default AddProduct
