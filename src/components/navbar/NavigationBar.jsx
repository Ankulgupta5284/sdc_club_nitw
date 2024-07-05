import { useState } from "react";
import { Link } from "react-router-dom";
import ClubLogo from "../../asset/images/club-logo.png";
import { CloseX, Menu } from "../../asset/icons/icons";
import "./navbar.css";

function NavigationBar() {
  const [isSwitch, setIsSwitch] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbrand">
        <Link className="nav-img-link" to="/homepage">
          <img className="navbar-brand-img" src={ClubLogo} alt="club-logo" />
        </Link>
        <div className="navbar-title">
          <h1>Software Development Club</h1>
        </div>
        <button
          className="responsive-btn"
          onClick={() => setIsSwitch(prev => !prev)}
          type="button"
          tabIndex={0}
        >
          {isSwitch ? (
            <svg className="w-12 h-12">{CloseX}</svg>
          ) : (
            <svg className="w-12 h-12 text-black hover:text-white">
              {Menu}
            </svg>
          )}
        </button>
      </div>

      <ul className={`navbar-nav ${isSwitch ? "responsive" : ""}`}>
        <li className="navbar-item">
          <Link className="navbar-link" to="/homepage">Home</Link>
        </li>
        <li className="navbar-item">
          <Link className="navbar-link" to="/events">Events</Link>
        </li>
        <li className="navbar-item">
          <div className="dropdown">
            <Link className="navbar-link" to="/resources" state={{ option: 1 }}>Resources</Link>
            <div className="dropdown-content">
              <Link className="dropdown-link" to="/resources" state={{ option: 1 }}>Tutorials</Link>
              <Link className="dropdown-link" to="/resources" state={{ option: 2 }}>Readings</Link>
              <Link className="dropdown-link" to="/resources" state={{ option: 3 }}>Organizations</Link>
            </div>
          </div>
        </li>
        <li className="navbar-item">
          <div className="dropdown">
            <Link className="navbar-link" to="/domains" state={{ option: 1 }}>Domains</Link>
            <div className="dropdown-content">
              <Link className="dropdown-link" to="/domains" state={{ option: 1 }}>CODING</Link>
              <Link className="dropdown-link" to="/domains" state={{ option: 2 }}>DESIGN</Link>
              <Link className="dropdown-link" to="/domains" state={{ option: 3 }}>AI ML</Link>
              <Link className="dropdown-link" to="/domains" state={{ option: 4 }}>Cyber Security</Link>
            </div>
          </div>
        </li>
      </ul>
    </nav>
  );
}

export default NavigationBar;
