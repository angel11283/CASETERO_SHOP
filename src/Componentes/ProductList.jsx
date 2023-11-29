import React from 'react'
import { data } from '../Data'


export const ProductList = ({ allProducts, setAllProducts }) => {
  const onAddProduct = () => {
    console.log("agregado");
  }
  return (
    <div className=''>
      {data.map(product => (
        <div className='item' key={product.id}>
          <figure>
            <img
              className='imgproduct'
              src={product.urlImage}
              alt={product.name_product}
            />
          </figure>
          <div className="info-product">
            <h2>{product.name_product}</h2>
            <p className="price">${product.price}</p>
            <button onClick={() => onAddProduct()} className="button">Añadir al carrito</button>
          </div>
        </div>
      ))}
    </div>
  )
}