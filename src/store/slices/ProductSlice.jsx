import { createSlice } from "@reduxjs/toolkit";


const ProductSlice = createSlice({
    name: "productSlice",
    initialState: {
        data: [],
        recentlyViewed: [],
        recentlySearched: [],
        search: "",
    },
    reducers: {
        fetchData: (state, action) => {
            state.data = action.payload;
            // console.log( action.payload)

        },
        searchFilter: (state, action) => {
            state.search = action.payload;
        },
        recentlyViewedProduct: (state, action) => {
            state.recentlyViewed.unshift(action.payload);
            if (state.length > 4) {
                state.length = 4;
            }
        },
        recentlySearchedProduct: (state, action) => {
            state.recentlySearched.unshift(action.payload);
            if (state.length > 10) {
                state.length = 10;
            }
        }
    }
})

export default ProductSlice.reducer;

export const { fetchData, searchFilter, recentlyViewedProduct, recentlySearchedProduct } = ProductSlice.actions;