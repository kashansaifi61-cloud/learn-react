import FlexCarousel from "../components/FlexCarousel";
import images from "../images/Screenshot 2026-10-26 132947.png";
import images1 from "../images/Screenshot 2026-10-26 132947.png";
import images2 from "../images/Screenshot 2026-10-26 152516.png";



function Home() {

  

  const items = [
    { src: images, alt: "A chrome sculpture", title: "Iridescence" },
    {
      src: images1,
      alt: "A figure on a white set",
      title: "White Room",
    },
    {
      src: images2,
      alt: "A clay bust in profile",
      title: "Clay Study",
      subtitle: "Studio 04",
    },
  ];

  return (
    <section className="page container">
      <h1>Welcome to Home Page</h1>

      <p>
        Welcome to our website. Explore our services, latest articles, and
        updates.
      </p>

      <div style={{ width: "100%", height: "560px", position: "relative" }}>
        <FlexCarousel
          items={items}
          preset="liquid"
          intro="rise"
          cardHeight={0.5}
          gap={12}
          squeeze={0.2}
          focusOnClick
          captions
          fit="natural"
          radius={0}
          lensWidth={0.74}
          lensHeight={1.18}
          tilt={62}
          roundness={1}
          bend={0.34}
          reach={0.38}
          curl="twist"
          dispersion={0.45}
          liquid={0}
          followCursor={false}
          autoplay={false}
          interval={4}
          captureWheel
        />
      </div>
    </section>
  );
}

export default Home;
