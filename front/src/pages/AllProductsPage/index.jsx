import React from 'react'
import { useSelector } from 'react-redux'
import FilterForms from '../../components/FilterForms'
import ProductsContainer from '../../components/ProductsContainer'

export default function AllProductsPage() {

  const all_products_state = useSelector(state => state.allProducts)

  return (
    <div className='wrapper_1380'>
      <h2>All products</h2>
      <FilterForms all_products={all_products_state}/>
      <div>
        <ProductsContainer products={all_products_state}/>
      </div>
    </div>
   
  )
}
