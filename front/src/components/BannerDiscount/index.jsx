import React from 'react';
import s from './index.module.css';
import src from './media/img.png';
import FormItem from '../FormItem';

export default function BannerDiscount() {

  return (
    <div className={[s.banner_form, 'wrapper_1440'].join(' ')}>
      <div className={s.img}><img src={src} alt="form" /></div>
      <div className={s.info}>
        <p className={s.title}>5% off</p>
        <p className={s.subtitle}>on the first order</p>
        <FormItem placeholder='+49' btn='Get a discount' name='discount'/>
      </div>
    </div>
  )
}

