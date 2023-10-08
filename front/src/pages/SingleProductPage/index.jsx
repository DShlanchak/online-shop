import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getSingleProducts } from '../../requers/products_req';
import { addToCartAction } from '../../store/redusers/cartReducer';
import s from './index.module.css';

export default function SingleProductPage() {

  const {id} = useParams();

  const dispatch = useDispatch();

  useEffect(() => dispatch(getSingleProducts(id)), [dispatch]);

  const single_product_state = useSelector(state => state.singleProduct)

  return (
    <div>
      {
        single_product_state.map(({id, title, price, discont_price, description, image}) => 
        <div className='wrapper_1380'>
          <p className={s.title}> {title}</p> 
          <div className={s.product_item}>
            <img src={`http://localhost:3333${image}`} alt={title}/>
            <div className={s.info}>
              <div className={s.price}>
                <p className={s.actual_price}>{discont_price ?? price}<span>$</span>{" "}</p>
                <p className={s.old_price}>{discont_price !== null ? `${price}$` : " "}</p>
                <p className={s.discont}>{discont_price === null ? '' : Math.round((price-discont_price) / price *100) + '%'}</p>
              </div> 
              <div className={s.btn}
              onClick={() => dispatch(addToCartAction({ id, image, title, price }))}
              >
                To cart
              </div>
              <div className={s.description}>
              <p>Description</p>
              <p>{description}</p>
              </div>
            </div>
          </div>
        </div>
        )
      }
    </div>
  )
}
