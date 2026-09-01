import { Link } from "react-router-dom";

const schemes = [
  {
    id: 1,
    title: "PM Fasal Bima Yojana",
    shortName: "PMFBY",
    description:
      "Crop insurance support for farmers against crop loss due to natural risks.",
    category: "Agriculture",
  },
  {
    id: 2,
    title: "Cooperative Society Support",
    shortName: "Cooperative Services",
    description:
      "Information about cooperative societies, membership and available services.",
    category: "Cooperative",
  },
  {
    id: 3,
    title: "Agricultural Support",
    shortName: "Farmer Support",
    description:
      "Explore information related to agricultural assistance and farmer services.",
    category: "Agriculture",
  },
];

function Schemes() {
  return (
    <div>
      <header>
        <Link to="/">← Home</Link>

        <h1>Government Schemes</h1>

        <p>
          Find information about government schemes and cooperative services.
        </p>
      </header>

      <main>
        {schemes.map((scheme) => (
          <div key={scheme.id}>
            <span>{scheme.category}</span>

            <h2>{scheme.title}</h2>

            <p>{scheme.description}</p>

            <button>View Details</button>
          </div>
        ))}
      </main>

      <footer>
        <p>
          Information should be verified using official government sources.
        </p>
      </footer>
    </div>
  );
}

export default Schemes;