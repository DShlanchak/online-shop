import React, {forwardRef} from 'react';
import s from './index.module.css';

const FormInput = forwardRef((props, ref) => {
  
  const style = {
      border: props.name === 'order' ?  '2px solid #339933' : ''
    }

  return (
    <input {...props} style={style} className={s.form_input}  ref={ref} placeholder='Phone number'></input>
  )
})

export default FormInput
