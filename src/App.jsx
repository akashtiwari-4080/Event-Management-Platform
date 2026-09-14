import "./index.css";

function App() {
  return (
    <div className="app">
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">Eventify</div>

        <div className="nav-links">
          <a href="#">Home</a>
          <a href="#">Events</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </div>

        <div className="nav-buttons">
          <button className="login-btn">Login</button>
          <button className="register-btn">Register</button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <p className="hero-tag">YOUR EVENTS, YOUR EXPERIENCE</p>

          <h1>
            Discover Events.
            <br />
            Create Memories.
          </h1>

          <p className="hero-description">
            Discover amazing events, connect with people, and create
            unforgettable experiences — all in one place.
          </p>

          <div className="hero-buttons">
            <button className="primary-btn">Explore Events</button>
            <button className="secondary-btn">Create Event</button>
          </div>
        </div>
      </section>

      {/* Search */}
      <section className="search-section">
        <div className="search-box">
          <input
            type="text"
            placeholder="Search for events..."
          />

          <select>
            <option>All Categories</option>
            <option>Technology</option>
            <option>Workshop</option>
            <option>Conference</option>
            <option>Hackathon</option>
            <option>Cultural</option>
            <option>Sports</option>
          </select>

          <button>Search</button>
        </div>
      </section>

      {/* Featured Events */}
      <section className="events-section">
        <div className="section-heading">
          <div>
            <p>DON'T MISS OUT</p>
            <h2>Featured Events</h2>
          </div>

          <a href="#">View All Events →</a>
        </div>

        <div className="events-grid">
          <div className="event-card">
            <div className="event-image">TECH EVENT</div>

            <div className="event-content">
              <span className="category">Technology</span>

              <h3>Tech Innovation Summit</h3>

              <p>📅 25 September 2026</p>
              <p>📍 New Delhi, India</p>

              <button>View Details</button>
            </div>
          </div>

          <div className="event-card">
            <div className="event-image">HACKATHON</div>

            <div className="event-content">
              <span className="category">Hackathon</span>

              <h3>CodeFest 2026</h3>

              <p>📅 2 October 2026</p>
              <p>📍 Bareilly, India</p>

              <button>View Details</button>
            </div>
          </div>

          <div className="event-card">
            <div className="event-image">WORKSHOP</div>

            <div className="event-content">
              <span className="category">Workshop</span>

              <h3>AI & Future Workshop</h3>

              <p>📅 10 October 2026</p>
              <p>📍 Lucknow, India</p>

              <button>View Details</button>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="categories-section">
        <p>EXPLORE</p>
        <h2>Browse Categories</h2>

        <div className="categories">
          <div>💻 Technology</div>
          <div>🚀 Hackathons</div>
          <div>🎓 Workshops</div>
          <div>🎤 Conferences</div>
          <div>🎨 Cultural</div>
          <div>⚽ Sports</div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <h2>Have an Event to Host?</h2>

        <p>
          Create your event and reach thousands of people interested
          in attending.
        </p>

        <button>Create Your Event</button>
      </section>

      {/* Footer */}
      <footer>
        <div>
          <h2>Eventify</h2>
          <p>Your platform for discovering and managing events.</p>
        </div>

        <div>
          <h4>Quick Links</h4>
          <p>Events</p>
          <p>About</p>
          <p>Contact</p>
        </div>

        <div>
          <h4>Connect</h4>
          <p>Instagram</p>
          <p>LinkedIn</p>
          <p>GitHub</p>
        </div>
      </footer>
    </div>
  );
}

export default App;