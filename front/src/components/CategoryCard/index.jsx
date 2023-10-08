import React from 'react';
import { Link } from 'react-router-dom';
import s from './index.module.css';
// import url from '../../requers/url'


export default function CategoryCard({id, image, title}) {
  return (

    <Link to={`/categories/${id}`}>
      <div className={s.card}>
        <img src={`http://localhost:3333${image}`} alt={title} />
        {/* <img src={`${url}${image}`} alt={title} /> */}
        <p>{title}</p>
      </div>
    </Link>
  )
}
