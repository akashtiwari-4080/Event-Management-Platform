
import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Code, Trophy, GraduationCap, Music, Dumbbell, Mic } from "lucide-react";

import Hero from "../components/Hero";
import SearchBar from "../components/SearchBar";
import EventCard from "../components/EventCard";
import { events } from "../data/events";

function Home() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const filteredEvents = events.filter((event) => {
    const matchesSearch =
      event.title.toLowerCase().includes(search.toLowerCase()) ||
      event.location.toLowerCase().includes(search.toLowerCase());

    const matchesCategory =
      category === "All" || event.category === category;

    return matchesSearch && matchesCategory;
  });

  const categories = [
    { name: "Technology", icon: Code },
    { name: "Hackathon", icon: Trophy },
    { name: "Workshop", icon: GraduationCap },
    { name: "Conference", icon: Mic },
    { name: "Cultural", icon: Music },
    { name: "Sports", icon: Dumbbell },
  ];

  return (
    <>
      <Hero />

      <section className="home-search">
        <SearchBar
          search={search}
          setSearch={setSearch}
          category={category}
          setCategory={setCategory}
        />

        <Link to="/events" className="btn btn-primary">
          Search Events
        </Link>
      </section>

      <section className="section" id="events">
        <div className="section-heading">
          <div>
            <span className="eyebrow">DON'T MISS OUT</span>
            <h2>Featured Events</h2>
            <p>Find exciting events happening around you.</p>
          </div>

          <Link to="/events" className="text-link">
            View All Events <ArrowRight size={17} />
          </Link>
        </div>

        <div className="events-grid">
          {filteredEvents.slice(0, 3).map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>

        {filteredEvents.length === 0 && (
          <p className="empty-state">No events found.</p>
        )}
      </section>

      <section className="categories-section" id="about">
        <div className="section-heading centered">
          <div>
            <span className="eyebrow">EXPLORE YOUR INTERESTS</span>
            <h2>Browse Categories</h2>
            <p>Find events based on what you love.</p>
          </div>
        </div>

        <div className="categories-grid">
          {categories.map(({ name, icon: Icon }) => (
            <Link
              key={name}
              to={`/events?category=${encodeURIComponent(name)}`}
              className="category-card"
            >
              <Icon size={27} />
              <strong>{name}</strong>
              <ArrowRight size={17} />
            </Link>
          ))}
        </div>
      </section>

      <section className="cta-section">
        <div>
          <span className="eyebrow">FOR EVENT ORGANIZERS</span>
          <h2>Have an Event to Host?</h2>
          <p>
            Create your event, reach your audience and manage
            registrations from one place.
          </p>
        </div>

        <Link to="/register" className="btn btn-light btn-large">
          Become an Organizer <ArrowRight size={18} />
        </Link>
      </section>
    </>
  );
}

export default Home;
