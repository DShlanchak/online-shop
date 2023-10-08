import React from 'react';
import s from './index.module.css';

export default function FormButton({props}) {

  const style = {
    border: props.name === 'discount' ?  '2px solid white' : 'none'
  }

  return (
    <button className={s.form_btn} style={style}>{props.btn}</button>
  )
}
