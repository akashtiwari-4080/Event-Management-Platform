
import { useParams, Link } from "react-router-dom";
import { CalendarDays, MapPin, Clock, UserRound } from "lucide-react";
import { events } from "../data/events";

function EventDetails() {
  const { id } = useParams();
  const event = events.find((item) => item.id === id);

  if (!event) {
    return (
      <div className="empty-state">
        <h2>Event not found</h2>
        <Link to="/events" className="btn btn-primary">
          Back to Events
        </Link>
      </div>
    );
  }

  const registerForEvent = () => {
    const user = JSON.parse(localStorage.getItem("eventifyUser") || "null");

    if (!user) {
      alert("Please login before registering.");
      return;
    }

    const registrations = JSON.parse(
      localStorage.getItem("eventifyRegistrations") || "[]"
    );

    if (registrations.some((item) => item.eventId === event.id)) {
      alert("You have already registered for this event.");
      return;
    }

    registrations.push({
      eventId: event.id,
      userEmail: user.email,
    });

    localStorage.setItem(
      "eventifyRegistrations",
      JSON.stringify(registrations)
    );

    alert("Demo registration successful!");
  };

  return (
    <section className="section details-page">
      <img className="details-image" src={event.image} alt={event.title} />

      <div className="details-layout">
        <div>
          <span className="event-category">{event.category}</span>
          <h1>{event.title}</h1>
          <p className="details-description">{event.description}</p>

          <h3>About this event</h3>
          <p>{event.description}</p>

          <button
            className="btn btn-primary btn-large"
            onClick={registerForEvent}
          >
            Register for Event
          </button>
        </div>

        <aside className="details-info">
          <h3>Event Information</h3>

          <p><CalendarDays /> {event.date}</p>
          <p><Clock /> {event.time}</p>
          <p><MapPin /> {event.location}</p>
          <p><UserRound /> {event.organizer}</p>

          <h2>{event.price}</h2>
        </aside>
      </div>
    </section>
  );
}

export default EventDetails;
