
import { Link } from "react-router-dom";
import { Briefcase, CalendarDays, Globe, Send } from "lucide-react";

function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="footer-grid">
        <div className="footer-brand">
          <Link to="/" className="logo">
            <CalendarDays size={25} />
            Eventify
          </Link>

          <p>
            Discover events, connect with people and create
            unforgettable experiences.
          </p>

          <div className="social-links">
            <a href="https://instagram.com" aria-label="Instagram">
              <Globe />
            </a>
            <a href="https://linkedin.com" aria-label="LinkedIn">
              <Send />
            </a>
            <a href="https://github.com" aria-label="GitHub">
              <Briefcase />
            </a>
          </div>
        </div>

        <div>
          <h4>Explore</h4>
          <Link to="/events">All Events</Link>
          <Link to="/events">Categories</Link>
          <Link to="/register">Create Account</Link>
        </div>

        <div>
          <h4>Company</h4>
          <a href="/#about">About Us</a>
          <a href="/#contact">Contact</a>
          <a href="/#about">Privacy Policy</a>
        </div>

        <div>
          <h4>For Organizers</h4>
          <Link to="/register">Become an Organizer</Link>
          <Link to="/login">Organizer Login</Link>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 Eventify. All rights reserved.</p>
        <p>Made for event lovers.</p>
      </div>
    </footer>
  );
}

export default Footer;
