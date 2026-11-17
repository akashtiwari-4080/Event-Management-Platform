
import { Link } from "react-router-dom";
import { CalendarDays, MapPin } from "lucide-react";
import { events } from "../data/events";

function UserDashboard() {
  const user = JSON.parse(localStorage.getItem("eventifyUser") || "null");

  const registrations = JSON.parse(
    localStorage.getItem("eventifyRegistrations") || "[]"
  );

  const myEvents = registrations
    .filter((item) => item.userEmail === user?.email)
    .map((item) => events.find((event) => event.id === item.eventId))
    .filter(Boolean);

  return (
    <section className="section dashboard">
      <div className="page-heading">
        <span className="eyebrow">ATTENDEE DASHBOARD</span>
        <h1>Welcome, {user?.name || "User"}!</h1>
        <p>Manage your event registrations here.</p>
      </div>

      <div className="dashboard-stats">
        <div className="stat-card">
          <CalendarDays />
          <h2>{myEvents.length}</h2>
          <p>Registered Events</p>
        </div>
      </div>

      <div className="results-heading">
        <h2>My Events</h2>
        <Link to="/events" className="text-link">Explore Events</Link>
      </div>

      {myEvents.length ? (
        <div className="events-grid">
          {myEvents.map((event) => (
            <div className="event-card" key={event.id}>
              <img src={event.image} alt={event.title} />
              <div className="event-content">
                <h3>{event.title}</h3>
                <p><CalendarDays size={16} /> {event.date}</p>
                <p><MapPin size={16} /> {event.location}</p>
                <span className="status-tag">Registered</span>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="empty-state">
          <h3>You haven't registered for any events yet.</h3>
          <Link to="/events" className="btn btn-primary">
            Explore Events
          </Link>
        </div>
      )}
    </section>
  );
}

export default UserDashboard;
