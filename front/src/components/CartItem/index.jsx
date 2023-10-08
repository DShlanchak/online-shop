import React from 'react';
import s from './index.module.css'
import { useDispatch } from 'react-redux';
import { decrementCartAction, incrementCartAction, removeCartAction } from '../../store/redusers/cartReducer';

export default function CartItem({ id, image, title, price, discont_price, count }) {

    const dispatch = useDispatch();

  return (
    <div className={s.card}>
      <div className={s.img}>
        <img src={`http://localhost:3333${image}`} alt="photo" />
      </div>
      <div className={s.info}>
        <p>{ title }</p>
        <div className={s.count}>
          <button onClick={() => dispatch(decrementCartAction(id))}>－</button>
          <p>{ count }</p>
          <button onClick={() => dispatch(incrementCartAction(id))}>＋</button> 
        </div>
      </div>   
      <div className={s.price}>
        <p className={s.actual_price}>{discont_price ?? price}<span>$</span>{" "}</p>
        <p className={s.old_price}>{discont_price !== null ? `${price}$` : " "}</p>
      </div>
      <span className={s.close_btn} onClick={() => dispatch(removeCartAction(id))}>X</span>
    </div>
  )
}
