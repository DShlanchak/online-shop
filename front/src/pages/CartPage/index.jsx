import React from 'react';
import Cart from '../../components/Cart';
import s from './index.module.css';


export default function CartPage() {
  return (
    <div className='wrapper_1380'>
      <h2 className={s.title}>Shopping card</h2>
      <Cart/>
    </div>
  )
}