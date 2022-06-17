import userEvent from '@testing-library/user-event';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useResolvedPath } from 'react-router-dom';
import { useGetBlogCategoriesQuery, useGetBlogsQuery } from '../services/apiServices';
import { Link } from 'react-router-dom';
import '../Style/blogCard.css'


const Blog = () => {
    // const [Data, setData] = useState([]);
    // const [slug, setSlugs] = useState([]);
    const {data, error, isLoading, isSuccess, isError} = useGetBlogCategoriesQuery();
    // useEffect(()=>{
    //     const fetchData = async()=>{
    //         const responseData = await fetch('https://logibricks.com/api/blogCategories');
    //         const tempdata = await responseData.json();
    //         // console.log(tempdata.data)
    //         // setData(tempdata.data)
    //         setSlugs(tempdata.data.slug)
    //     }
    //     fetchData();
    // },[])
    console.log(data)
    const [Data, setData] = useState([]);
    useEffect(()=>{
        const fetchData = async()=>{
            setData(data.data)
            // setSlugs(data.slug)
            console.log(data.data)
        }
        fetchData();
    },[data])


    return (
        <div className='blog-container'>
            {isLoading && "Loading.."}
            {isError && error.message}
            {isSuccess && Data.map((value, i)=>{
                return(
                    <Link to="/categories"
                    state={{
                        slug:value.slug
                    }}>
                    <div className="card-content" key={i}>
                        <h1>{value.title}</h1>
                        <img src={value.image} width="300px" />
                    </div>
                    </Link>

                )
            })}

            
        </div>
    );
};

// onClick={()=>{PassSlug(value.slug)}}

export default Blog;



