import React from 'react';

function Product(props) {
    return(
        <div>
            {props.productName}
            {props.productPrice}
            {props.productImage}
        </div>
    )
}

export default Product;