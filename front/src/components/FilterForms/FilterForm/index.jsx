import React from 'react'
import { useDispatch } from 'react-redux';
import { filterProductsAction } from '../../../store/redusers/allProductsReducer';
import { filterProductsByCategoryAction } from '../../../store/redusers/productsByCategoryReducer';
import s from './index.module.css';

export default function FilterForm({all_products }) {

    const dispatch = useDispatch();

    const submit = e => {
        e.preventDefault();
        const {min, max} = e.target;
        const min_value = min.value || 0;
        const max_value = max.value || Infinity;
        {all_products 
          ? dispatch(filterProductsAction({min_value, max_value}))
          : dispatch(filterProductsByCategoryAction({min_value, max_value}))
        }
    }

  return (
    <div>
      <form onSubmit={submit} className={s.filter}>
        <p>Price</p>
        <input type='number' placeholder='form' name='min' />
        <input type='number' placeholder='to' name='max' />   
        <button>Filter</button>
      </form>
    </div>
    
  )
}
