import { configureStore } from '@reduxjs/toolkit';
import ProductSlice from './slices/ProductSlice';
import CartSlice from './slices/CartSlice';

const Store = configureStore({
    reducer:{
        product:ProductSlice,
        cart:CartSlice
    }
})

export default Store;
