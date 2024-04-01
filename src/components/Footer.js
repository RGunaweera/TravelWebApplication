import React from "react";
import { Button } from "./Button";
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-background">
      <div className="footer-container">
        <div className="section-1">
          <section className="footer-subscription-heading">
            <h2>Travel with Us</h2>
            <p className="footer-subscription">
              <b>Join the Adventure newsletter to recieve our best vacation deals.</b><br></br>
              <br></br>Embark on unforgettable journeys with our travel agency. Discover exotic destinations, indulge in luxurious accommodations, and create lifelong memories with our expertly curated travel experiences.
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
              <Link to="/sign-up">Packages</Link>
              <br></br>
              <Link to="/sign-up">Shop</Link>
              <br></br>
              <Link to="/sign-up">About</Link>
              <br></br>
              <Link to="/sign-up">News</Link>
              <br></br>
              <Link to="/sign-up">Contact</Link>
            </div>
            <div className="footer-link-items">
              <h3>Partners</h3>
              <Link to="/sign-up">Booking</Link>
              <br></br>
              <Link to="/sign-up">Rentalcar</Link>
              <br></br>
              <Link to="/sign-up">Trivago</Link>
              <br></br>
              <Link to="/sign-up">TripAdvisor</Link>
              <br></br>
              <Link to="/sign-up">HostelWorld</Link>
            </div>
            <div className="footer-link-items">
              <h3>Our Agencies</h3>
              <Link to="/sign-up">London</Link>
              <br></br>
              <Link to="/sign-up">Australia</Link>
              <br></br>
              <Link to="/sign-up">USA</Link>
              <br></br>
              <Link to="/sign-up">Germany</Link>
              <br></br>
              <Link to="/sign-up">France</Link>
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
            <small className="website-rights">Copyright Reserved TRAVEL &copy; 2024</small>

            <div className="social-icons">
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
