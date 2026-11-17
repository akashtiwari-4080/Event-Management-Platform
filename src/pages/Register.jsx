
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "attendee",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem("eventifyUsers") || "[]");

    const exists = users.some((user) => user.email === form.email);

    if (exists) {
      alert("An account with this email already exists.");
      return;
    }

    const newUser = { ...form };

    users.push(newUser);

    localStorage.setItem("eventifyUsers", JSON.stringify(users));
    localStorage.setItem("eventifyUser", JSON.stringify(newUser));

    alert("Demo account created successfully!");
    navigate("/dashboard");
    window.location.reload();
  };

  return (
    <section className="auth-section">
      <form className="auth-card" onSubmit={handleSubmit}>
        <span className="eyebrow">JOIN EVENTIFY</span>
        <h1>Create Account</h1>
        <p>Start discovering and managing events.</p>

        <label>Full Name</label>
        <input
          name="name"
          type="text"
          placeholder="Your name"
          value={form.name}
          onChange={handleChange}
          required
        />

        <label>Email Address</label>
        <input
          name="email"
          type="email"
          placeholder="Your email"
          value={form.email}
          onChange={handleChange}
          required
        />

        <label>Password</label>
        <input
          name="password"
          type="password"
          placeholder="Create a password"
          minLength={6}
          value={form.password}
          onChange={handleChange}
          required
        />

        <label>Account Type</label>
        <select name="role" value={form.role} onChange={handleChange}>
          <option value="attendee">Attendee</option>
          <option value="organizer">Organizer</option>
        </select>

        <button className="btn btn-primary auth-submit" type="submit">
          Create Account
        </button>

        <p className="auth-switch">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </form>
    </section>
  );
}

export default Register;
