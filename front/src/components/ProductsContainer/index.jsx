import React from 'react';
import ProductCard from '../ProductCard';

export default function ProductsContainer({products}) {

  return (
    <div className='container'>
     {products && products
     .filter(el => el.show_product)
     .map(el => <ProductCard key={el.id} {...el}/>)}
    </div>
  )
}
