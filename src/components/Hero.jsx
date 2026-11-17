
import { ArrowRight, CalendarDays } from "lucide-react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <span className="eyebrow">
          <CalendarDays size={16} />
          YOUR EVENTS, YOUR EXPERIENCE
        </span>

        <h1>
          Discover Events.
          <br />
          <span>Create Memories.</span>
        </h1>

        <p>
          Discover amazing events, connect with people and create
          unforgettable experiences — all in one place.
        </p>

        <div className="hero-actions">
          <Link to="/events" className="btn btn-primary btn-large">
            Explore Events <ArrowRight size={18} />
          </Link>

          <Link to="/register" className="btn btn-outline btn-large">
            Create Event
          </Link>
        </div>

        <div className="hero-stats">
          <div>
            <strong>100+</strong>
            <span>Events</span>
          </div>
          <div>
            <strong>50+</strong>
            <span>Organizers</span>
          </div>
          <div>
            <strong>1K+</strong>
            <span>Attendees</span>
          </div>
        </div>
      </div>

      <div className="hero-visual">
        <img
          src="https://images.unsplash.com/photo-1506157786151-b8491531f063?w=1000"
          alt="People attending a live event"
        />
        <div className="floating-card">
          <CalendarDays size={20} />
          <div>
            <strong>Find your next event</strong>
            <span>Something exciting is waiting</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
