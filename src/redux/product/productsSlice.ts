import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios"

export const getProductsAsync: any = createAsyncThunk("products/getProductsAsync", async () => {
    const res = await axios("https://62286b649fd6174ca82321f1.mockapi.io/case-study/products/")
    return res.data
})

export const addProductAsync: any = createAsyncThunk("products/addProductAsync", async (data) => {
    const res = await axios.post("https://62286b649fd6174ca82321f1.mockapi.io/case-study/products/", data)
    return res.data
})

export const deleteProductAsync: any = createAsyncThunk("products/deleteProductAsync", async (id) => {
    await axios.delete(`https://62286b649fd6174ca82321f1.mockapi.io/case-study/products/${id}`)
    return id
})

export const productSlice = createSlice({
    name: "products",
    initialState: {
        products: [],
        search: "",
        selectCategory: "all",
    },
    reducers: {
        setSearch: (state: any, action: any) => {
            state.search = action.payload
        },
        setCategory: (state: any, action: any) => {
            state.selectCategory = action.payload
        }
    },
    extraReducers: {
        [getProductsAsync.fulfilled]: (state: any, action: any) => {
            state.products = action.payload
        },
        [deleteProductAsync.fulfilled]: (state: any, action: any) => {
            const id = action.payload
            const index = state.products.findIndex((product: any) => product.id === id)
            state.products.splice(index, 1)
        }
    }
})

export const filterCategory = (state: any) => {
    const { selectCategory, products } = state.products
    if (selectCategory === "all") {
        return products
    }
    return products.filter((product: any) => product.category === selectCategory)
}




export const { setSearch, setCategory }: any = productSlice.actions
export default productSlice.reducer;