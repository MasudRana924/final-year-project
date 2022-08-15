import React from 'react';
import { useEffect, useState } from 'react';
import Product from './Product';
const Products = () => {
    const [products, setproduct] = useState([]);
    useEffect(() => {
        fetch('./products.json')
            .then(res => res.json())
            .then(data => {
                setproduct(data.slice(0, 9))

            })
    }, [])
    return (
        <div class="mt-5 mb-5">
            {/* <div className="flex justify-between">
                <h2>Products</h2>
                <button>see all</button>
            </div> */}
           
            <div class="grid grid-cols-5 gap-4 mt-5">

                {
                    products.map(product => <Product
                        product={product}

                    ></Product>)
                }
            </div>
        </div>
    );
};

export default Products;