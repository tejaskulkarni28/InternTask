import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { getBlogsApi } from "./services/apiServices";
import { blogApi } from "./services/apiServices";
export const store = configureStore({
    reducer:{
        [blogApi.reducerPath]:blogApi.reducer,
        [getBlogsApi.reducerPath]:getBlogsApi.reducer
    },
    middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(blogApi.middleware).concat(getBlogsApi.middleware),

})

setupListeners(store.dispatch)