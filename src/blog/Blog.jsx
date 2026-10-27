
import ChromaGrid from "./ChromaGrid";
import { blogs } from "./blogData";
import "./Blog.css";

function Blog() {
  const items = blogs.map((blog) => ({
    image: blog.image,
    title: blog.title,
    subtitle: blog.subtitle,
    accent: blog.accent,
    url: `/blog/${blog.id}`,
  }));

  return (
    <section className="blog-section">
      <div className="blog-container">
        <h1 className="blog-heading">Our Blog</h1>

        <p className="blog-description">
          Explore our latest articles and stories.
        </p>

        <ChromaGrid
          items={items}
          columns={2}
          minCardWidth={180}
          gap={12}
          radius={260}
          reveal="spotlight"
          aspectRatio="3 / 2"
          cardRadius={22}
          showInfo
          frame={false}
          softness={0.6}
          damping={0.45}
          fadeOut={0.6}
          grayscale={1}
          dim={0.12}
          glow={0.5}
          borderGlow={1}
        />
      </div>
    </section>
  );
}

export default Blog;