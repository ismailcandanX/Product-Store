import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios"

export const getProductsAsync: any = createAsyncThunk("products/getProductsAsync", async () => {
    const response = await axios("https://62286b649fd6174ca82321f1.mockapi.io/case-study/products/")
    return response.data
})

export const productSlice = createSlice({
    name: "products",
    initialState: {
        products: [],
    },
    reducers: {},
    extraReducers: {
        [getProductsAsync.fulfilled]: (state: any, action: any) => {
            state.products = action.payload
        }
    }
})


export default productSlice.reducer;