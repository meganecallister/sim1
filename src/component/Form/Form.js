import React, { Component } from 'react';
import axios from 'axios';
import '../../App.css'

class Form extends Component {
    constructor() {
        super();

        this.state = {
            productArr: [],
            productName: '',
            productPrice: '',
            productImage: ''
        }
    }

    updateProductName(val) {
        this.setState({
            productName: val
        })
    }

    updateProductPrice(val) {
        this.setState({
            productPrice: val
        })
    }

    updateProductImage(val) {
        this.setState({
            productImage: val
        })
    }

    cancelInputs() {
        this.setState({
            productName: '',
            productPrice: '',
            productImage: ''
        })
    }

    addProduct() {
        let body = {
            productName: this.state.productName,
            productPrice: this.state.productPrice,
            productImage: this.state.productImage
        }
        axios.post('http://localhost:3001/api/postProducts', body)
        .then( res => {
            console.log(res);
            this.setState({
                productName: res.data,
                productPrice: res.data,
                productImage: res.data
            })
        }).catch(err => {
            console.log(err)
        })
    }

    
    render() {
        return(
            <main>
                <div className='red-box'>
                </div>

                <div className='green-box'>
                    <div className='img-box'>
                        <img src={ this.state.productImage} alt="product"/>
                    </div>
                    <div className="inputs">
                        <input onChange= { e => { this.updateProductImage(e.target.value)}} type='text' placeholder='Image URL' value={ this.state.productImage }/>
                        <input onChange= { e => { this.updateProductName(e.target.value)}} type='text' placeholder='Product Name' value={ this.state.productName }/>
                        <input onChange= { e => { this.updateProductPrice(e.target.value)}} type='text' placeholder='Product Price' value={ this.state.productPrice }/>
                    </div>
                    <div className='two-buttons'>
                        <button onClick = { () => this.cancelInputs()}>Cancel</button>
                        <button onClick = { () => this.addProduct()}>Add to Inventory</button>
                    </div>
                </div>
            </main>
        )
    }
}

export default Form;