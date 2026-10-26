import { Link } from "react-router-dom";
import "./Blog.css";

const blogs = [
  {
    id: 1,
    title: "Introduction to React",
    description: "Learn the basics of React development.",
  },
  {
    id: 2,
    title: "Understanding JavaScript",
    description: "Explore important JavaScript concepts.",
  },
  {
    id: 3,
    title: "Web Development Tips",
    description: "Discover useful tips for web developers.",
  },
];

function Blog() {
  return (
    <section className="page container">
      <h1>Our Blog</h1>

      <div className="blog-list">
        {blogs.map((blog) => (
          <article className="blog-card" key={blog.id}>
            <h2>{blog.title}</h2>

            <p>{blog.description}</p>

            <Link to={`/blog/${blog.id}`}>
              Read More
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}

export { blogs };
export default Blog;