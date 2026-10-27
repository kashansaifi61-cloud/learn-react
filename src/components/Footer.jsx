
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <style>
        {`
          .footer-home-link {
            color: inherit;
            text-decoration: none;
            cursor: pointer;
          }

          .footer-home-link:hover {
            text-decoration: underline;
          }
        `}
      </style>

      <footer className="footer">
        <div className="container">
          <p>
            &copy; {new Date().getFullYear()}{" "}
            <Link to="/" className="footer-home-link">
              MyWebsite
            </Link>
            . All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
