import React, { useEffect, useState } from 'react';
import { blogList } from '../Config';
import Header from '../Header';
import SearchBar from '../SearchBar';
import EmptyList from '../EmptyList';
import BlogList from '../BlogList';
import styles from './styles.module.css';
import Blog from '../Blog';
import {Link} from "react-router-dom";


function isEmpty(value) {
    if (typeof value === 'undefined' || value === null) {
      return true;
    }
  
    if (typeof value === 'string' || Array.isArray(value)) {
      return value.length === 0;
    }
  
    if (typeof value === 'object') {
      return Object.keys(value).length === 0;
    }
  
    return false;
  }

const BlogListComponent=({blogs,showIndivisualBlog,setShowCreateBlog, handleDelete} )=>{

    if(!blogs.length){
        <EmptyList/>
    }

    return (
        <BlogList blogs={blogs} showIndivisualBlog={showIndivisualBlog} setShowCreateBlog={setShowCreateBlog} handleDelete={handleDelete} />
    )
}  

const BlogEditor = () => {
  const [blogs, setBlogs] = useState(blogList);
  const [searchKey, setSearchKey] = useState('');
  const [indivisualBlog,showIndivisualBlog]=useState({})
  const [showCreateBlog,setShowCreateBlog]=useState(false)

  const handleSearchBar = (e) => {
    e.preventDefault();
    handleSearchResults();
  };

  const handleSearchResults = () => {
    const allBlogs = blogList;
    const filteredBlogs = allBlogs.filter((blog) =>
      blog.category.toLowerCase().includes(searchKey.toLowerCase().trim())
    );
    setBlogs(filteredBlogs);
  };

  const handleDelete=(id)=>{
    console.log("id",id);
    const allBlogs = blogs;
    const filteredBlogs = allBlogs.filter((blog) =>blog.id!==id);

    console.log("filteredBlogs",filteredBlogs);
    setBlogs(filteredBlogs);

  }

  console.log("blogs",blogs);

  const onCreateBlog=()=>{
    setShowCreateBlog(true)
    showIndivisualBlog({})
  }

  const handleClearSearch = () => {
    setBlogs(blogList);
    setSearchKey('');
  };

  const handleSubmitbutton=(blogData)=>{
    let newTemp=[...blogList]

    if(blogList.map((item)=>item.id).includes(blogData?.id)){
      newTemp=newTemp.filter((item)=>item.id!==blogData?.id)
      newTemp.push(blogData)
    }

    if(!blogList.map((item)=>item.id).includes(blogData?.id) && !isEmpty(blogData)){
      newTemp.push(blogData)
    }

    setBlogs(newTemp)
    
  }



  if(showCreateBlog){
    return  <Blog blogData={indivisualBlog} showIndivisualBlog={showIndivisualBlog} setShowCreateBlog={setShowCreateBlog} handleSubmitbutton={handleSubmitbutton} />
  }

  return (
    <div className={styles.container}>

    <div className={styles.blogGoBack} >
       <Link to='/'><span> &#8592;</span> <span>Go Back</span></Link> 
        <Header onCreateBlog={onCreateBlog}  />
      </div>

    

      <SearchBar
        value={searchKey}
        clearSearch={handleClearSearch}
        formSubmit={handleSearchBar}
        handleSearchKey={(e) => setSearchKey(e.target.value)}
      />

      <BlogListComponent blogs={blogs} showIndivisualBlog={showIndivisualBlog} setShowCreateBlog={setShowCreateBlog} handleDelete={handleDelete} />

    </div>
  );
};

export default BlogEditor;