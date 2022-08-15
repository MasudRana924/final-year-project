import React from 'react';
import './Product.css'

const Product = (props) => {
    const { _id, name, price, img, stock, url, brand } = props.product
    return (
        <div class="card w-76 bg-base-100  shadow-xl">
            <figure class="px-10 pt-10">
                <img src={img} alt="Shoes" class="rounded-xl card-image" />
            </figure>
            <div class="card-body items-center text-center">
                <h2 class="card-title">{name}</h2>
                <p>Price {price}</p>
                <div class="card-actions">
                    <button class="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Product;