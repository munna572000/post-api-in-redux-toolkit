import axios from 'axios'
const { createSlice, createAsyncThunk } = require('@reduxjs/toolkit');


export const STATUSES = Object.freeze({
    IDLE: 'idle',
    ERROR: 'error',
    LOADING: 'loading',
});

const productSlice = createSlice({
    name: 'post',
    initialState: {
        data: [],
        status: STATUSES.IDLE,
    },
   
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state, action) => {
                state.status = STATUSES.LOADING;
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.data = action.payload;
                state.status = STATUSES.IDLE;
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.status = STATUSES.ERROR;
            });
    },
});

export const { setProducts, setStatus } = productSlice.actions;
export default productSlice.reducer;

// Thunks

export const fetchProducts = createAsyncThunk(
    "type/postData",
    async (data) => {
      try {
        const response = await axios.post("https://reqres.in/api/users", data);
        // console.log( ' api value' ,response)
        // If you want to get something back
        return response.data;
      } catch (err) {
        console.error(err)
      }
    }
  );



