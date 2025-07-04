import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => (
  <header className="app-header">
    <h1>Lost & Found</h1>
    <nav>
      <Link to="/lost">Lost</Link>
      <Link to="/found">Found</Link>
      <Link to="/dashboard">Dashboard</Link>
      <Link to="/search">Search</Link>

    </nav>
  </header>
);

export default Header;
