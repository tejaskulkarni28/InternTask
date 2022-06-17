import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"

export const blogApi = createApi({
    reducerPath:"blog",
    baseQuery:fetchBaseQuery({
        baseUrl:"https://logibricks.com/api/"
    }),
    endpoints:(builder)=>({
        getBlogCategories:builder.query({
            query:()=> "blogCategories"
        })
    })
})

export const getBlogsApi = createApi({
    reducerPath:"blogs",
    baseQuery :fetchBaseQuery({
        baseUrl:"https://logibricks.com/api/"
    }),
    endpoints:(builder)=>({
        getBlogs:builder.query({
            query:(slug)=> `blogs/${slug}`
        })
    })
})

// https://logibricks.com/api/blogs/logistics-management

export const {useGetBlogCategoriesQuery} = blogApi  
export const {useGetBlogsQuery} = getBlogsApi