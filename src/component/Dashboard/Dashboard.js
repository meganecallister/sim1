import React, { Component } from 'react';
import Product from '../../component/Product/Product';
import axios from 'axios';

class Dashboard extends Component {
    render() {
        let mappedInventory = this.props.inventory.map((e, i) => {
           return(
            <Product key={i}
            productName = {e.productName}
            productPrice = {e.productPrice}
            productImage = {e.productImage}
            />
            )
        })
        return(
            <div>
                
                {mappedInventory}
            </div>
        )
    }
}

export default Dashboard;