import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CartItem from '../CartItem';
import {Link} from 'react-router-dom'
import s from './index.module.css';
import FormItem from '../FormItem';
import { useEffect } from 'react';
import empty_cart from './media/empty-cart.png'


export default function Cart() {

  const cart_state = useSelector(state => state.cart);

  console.log(cart_state);

  useEffect(() => {
    localStorage.setItem('shopping_cart', JSON.stringify(cart_state))
  },[cart_state])

  return (
    <div>
      {
        cart_state.length === 0
        ? <div className={s.empty_cart}>
            <img src={empty_cart} alt="empty cart" />
            <div>
              <p>Your cart is empty - <Link to={'/products'}>Back to the store ﹥</Link></p>
            </div>
          </div>
        : <div >
            <Link to={'/products'}>
              <p className={s.link_store}>Back to the store ﹥</p>
            </Link>
            <div className={s.container}>
              <div>
                {
                  cart_state.map(el => <CartItem key={el.id} {...el} />)
                }
              </div>
              <div className={s.order_details}>
                <p>Order details</p>
                <div className={s.total}>
                  <p>Total</p>
                  <p className={s.total_amount}>
                    {cart_state.reduce((acc, {price, count}) => acc + price * count, 0)}$
                  </p>
                </div>
                <FormItem  placeholder='Phone number' btn='Order' name='order'/>
              </div>
            </div>
          </div>
      }
    </div>
  )
}