import React from 'react';
import styles from './styles.module.css';
import Chip from '../../Chip';

const BlogItem = ({
  blog,
  setShowCreateBlog,
  showIndivisualBlog,
  handleDelete,
}) => {
  const {
    description,
    title,
    createdAt,
    authorName,
    authorAvatar = "https://source.unsplash.com/featured/300x201",
    cover,
    category,
  } = blog

  return (
    <div className={styles.blogItemWrap}>
      <img className={styles.blogItemCover} src={cover} alt='cover' />
      <Chip label={category} />
      <h3>{title}</h3>
      <p className={styles.blogItemDesc}>{description}</p>
      <footer>
        <div className={styles.blogItemAuthor}>
          <img src={authorAvatar} alt='avatar' />
          <div>
            <div>{authorName}</div>
            <p>{createdAt}</p>
          </div>
        </div>
        <div>

          <button className={styles.blogItemLinkDelete} onClick={() => {
           handleDelete(blog.id)
          }}>
            Delete
          </button>
          <button className={styles.blogItemLink} onClick={() => {
            setShowCreateBlog(true)
            showIndivisualBlog(blog)
          }}>
            Edit
          </button>

        </div>
      </footer>
    </div>
  );
};

export default BlogItem;
