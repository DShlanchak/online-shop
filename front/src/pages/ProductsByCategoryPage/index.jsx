import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';
import FilterForms from '../../components/FilterForms';
import ProductsContainer from '../../components/ProductsContainer';
import { getProductsByCategory } from '../../requers/products_req';

export default function ProductsByCategoryPage() {
  const {id} = useParams();

  const dispatch = useDispatch();

  useEffect(() => dispatch(getProductsByCategory(id)), [dispatch])

  const {data, category} = useSelector(state => state.productsByCategory)

  return (
    <div className='wrapper_1380'>
      <h2>{category && category.title}</h2>
      <FilterForms/>
      <div>
      <ProductsContainer products={data}/>
      </div>
    </div>
  )
}
