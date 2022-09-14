import {configureStore} from '@reduxjs/toolkit';
import reducer from '../features/reducer';
import productsSlice from '../features/products/productsSlice';

 const store = configureStore({
    reducer: {
    // Add Reducers Here
        reducer: null,
        products: productsSlice,

    }
})



export default store;