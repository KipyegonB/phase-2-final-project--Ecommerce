import React from 'react'

function ProductsList({ productDescription }) {
    console.log(productDescription)
    const products = productDescription.map((product) => (
        <div className='imageCard'>
            <img src={product.url} alt="Oops!" />
            <h3>Type: {product.type}</h3>
            <h4>Price:{product.price}</h4>

        </div>
    ))
    return (
        <div className='imageContainer'>
            {products}
        </div>
    )
}

export default ProductsList;