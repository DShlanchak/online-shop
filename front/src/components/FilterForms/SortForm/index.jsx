import React from 'react'
import { useDispatch } from 'react-redux'
import { sortProductsAction } from '../../../store/redusers/allProductsReducer';
import { sortProductsByCategoryAction } from '../../../store/redusers/productsByCategoryReducer';
import s from './index.module.css';

export default function SortForm({all_products}) {

    const dispatch = useDispatch();

    const order = e =>  {
      all_products
      ? dispatch(sortProductsAction(e.target.value))
      : dispatch(sortProductsByCategoryAction(e.target.value))
    };

  return (
    <div >
        <label className={s.sort}>
            <p>Sorted</p>
            <select onInput={order} defaultValue='default'>
                <option value='default'>by default</option>
                <option value="title">by alphabet A-Z</option>
                <option value="price_asc">by price ASC</option>
                <option value="price_desc">by price DESC</option>
            </select>
        </label>
    </div>
  )
}
