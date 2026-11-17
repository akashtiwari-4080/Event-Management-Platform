
import { Link, NavLink, useNavigate } from "react-router-dom";
import { CalendarDays, Menu, X } from "lucide-react";
import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("eventifyUser") || "null");

  const logout = () => {
    localStorage.removeItem("eventifyUser");
    navigate("/");
    window.location.reload();
  };

  return (
    <header className="navbar">
      <Link to="/" className="logo">
        <CalendarDays size={27} />
        <span>Eventify</span>
      </Link>

      <button
        className="menu-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation"
      >
        {menuOpen ? <X /> : <Menu />}
      </button>

      <nav className={`nav-links ${menuOpen ? "active" : ""}`}>
        <NavLink to="/" onClick={() => setMenuOpen(false)}>
          Home
        </NavLink>

        <NavLink to="/events" onClick={() => setMenuOpen(false)}>
          Explore Events
        </NavLink>

        <a href="/#about" onClick={() => setMenuOpen(false)}>
          About
        </a>

        <a href="/#contact" onClick={() => setMenuOpen(false)}>
          Contact
        </a>
      </nav>

      <div className="nav-actions">
        {user ? (
          <>
            <Link to="/dashboard" className="btn btn-outline">
              Dashboard
            </Link>
            <button className="btn btn-primary" onClick={logout}>
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login" className="login-link">
              Login
            </Link>
            <Link to="/register" className="btn btn-primary">
              Get Started
            </Link>
          </>
        )}
      </div>
    </header>
  );
}

export default Navbar;
