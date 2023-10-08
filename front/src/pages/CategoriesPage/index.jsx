import React from 'react';
import { useSelector } from 'react-redux';
import CategoriesContainer from '../../components/CategoriesContainer';
import FormItem from '../../components/FormItem';

export default function CategoriesPage() {

  const categories_state = useSelector(state => state.categories)

  return (
    <div className='wrapper_1380'>
      <h2>Categories</h2>
      <CategoriesContainer categories = {categories_state} title={'Categories'}/>
    </div>
  )
}
