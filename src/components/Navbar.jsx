import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();

  return (
    <nav>
      <div>
        <Link to="/">
          <strong>Cooperative Sahayak</strong>
        </Link>
      </div>

      <div>
        <Link to="/">Home</Link>

        <Link to="/chat">AI Assistant</Link>

        <Link to="/schemes">Schemes</Link>

        <Link to="/grievance">Grievance</Link>
      </div>

      <div>
        <span>
          {location.pathname === "/chat"
            ? "AI Assistant"
            : "Multilingual Support"}
        </span>
      </div>
    </nav>
  );
}

export default Navbar;