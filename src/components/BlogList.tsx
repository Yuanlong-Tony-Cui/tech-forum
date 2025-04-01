import { useEffect, useState } from 'react';
import { fetchBlogList, BlogSummary } from '../api/blogApi';
import styles from './BlogList.module.css';

type Props = {
  onSelect: (id: string) => void;
};

export default function BlogList({ onSelect }: Props) {
  const [blogs, setBlogs] = useState<BlogSummary[]>([]);

  useEffect(() => {
    fetchBlogList().then(setBlogs);
  }, []); // runs only on the first render

  return (
    <div className={styles.blogList}>
      {blogs.map(blog => (
        <div
          key={blog.id}
          className={styles.blogCard}
          onClick={() => onSelect(blog.id)}
        >
          <h3>{blog.title}</h3>
          <p>{blog.summary}</p>
        </div>
      ))}
    </div>
  );
}
