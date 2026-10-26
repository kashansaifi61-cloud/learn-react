
import { useLocation } from "react-router-dom";
import PillNav from "./PillNav";
import logo from "../logo.svg";

function Header() {
  const location = useLocation();

  return (
    <header className="site-header">
      <PillNav
        logo={logo}
        logoAlt="MyWebsite"
        items={[
          { label: "Home", href: "/" },
          { label: "About Us", href: "/about-us" },
          { label: "Contact Us", href: "/contact-us" },
          { label: "Blog", href: "/blog" },
        ]}
        activeHref={location.pathname}
        itemStyle="plain"
        hoverEffect="glide"
        indicator="pill"
        layout="split"
        surface="glass"
        size="md"
        bounce={0.3}
        stretch={0.5}
        collapse="auto"
        intro
      />
    </header>
  );
}

export default Header;


