import React from 'react'
import { data } from '../Data'


export const ProductList = ({allProducts,setAllProducts,countProducts,setCountProducts,total,setTotal,
}) => {
	const onAddProduct = product => {
		if (allProducts.find(item => item.id === product.id)) {
			const products = allProducts.map(item =>
				item.id === product.id
					? { ...item, quantity: item.quantity + 1 }
					: item
			);
			setTotal(total + product.price * product.quantity);
			setCountProducts(countProducts + product.quantity);
			return setAllProducts([...products]);
		}

		setTotal(total + product.price * product.quantity);
		setCountProducts(countProducts + product.quantity);
		setAllProducts([...allProducts, product]);
  }
  console.log(allProducts)
  return (
    <div className='container-items'>
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
            <button onClick={() => onAddProduct(product)} className="button">Añadir al carrito</button>
          </div>
        </div>
      ))}
    </div>
  )
}