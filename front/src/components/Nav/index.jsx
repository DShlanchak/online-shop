import React from 'react';
import {PiShoppingCartSimpleThin} from 'react-icons/pi';
import s from './index.module.css';
import logo from './media/logo.png';
import {NavLink, Link} from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function Nav() {

  const className = ({isActive}) => [s.link, isActive? s.active : ''].join(' ')
  const cart_state = useSelector(state => state.cart)
  
  return (
    <div className={[s.nav, 'wrapper_1380'].join(' ')}>
      <div className={s.nav_left}>
        <Link className={s.link} to={'/'}><img src={logo} alt="logo" /></Link>     
        <Link className={s.link} to={'/categories'}><div className={s.btn}><p>Catalog</p></div></Link>
      </div>
      <div className={s.nav_right}>
        <div className={s.nav_pages}>
          <NavLink className={className} to={'/'}><p>Home page</p></NavLink>
          <NavLink className={className} to={'/products'}><p>All products</p></NavLink>
          <NavLink className={className} to={'/sale'}><p>All sales</p></NavLink>
        </div>
        <Link to={'/cart'}> 
          <div className={s.cart}><PiShoppingCartSimpleThin/> 
            {cart_state.length === 0
            ? ''
            :<div className={s.cart_count}>{cart_state.length}</div>
            }
          </div>
        </Link>  
        
      </div>
    </div>
  )
}

//{cart_state.reduce((acc, {count}) => acc + count, 0)}