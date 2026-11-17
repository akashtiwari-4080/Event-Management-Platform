
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem("eventifyUsers") || "[]");

    const foundUser = users.find(
      (user) =>
        user.email === form.email &&
        user.password === form.password
    );

    if (!foundUser) {
      alert("Invalid email or password. Register first.");
      return;
    }

    localStorage.setItem("eventifyUser", JSON.stringify(foundUser));
    navigate("/dashboard");
    window.location.reload();
  };

  return (
    <section className="auth-section">
      <form className="auth-card" onSubmit={handleSubmit}>
        <span className="eyebrow">WELCOME BACK</span>
        <h1>Login to Eventify</h1>
        <p>Access your events and manage your registrations.</p>

        <label>Email Address</label>
        <input
          name="email"
          type="email"
          placeholder="Enter your email"
          value={form.email}
          onChange={handleChange}
          required
        />

        <label>Password</label>
        <input
          name="password"
          type="password"
          placeholder="Enter your password"
          value={form.password}
          onChange={handleChange}
          required
        />

        <button className="btn btn-primary auth-submit" type="submit">
          Login
        </button>

        <p className="auth-switch">
          Don't have an account? <Link to="/register">Register</Link>
        </p>
      </form>
    </section>
  );
}

export default Login;
