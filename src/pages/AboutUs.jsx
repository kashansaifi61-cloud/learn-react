import CardSwap from "../components/CardSwap";
import cardimages from "../images/Screenshot 2026-10-26 132947.png";
import cardimages1 from "../images/Screenshot 2026-10-26 122151.png";
import cardimages2 from "../images/Screenshot 2026-10-26 152516.png";
import cardimages3 from "../images/Screenshot 2026-10-26 153830.png";

function AboutUs() {
  const items = [
    { title: "Golden hour", image: cardimages },
    { title: "Canola field", image: cardimages1 },
    { title: "The pier", image: cardimages2 },
    { title: "Pink drift", image: cardimages3 },
  ];

  return (
    <section className="page container">
      <h1>About Us</h1>

      <p>
        We are dedicated to providing useful information, quality services, and
        a great user experience.
      </p>
      <div style={{ height: 600 }}>
        <CardSwap
          items={items}
          delay={4000}
          cardDistance={60}
          verticalDistance={70}
          depth={90}
          skewAmount={6}
          visibleCards={4}
          cardRadius={18}
          speed={1}
          bounce={0.35}
          parallax={0.5}
          hoverSpread={0.12}
          dim={0.5}
          autoplay
          pauseOnHover
          draggable
        />
      </div>
    </section>
  );
}

export default AboutUs;
