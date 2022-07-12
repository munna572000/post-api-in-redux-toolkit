// const { createSlice, createAsyncThunk } = require('@reduxjs/toolkit');

// export const STATUSES = Object.freeze({
//     IDLE: 'idle',
//     ERROR: 'error',
//     LOADING: 'loading',
// });

// const productSlice = createSlice({
//     name: 'product',
//     initialState: {
//         data: [],
//         status: STATUSES.IDLE,
//     },
   
//     extraReducers: (builder) => {
//         builder
//             .addCase(fetchProducts.pending, (state, action) => {
//                 state.status = STATUSES.LOADING;
//             })
//             .addCase(fetchProducts.fulfilled, (state, action) => {
//                 state.data = action.payload;
//                 state.status = STATUSES.IDLE;
//             })
//             .addCase(fetchProducts.rejected, (state, action) => {
//                 state.status = STATUSES.ERROR;
//             });
//     },
// });

// export const { setProducts, setStatus } = productSlice.actions;
// export default productSlice.reducer;

// // Thunks
// export const fetchProducts = createAsyncThunk('products/fetch', async () => {
//     const res = await fetch('https://randomuser.me/api/?nat=us&results=40&page=1',{
//         method:"Get"
//     });
//     const data = await res.json();
//     // console.log(data.results)
//     return data.results;
   
// });