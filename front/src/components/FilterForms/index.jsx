import React from 'react';
import DiscontForm from './DiscontForm';
import FilterForm from './FilterForm';
import SortForm from './SortForm';
import s from './index.module.css'

export default function FilterForms({all_products, sale_page}) {
  return (
    <div className={s.forms}>
        <FilterForm all_products={all_products}/>
        {
         sale_page
         ?''
         :<DiscontForm all_products={all_products}/>
        }
        <SortForm all_products={all_products}/>
    </div>
  )
}
