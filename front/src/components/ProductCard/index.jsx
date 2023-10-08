import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToCartAction } from '../../store/redusers/cartReducer';
import s from './index.module.css'

export default function ProductCard({id, image, price, discont_price, title }) {

const dispatch = useDispatch();
const discont = discont_price === null ? '' : Math.round(-(price-discont_price) / price *100) + '%';

  return (
    <div className={s.card_item}>
      <Link to={`/products/${id}`}>
      <div className={s.card}>
        <img src={`http://localhost:3333${image}`} alt={title} />
        <div className={s.info}>
          <div className={s.price}>
            <p className={s.actual_price}>{discont_price ?? price}<span>$</span>{" "}</p>
            <p className={s.old_price}>{discont_price !== null ? `${price}$` : " "}</p>
            <p className={s.discont}>{discont}</p>
          </div>
          <p className={s.title}>{title}</p>
        </div>
      </div>
      </Link> 
      <div className={s.add_btn} 
        onClick={() => dispatch(addToCartAction({ id, image, title, price, discont_price }))}
        >Add to cart
      </div>
    </div>
  )
}
