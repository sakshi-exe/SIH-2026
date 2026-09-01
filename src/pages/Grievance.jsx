import { useState } from "react";
import { Link } from "react-router-dom";

function Grievance() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    category: "",
    description: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [referenceId, setReferenceId] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const id = `CS-${Date.now().toString().slice(-6)}`;

    setReferenceId(id);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div>
        <header>
          <Link to="/">← Home</Link>
          <h1>Grievance Registered</h1>
        </header>

        <main>
          <h2>✅ Complaint Submitted Successfully</h2>

          <p>Your grievance has been registered.</p>

          <p>
            <strong>Reference ID:</strong> {referenceId}
          </p>

          <p>
            Keep this reference ID to track your grievance status.
          </p>

          <Link to="/chat">
            <button>Back to AI Assistant</button>
          </Link>

          <button
            onClick={() => {
              setSubmitted(false);
              setFormData({
                name: "",
                phone: "",
                category: "",
                description: "",
              });
            }}
          >
            Register Another Grievance
          </button>
        </main>
      </div>
    );
  }

  return (
    <div>
      <header>
        <Link to="/">← Home</Link>

        <h1>Register Grievance</h1>

        <p>
          Submit your complaint and get a reference ID for tracking.
        </p>
      </header>

      <main>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Name</label>

            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label>Mobile Number</label>

            <input
              type="tel"
              name="phone"
              placeholder="Enter mobile number"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label>Grievance Category</label>

            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              required
            >
              <option value="">Select category</option>
              <option value="Cooperative">Cooperative</option>
              <option value="Agriculture">Agriculture</option>
              <option value="Government Scheme">
                Government Scheme
              </option>
              <option value="Financial">Financial</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div>
            <label>Describe your grievance</label>

            <textarea
              name="description"
              placeholder="Describe your complaint..."
              value={formData.description}
              onChange={handleChange}
              rows="5"
              required
            />
          </div>

          <button type="submit">
            Submit Grievance
          </button>
        </form>
      </main>
    </div>
  );
}

export default Grievance;