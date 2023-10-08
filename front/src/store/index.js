import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { allProductsReducer } from './redusers/allProductsReducer';
import { cartReducer } from './redusers/cartReducer';
import { categoriesReducer } from './redusers/categoriesReducer';
import { productsByCategoryReducer } from './redusers/productsByCategoryReducer';
import { singleProductReducer } from './redusers/singleProductReducer';

const rootReducer = combineReducers({
    categories:categoriesReducer,
    productsByCategory: productsByCategoryReducer,
    allProducts: allProductsReducer,
    singleProduct: singleProductReducer,
    cart: cartReducer
});

export const store = createStore(rootReducer, applyMiddleware(thunk));