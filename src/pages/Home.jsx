import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Cooperative Sahayak</h1>

      <p>
        Your multilingual AI assistant for cooperative services,
        government schemes and grievance support.
      </p>

      <div>
        <Link to="/chat">
          <button>Ask Cooperative Sahayak</button>
        </Link>

        <Link to="/schemes">
          <button>Explore Schemes</button>
        </Link>

        <Link to="/grievance">
          <button>Register Grievance</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;