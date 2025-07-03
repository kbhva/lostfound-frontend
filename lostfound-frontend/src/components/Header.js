import { Link } from "react-router-dom";
import "./Header.css"; // Style this separately

const Header = () => (
  <header className="app-header">
    <h1>Lost & Found</h1>
    <nav>
      <Link to="/lost">Lost</Link>
      <Link to="/found">Found</Link>
    </nav>
  </header>
);

export default Header;
