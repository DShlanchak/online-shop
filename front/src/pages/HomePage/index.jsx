import React from 'react';
import { useSelector } from 'react-redux';
import BannerDiscount from '../../components/BannerDiscount';
import BannerSale from '../../components/BannerSale';
import CategoriesContainer from '../../components/CategoriesContainer';
import ProductsContainer from '../../components/ProductsContainer';
import {Link} from 'react-router-dom'
import s from './index.module.css';

export default function HomePage() {

  const categories_homePage = useSelector(state => state.categories).slice(0, 4)

  const sale_products_homePage = useSelector(state => state.allProducts)
                                .filter(el => el.discont_price !== null)
                                .sort(() => Math.random() - 0.5)
                                .slice(0, 4)

   return (
    <div>
      <BannerSale/>
      <div className={s.card_block}>
        <Link to={'/categories'}>
          <div className={s.card_block_btn}>
            <h2>Catalog</h2>
            <div><p>All categories</p></div>
          </div>
        </Link>
        <CategoriesContainer categories = {categories_homePage}/>
      </div>
      <BannerDiscount/>
      <div className={s.card_block}>
        <Link to={'/sale'}>
          <div className={s.card_block_btn}>
            <h2>Sale</h2>
            <div><p>All sales</p></div>
          </div>
        </Link>
        <ProductsContainer products={sale_products_homePage}/>
      </div>
    </div>
  )
}

