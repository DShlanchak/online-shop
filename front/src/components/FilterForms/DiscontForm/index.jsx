import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { discontProductsAction } from '../../../store/redusers/allProductsReducer';
import { discontProductsByCategoryAction } from '../../../store/redusers/productsByCategoryReducer';
import s from './index.module.css';

export default function DiscontForm({all_products}) {

    const dispatch = useDispatch();

    const [checkboxChecked, setCheckboxChecked] = useState(false);

    const handleChange = () => setCheckboxChecked(!checkboxChecked)

    const get_products = e => {
      all_products
      ? dispatch(discontProductsAction(e.target.checked))
      : dispatch(discontProductsByCategoryAction(e.target.checked))
    }

  return (
    <div>
        <label className={s.checkbox}>
            <p>Discounted items</p>
            <input type="checkbox" 
            checked={checkboxChecked} 
            onChange={handleChange}
            onClick={get_products}
            />
        </label>
    </div>
  )
}
