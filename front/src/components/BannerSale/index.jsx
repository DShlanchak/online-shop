import React from 'react';
import { Link } from 'react-router-dom';
import s from './index.module.css';
import src from './media/img.png'

export default function BannerSale() {
  return (
    <div className={[s.banner_sale, 'wrapper_1440'].join(' ')}>
        <div className={s.info}>
          <h2>Sale</h2>
          <p>New season</p>
          <Link to={'/sale'}><div className={s.btn}>Sale</div> </Link>      
        </div>
        <div className={s.img}>
          <img src={src} alt="Sale" />
        </div>  
    </div>
  )

   
       
}
