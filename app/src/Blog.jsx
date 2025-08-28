import '../styles/Blog.css';
import { useEffect, useState } from 'react';

export default function Blog() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/blog-posts')
      .then(res => res.json())
      .then(data => {
        console.log('Posts from API:', data);  // debug log
        setPosts(data);
      })
      .catch(err => console.error('Fetch error:', err));
  }, []);

  return (
    <div className="blog-page">
      <div className="blog-header">
        <h1 className="blog-title">Blog</h1>
      </div>

      <div className="blog-content">
        <div className="main-posts">
          {posts.length === 0 ? (
            <p>Loading posts...</p>
          ) : (
            posts.map(post => (
              <article className="blog-post" key={post.id}>
                <p><strong>ID:</strong> {post.id}</p>
                <p><strong>User ID:</strong> {post.user_id}</p>
                <h2 className="post-title">{post.title}</h2>
                <p className="post-body">{post.body}</p>
                <p className="post-rating">⭐ Rating: {post.rating} / 5</p>
              </article>
            ))
          )}
        </div>

        <div className="sidebar">
          <h3>Recent Posts</h3>
          <ul>
            {posts.slice(0, 6).map(post => (
              <li key={post.id}>{post.title}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}