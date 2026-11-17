import { useState } from "react";
import { events as sampleEvents } from "../data/events";
import { CalendarDays, MapPin, Plus, Trash2 } from "lucide-react";

function OrganizerDashboard() {
  const [myEvents, setMyEvents] = useState(() =>
    JSON.parse(localStorage.getItem("eventifyCreatedEvents") || "[]"),
  );

  const [showForm, setShowForm] = useState(false);

  const [form, setForm] = useState({
    title: "",
    category: "Technology",
    date: "",
    time: "",
    location: "",
    price: "Free",
    description: "",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=900",
  });

  const allEvents = [...myEvents, ...sampleEvents];

  const saveEvents = (updated) => {
    setMyEvents(updated);
    localStorage.setItem("eventifyCreatedEvents", JSON.stringify(updated));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newEvent = {
      ...form,
      id: `custom-${Date.now()}`,
      organizer: "Demo Organizer",
    };

    saveEvents([...myEvents, newEvent]);
    setShowForm(false);

    setForm({
      title: "",
      category: "Technology",
      date: "",
      time: "",
      location: "",
      price: "Free",
      description: "",
      image:
        "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=900",
    });
  };

  const deleteEvent = (id) => {
    if (!window.confirm("Delete this event?")) return;

    saveEvents(myEvents.filter((event) => event.id !== id));
  };

  return (
    <section className="section dashboard">
      <div className="dashboard-header">
        <div>
          <span className="eyebrow">ORGANIZER DASHBOARD</span>
          <h1>Manage Your Events</h1>
          <p>Create and manage your events.</p>
        </div>

        <button
          className="btn btn-primary"
          onClick={() => setShowForm(!showForm)}
        >
          <Plus size={18} /> Create Event
        </button>
      </div>

      <div className="dashboard-stats">
        <div className="stat-card">
          <CalendarDays />
          <h2>{allEvents.length}</h2>
          <p>Available Demo Events</p>
        </div>
        <div className="stat-card">
          <Plus />
          <h2>{myEvents.length}</h2>
          <p>Events You Created</p>
        </div>
      </div>

      {showForm && (
        <form className="event-form" onSubmit={handleSubmit}>
          <h2>Create a New Event</h2>

          <label>Event Title</label>
          <input
            required
            value={form.title}
            onChange={(e) => setForm({ ...form, title: e.target.value })}
            placeholder="Enter event title"
          />

          <label>Category</label>
          <select
            value={form.category}
            onChange={(e) => setForm({ ...form, category: e.target.value })}
          >
            {[
              "Technology",
              "Hackathon",
              "Workshop",
              "Conference",
              "Cultural",
              "Sports",
            ].map((category) => (
              <option key={category}>{category}</option>
            ))}
          </select>

          <label>Date</label>
          <input
            type="date"
            required
            value={form.date}
            onChange={(e) => setForm({ ...form, date: e.target.value })}
          />

          <label>Time</label>
          <input
            type="time"
            required
            value={form.time}
            onChange={(e) => setForm({ ...form, time: e.target.value })}
          />

          <label>Location</label>
          <input
            required
            value={form.location}
            onChange={(e) => setForm({ ...form, location: e.target.value })}
            placeholder="Enter location"
          />

          <label>Price</label>
          <input
            value={form.price}
            onChange={(e) => setForm({ ...form, price: e.target.value })}
          />

          <label>Description</label>
          <textarea
            required
            value={form.description}
            onChange={(e) => setForm({ ...form, description: e.target.value })}
            placeholder="Describe your event"
          />

          <button className="btn btn-primary" type="submit">
            Save Event
          </button>
        </form>
      )}

      <div className="results-heading">
        <h2>Your Created Events</h2>
      </div>

      {myEvents.length ? (
        <div className="events-grid">
          {myEvents.map((event) => (
            <div className="event-card" key={event.id}>
              <img src={event.image} alt={event.title} />
              <div className="event-content">
                <h3>{event.title}</h3>
                <p>
                  <CalendarDays size={16} /> {event.date}
                </p>
                <p>
                  <MapPin size={16} /> {event.location}
                </p>
                <button
                  className="btn btn-danger"
                  onClick={() => deleteEvent(event.id)}
                >
                  <Trash2 size={16} /> Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="empty-state">
          <h3>No events created yet.</h3>
          <p>Use Create Event to add your first event.</p>
        </div>
      )}
    </section>
  );
}

export default OrganizerDashboard;
