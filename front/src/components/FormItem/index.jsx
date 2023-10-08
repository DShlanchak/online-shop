import React from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { getDiscount, setOrder } from '../../requers/products_req';
import FormButton from '../FormButton';
import FormInput from '../FormInput';
import s from './index.module.css';

export default function FormItem(props) {

  const [postReq, setPostReq] = useState('');
  
  const {register, handleSubmit, reset, formState: {errors}} = useForm({mode:'onBlur'});

  const orderRegister = register('order', {
    required: '*phone number is required',
    pattern: { 
      value: /^(?:\+49|0)[1-9][0-9]{10}$/,
      message: "please enter valid phone number" 
     } 
  });

  const submit = data => {
    props.name === 'order'
    ? setOrder(setPostReq('Your order has been placed'))
    : getDiscount(setPostReq('A discount coupon has been sent to your phone number'))
    reset()
  }

  return (
    <div>
      {
        postReq !== ''
        ? <div><p>{postReq}</p></div>
        :<form 
        className={s.form}
        onSubmit={handleSubmit(submit)}
        >
          <FormInput props={props} {...orderRegister}/>
          {errors.order && <p className={s.error_msg}>{errors.order.message}</p>}
          <FormButton props = {props}/>
        </form>
      }
    </div>
    
  )
}