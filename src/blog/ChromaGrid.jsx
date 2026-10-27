
import { useRef } from "react";
import "./ChromaGrid.css";

function ChromaGrid({
  items = [],
  columns = 3,
  minCardWidth = 180,
  gap = 12,
  radius = 260,
  reveal = "spotlight",
  aspectRatio = "3 / 2",
  cardRadius = 22,
  showInfo = true,
  frame = false,
  softness = 0.6,
  damping = 0.45,
  fadeOut = 0.6,
  grayscale = 1,
  dim = 0.12,
  glow = 0.5,
  borderGlow = 1,
}) {
  const gridRef = useRef(null);
  const animationRef = useRef(null);
  const targetRef = useRef({ x: -9999, y: -9999, power: 0 });
  const currentRef = useRef({ x: -9999, y: -9999, power: 0 });

  const updatePointer = (event) => {
    const grid = gridRef.current;

    if (!grid) return;

    const rect = grid.getBoundingClientRect();

    targetRef.current = {
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
      power: 1,
    };

    if (animationRef.current) return;

    const animate = () => {
      const target = targetRef.current;
      const current = currentRef.current;

      const ease = Math.min(
        1,
        Math.max(0.05, 1 - damping)
      );

      current.x += (target.x - current.x) * ease;
      current.y += (target.y - current.y) * ease;
      current.power += (target.power - current.power) * ease;

      if (gridRef.current) {
        gridRef.current.style.setProperty(
          "--chroma-x",
          `${current.x}px`
        );

        gridRef.current.style.setProperty(
          "--chroma-y",
          `${current.y}px`
        );

        gridRef.current.style.setProperty(
          "--chroma-power",
          current.power.toString()
        );
      }

      const moving =
        Math.abs(target.x - current.x) > 0.5 ||
        Math.abs(target.y - current.y) > 0.5 ||
        Math.abs(target.power - current.power) > 0.01;

      if (moving) {
        animationRef.current = requestAnimationFrame(animate);
      } else {
        animationRef.current = null;
      }
    };

    animationRef.current = requestAnimationFrame(animate);
  };

  const handlePointerLeave = () => {
    targetRef.current = {
      ...targetRef.current,
      power: 0,
    };

    if (animationRef.current) return;

    const animate = () => {
      const grid = gridRef.current;

      if (!grid) {
        animationRef.current = null;
        return;
      }

      const target = targetRef.current;
      const current = currentRef.current;
      const ease = Math.min(1, Math.max(0.05, 1 - damping));

      current.power += (target.power - current.power) * ease;

      grid.style.setProperty(
        "--chroma-power",
        current.power.toString()
      );

      if (Math.abs(target.power - current.power) > 0.01) {
        animationRef.current = requestAnimationFrame(animate);
      } else {
        current.power = 0;
        grid.style.setProperty("--chroma-power", "0");
        animationRef.current = null;
      }
    };

    animationRef.current = requestAnimationFrame(animate);
  };

  const handleCardPointerMove = (event) => {
    const card = event.currentTarget;
    const rect = card.getBoundingClientRect();

    card.style.setProperty(
      "--chroma-ox",
      `${event.clientX - rect.left}px`
    );

    card.style.setProperty(
      "--chroma-oy",
      `${event.clientY - rect.top}px`
    );
  };

  const variables = {
    "--chroma-cols": columns,
    "--chroma-min": `${minCardWidth}px`,
    "--chroma-gap": `${gap}px`,
    "--chroma-r": `${radius}px`,
    "--chroma-radius": `${cardRadius}px`,
    "--chroma-ratio": aspectRatio,
    "--chroma-gray": grayscale,
    "--chroma-dim": dim,
    "--chroma-glow": glow,
    "--chroma-border": borderGlow,
    "--chroma-fade": `${fadeOut}s`,
    "--chroma-stops": `rgba(255,255,255,${softness}) 0%, transparent 100%`,
  };

  return (
    <div
      ref={gridRef}
      className={`chroma-grid ${frame ? "has-frame" : ""}`}
      data-reveal={reveal}
      style={variables}
      onPointerMove={updatePointer}
      onPointerLeave={handlePointerLeave}
    >
      {frame && <div className="chroma-frame-rim" />}

      <div className="chroma-grid-inner">
        {items.map((item, index) => {
          const cardStyle = {
            "--chroma-accent": item.accent || "#3fb8ff",
          };

          const cardContent = (
            <>
              <div className="chroma-wash" />

              <div className="chroma-media">
                <img
                  className="chroma-mono"
                  src={item.image}
                  alt={item.title || "Blog image"}
                  loading="lazy"
                />

                <img
                  className="chroma-color"
                  src={item.image}
                  alt=""
                  aria-hidden="true"
                />

                <div className="chroma-media-rim" />
              </div>

              {showInfo && (
                <div className="chroma-info">
                  <div className="chroma-title">
                    {item.title}
                  </div>

                  <div className="chroma-subtitle">
                    {item.subtitle}
                  </div>
                </div>
              )}

              <div className="chroma-card-rim" />
              <div className="chroma-card-glow" />
            </>
          );

          return item.url ? (
            <a
              key={item.id ?? index}
              href={item.url}
              className="chroma-card"
              style={cardStyle}
              onPointerMove={handleCardPointerMove}
            >
              {cardContent}
            </a>
          ) : (
            <div
              key={item.id ?? index}
              className="chroma-card"
              style={cardStyle}
              onPointerMove={handleCardPointerMove}
            >
              {cardContent}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ChromaGrid;