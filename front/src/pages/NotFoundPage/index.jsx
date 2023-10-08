import React from 'react';
import img from './media/404.png';
import s from './index.module.css'

export default function NotFoundPage() {
  return (
    <div className={[s.not_found, 'wrapper_1380'].join(' ')} >
      <img src={img} alt="Not found page" />
    </div>
  )
}
