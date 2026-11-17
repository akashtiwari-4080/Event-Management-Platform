
import { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";

import EventCard from "../components/EventCard";
import SearchBar from "../components/SearchBar";
import { events } from "../data/events";

function Events() {
  const [searchParams] = useSearchParams();

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState(
    searchParams.get("category") || "All"
  );

  const filteredEvents = useMemo(() => {
    return events.filter((event) => {
      const matchesSearch =
        event.title.toLowerCase().includes(search.toLowerCase()) ||
        event.location.toLowerCase().includes(search.toLowerCase());

      const matchesCategory =
        category === "All" || event.category === category;

      return matchesSearch && matchesCategory;
    });
  }, [search, category]);

  return (
    <section className="section events-page">
      <div className="page-heading">
        <span className="eyebrow">EXPLORE AND DISCOVER</span>
        <h1>Discover All Events</h1>
        <p>Find the perfect event and make new memories.</p>
      </div>

      <SearchBar
        search={search}
        setSearch={setSearch}
        category={category}
        setCategory={setCategory}
      />

      <div className="results-heading">
        <h2>Available Events</h2>
        <span>{filteredEvents.length} events found</span>
      </div>

      {filteredEvents.length > 0 ? (
        <div className="events-grid">
          {filteredEvents.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      ) : (
        <div className="empty-state">
          <h3>No events found</h3>
          <p>Try another search term or category.</p>
          <button
            className="btn btn-primary"
            onClick={() => {
              setSearch("");
              setCategory("All");
            }}
          >
            Clear Filters
          </button>
        </div>
      )}
    </section>
  );
}

export default Events;
