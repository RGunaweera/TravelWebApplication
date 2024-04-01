import React from "react";
import { Button } from "./Button";
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-background">
      <div className="footer-container">
        <div className="section-1">
          <section className="footer-subscription">
            <h2>Travel with Us</h2>
            <p className="footer-subscription-heading">
              Join the Adventure newsletter to recieve our best vacation deals.
            </p>

            <div className="input-areas">
              <form>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="footer-input"
                ></input>
                <Button buttonStyle="btn--outline">Subscribe</Button>
              </form>
            </div>
          </section>
          <div className="footer-links">
            <div className="footer-link-items">
              <h3>About Us</h3>
              <Link to="/sign-up">How it works</Link>
              <br></br>
              <Link to="/sign-up">Testimonials</Link>
              <br></br>
              <Link to="/sign-up">Investors</Link>
              <br></br>
              <Link to="/sign-up">Careers</Link>
              <br></br>
              <Link to="/sign-up">Terms of service</Link>
            </div>
            <div className="footer-link-items">
              <h3>About Us</h3>
              <Link to="/sign-up">How it works</Link>
              <br></br>
              <Link to="/sign-up">Testimonials</Link>
              <br></br>
              <Link to="/sign-up">Investors</Link>
              <br></br>
              <Link to="/sign-up">Careers</Link>
              <br></br>
              <Link to="/sign-up">Terms of service</Link>
            </div>
            <div className="footer-link-items">
              <h3>About Us</h3>
              <Link to="/sign-up">How it works</Link>
              <br></br>
              <Link to="/sign-up">Testimonials</Link>
              <br></br>
              <Link to="/sign-up">Investors</Link>
              <br></br>
              <Link to="/sign-up">Careers</Link>
              <br></br>
              <Link to="/sign-up">Terms of service</Link>
            </div>
          </div>
        </div>

        <section className="social-media">
          <div className="social-media-wrap">
            <div className="footer-logo">
              <Link to="/" className="social-logo">
                TRAVEL <i class="fa-brands fa-typo3"></i>
              </Link>
            </div>
            <small className="website-rights">TRAVEL &copy 2024</small>
            <div className="social icons">
              <Link
                className="social-icon-link facebook"
                to="/"
                target="_blank"
                aria-label="Facebook"
              >
                <i class="fa-brands fa-facebook-f"></i>
              </Link>
              <Link
                className="social-icon-link instagram"
                to="/"
                target="_blank"
                aria-label="Instagram"
              >
                <i class="fa-brands fa-instagram"></i>
              </Link>
              <Link
                className="social-icon-link twitter"
                to="/"
                target="_blank"
                aria-label="Twitter"
              >
                <i class="fa-brands fa-twitter"></i>
              </Link>
              <Link
                className="social-icon-link youtube"
                to="/"
                target="_blank"
                aria-label="Youtube"
              >
                <i class="fa-brands fa-youtube"></i>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Footer;
