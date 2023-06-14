import React from 'react';
import styles from './styles.module.css';
import BlogItem from './BlogItem';

const BlogList = ({ blogs , showIndivisualBlog=()=>{},setShowCreateBlog,handleDelete }) => {
  return (
    <div className={styles.blogListWrap}>
      {blogs.map((blog) => (
        <BlogItem blog={blog} key={blog.id} setShowCreateBlog={setShowCreateBlog}  showIndivisualBlog={showIndivisualBlog} handleDelete={handleDelete}  />
      ))}
    </div>
  );
};

export default BlogList;
