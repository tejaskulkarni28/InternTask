import React from 'react';
import { useLocation } from 'react-router-dom';
import { getBlogsApi, useGetBlogCategoriesQuery } from '../services/apiServices';
import { useGetBlogsQuery } from '../services/apiServices';
import { useState } from 'react';
import { useEffect } from 'react';
import '../Style/blogCategories.css';

const BlogCategories = () => {
    const location = useLocation();
    const slug = location.state.slug;

    
    // // finally slug is passing
    const{data,refetch, isFetching } = useGetBlogsQuery(`${slug}`)
    
    console.log("dfdsfds")
    console.log(data)


    const[Data, setData] = useState([]);
    const[category, setCategory] = useState([]);
    useEffect(() => {
        const fetchData = async()=>{
            setData(data.blogs.data)
            setCategory(data.category)
        }
        fetchData();
    }, [data]);

    // console.log("This is a slug: " + slug)
    return (
        <div className='Blog-Categories-Container'>
            <div className='category'>
            <h4>{category}</h4>
            </div>
                {
                    Data.map((value, i)=>{
                        return(
                            <div className="Blog-Categories-Cards" key={i}>
                                <h1>{value.title}</h1>
                                <p>{value.detail}</p>
                            </div>
                        )
                    })
                }
                <h2>Same Logic will be applied for opening of the blogs</h2>
        </div>
    );
};

export default BlogCategories;