import './App.css';
import Footer from './components/Footer';
import Nav from './components/Nav';
import {Routes, Route} from 'react-router-dom'
import HomePage from './pages/HomePage'
import CategoriesPage from './pages/CategoriesPage';
import AllProductsPage from './pages/AllProductsPage';
import CartPage from './pages/CartPage';
import SalePage from './pages/SalePage';
import NotFoundPage from './pages/NotFoundPage';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getAllCategories } from './requers/caregories_req';
import ProductsByCategoryPage from './pages/ProductsByCategoryPage';
import SingleProductPage from './pages/SingleProductPage';
import { getAllProducts } from './requers/products_req';

function App() {

  const dispatch =useDispatch();

  useEffect(() =>{
    dispatch(getAllCategories());
    dispatch(getAllProducts())
  }, [dispatch])
  
  return (
    <div>
      <Nav/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/categories' element={<CategoriesPage/>}/>
        <Route path='/categories/:id' element={<ProductsByCategoryPage/>}/>
        <Route path='/products' element={<AllProductsPage/>}/>
        <Route path='/products/:id' element={<SingleProductPage/>}/>
        <Route path='/cart' element={<CartPage/>}/>
        <Route path='/sale' element={<SalePage/>}/>
        <Route path='*' element={<NotFoundPage/>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;

