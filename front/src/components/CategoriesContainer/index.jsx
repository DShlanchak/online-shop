import { joinPaths } from '@remix-run/router';
import React from 'react';
import CategoryCard from '../CategoryCard';

export default function CategoriesContainer({categories}) {

  return (
    <div className='container'>
      {categories.map(el => <CategoryCard key={el.id} {...el}/>)}
    </div>
  )
}
