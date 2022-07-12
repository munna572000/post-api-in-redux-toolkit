import {configureStore} from '@reduxjs/toolkit'
import counterSlice from './counterSlice'
// import extraReducers from './productSlice';
import fetchProducts from './productSlice';




const store = configureStore({
    reducer:{
        counter:counterSlice,
        product: fetchProducts,
      

    },

})
export default store
