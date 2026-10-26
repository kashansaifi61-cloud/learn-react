import { Link, useParams } from "react-router-dom";
import { blogs } from "./Blog";
import "./Blog.css";

function BlogView() {
  const { id } = useParams();

  const blog = blogs.find(
    (item) => item.id === Number(id)
  );

  if (!blog) {
    return (
      <section className="page container">
        <h1>Blog Not Found</h1>
        <Link to="/blog">Back to Blog</Link>
      </section>
    );
  }

  return (
    <article className="page container">
      <h1>{blog.title}</h1>

      <p>{blog.description}</p>

      <p>
        This is the individual blog detail page.
        Add your complete article content here.
      </p>

      <Link to="/blog">Back to Blog</Link>
    </article>
  );
}

export default BlogView;