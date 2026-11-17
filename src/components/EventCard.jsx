
import { CalendarDays, MapPin, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

function EventCard({ event }) {
  const formattedDate = new Date(event.date).toLocaleDateString(
    "en-IN",
    {
      day: "numeric",
      month: "short",
      year: "numeric",
    }
  );

  return (
    <article className="event-card">
      <div className="event-image">
        <img src={event.image} alt={event.title} />

        <span className="event-category">{event.category}</span>
      </div>

      <div className="event-content">
        <div className="event-date">
          <CalendarDays size={16} />
          {formattedDate}
        </div>

        <h3>{event.title}</h3>

        <p className="event-location">
          <MapPin size={16} />
          {event.location}
        </p>

        <div className="event-card-bottom">
          <strong>{event.price}</strong>

          <Link to={`/events/${event.id}`} className="details-link">
            Details <ArrowUpRight size={17} />
          </Link>
        </div>
      </div>
    </article>
  );
}

export default EventCard;
