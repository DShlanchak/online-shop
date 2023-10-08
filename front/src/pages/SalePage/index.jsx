import React from 'react'
import { useSelector } from 'react-redux'
import FilterForms from '../../components/FilterForms'
import ProductsContainer from '../../components/ProductsContainer'

export default function SalePage() {

  const sale_products_state = useSelector(state => state.allProducts).filter(el => el.discont_price !== null)

  return (
    <div className='wrapper_1380'>
      <h2>Products with sale</h2>
      <FilterForms all_products={sale_products_state} sale_page='sale_page'/>
      <div>
        <ProductsContainer products={sale_products_state}/>
      </div>
    </div>
   
  )
}