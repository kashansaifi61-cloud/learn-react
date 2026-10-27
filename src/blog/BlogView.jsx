
import { useParams, Link } from "react-router-dom";
import { blogs } from "./blogData";
import "./Blog.css";

function BlogView() {
  const { id } = useParams();

  const blog = blogs.find(
    (item) => item.id === Number(id)
  );

  if (!blog) {
    return (
      <div className="blog-container">
        <h1>Blog Not Found</h1>
        <Link to="/blog">Back to Blogs</Link>
      </div>
    );
  }

  return (
    <article className="blog-view">
      <div className="blog-container">
        <Link to="/blog" className="back-to-blog">
          &larr; Back to Blogs
        </Link>

        <img
          src={blog.image}
          alt={blog.title}
          className="blog-view-image"
        />

        <h1>{blog.title}</h1>

        <p className="blog-view-subtitle">
          {blog.subtitle}
        </p>

        <p>{blog.description}</p>

        <div className="blog-content">
          {blog.content}
        </div>
      </div>
    </article>
  );
}

export default BlogView;