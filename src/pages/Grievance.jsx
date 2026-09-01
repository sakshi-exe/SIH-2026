import React, { useMemo, useState } from "react";

const createGrievanceId = () => {
  const random = Math.floor(100000 + Math.random() * 900000);
  return `CS-${random}`;
};

const Grievance = () => {
  const [form, setForm] = useState({
    name: "",
    mobile: "",
    category: "",
    description: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});
  const [grievanceId, setGrievanceId] = useState("");

  const descriptionLength = useMemo(() => form.description.length, [form.description]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validate = () => {
    const nextErrors = {};

    if (!form.name.trim()) nextErrors.name = "Full name is required.";
    if (!/^\d{10}$/.test(form.mobile.trim())) nextErrors.mobile = "Enter a valid 10-digit mobile number.";
    if (!form.category) nextErrors.category = "Please select a category.";
    if (form.description.trim().length < 20) nextErrors.description = "Description must be at least 20 characters.";

    return nextErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) return;

    setIsSubmitting(true);

    window.setTimeout(() => {
      setGrievanceId(createGrievanceId());
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1000);
  };

  const copyId = async () => {
    if (!grievanceId) return;

    try {
      await navigator.clipboard.writeText(grievanceId);
    } catch (error) {
      console.warn("Clipboard copy failed.", error);
    }
  };

  return (
    <main className="grievance-page page-animated">
      <div className="page-heading">
        <div>
          <span className="eyebrow">CITIZEN SERVICES</span>
          <h1>Report a Grievance</h1>
          <p>Raise your issue and let us help you get it resolved.</p>
        </div>
      </div>

      <div className="grievance-layout">
        <aside className="grievance-side">
          <div className="panel-surface info-panel">
            <div className="info-icon">📢</div>
            <h2>We're here to help.</h2>
            <p>
              Submit your complaint or issue related to cooperative services. Our system will help route it to the appropriate authority.
            </p>
          </div>

          <div className="panel-surface process-panel">
            <h3>How it works</h3>

            <div className="process-step">
              <span>01</span>
              <div>
                <strong>Submit</strong>
                <p>Tell us about your issue.</p>
              </div>
            </div>

            <div className="process-step">
              <span>02</span>
              <div>
                <strong>Track</strong>
                <p>Get a unique grievance ID.</p>
              </div>
            </div>

            <div className="process-step">
              <span>03</span>
              <div>
                <strong>Resolve</strong>
                <p>Monitor the resolution status.</p>
              </div>
            </div>
          </div>
        </aside>

        <div className="panel-surface grievance-form-card">
          {submitted ? (
            <div className="success-state" aria-live="polite">
              <div className="success-icon">✓</div>
              <h2>Grievance Submitted!</h2>
              <p>Your grievance has been successfully registered.</p>

              <div className="grievance-id" role="status" aria-live="polite">
                <span>GRIEVANCE ID</span>
                <strong>{grievanceId}</strong>
              </div>

              <div className="success-actions">
                <button type="button" className="secondary-btn" onClick={copyId}>
                  Copy ID
                </button>
                <button
                  type="button"
                  className="primary-btn"
                  onClick={() => {
                    setSubmitted(false);
                    setForm({ name: "", mobile: "", category: "", description: "" });
                    setErrors({});
                    setGrievanceId("");
                  }}
                >
                  Submit Another
                </button>
              </div>
            </div>
          ) : (
            <>
              <div className="form-header">
                <h2>Submit your issue</h2>
                <p>Fields marked with * are required.</p>
              </div>

              <form onSubmit={handleSubmit} className="grievance-form" noValidate>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Full Name *</label>
                    <input
                      id="name"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Enter your name"
                      aria-invalid={Boolean(errors.name)}
                      aria-describedby={errors.name ? "name-error" : undefined}
                    />
                    {errors.name && <small className="field-error" id="name-error">{errors.name}</small>}
                  </div>

                  <div className="form-group">
                    <label htmlFor="mobile">Mobile Number *</label>
                    <input
                      id="mobile"
                      name="mobile"
                      value={form.mobile}
                      onChange={handleChange}
                      placeholder="Enter mobile number"
                      type="tel"
                      aria-invalid={Boolean(errors.mobile)}
                      aria-describedby={errors.mobile ? "mobile-error" : undefined}
                    />
                    {errors.mobile && <small className="field-error" id="mobile-error">{errors.mobile}</small>}
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="category">Grievance Category *</label>
                  <select
                    id="category"
                    name="category"
                    value={form.category}
                    onChange={handleChange}
                    aria-invalid={Boolean(errors.category)}
                    aria-describedby={errors.category ? "category-error" : undefined}
                  >
                    <option value="">Select category</option>
                    <option value="registration">Cooperative Registration</option>
                    <option value="scheme">Government Scheme</option>
                    <option value="finance">Financial Support</option>
                    <option value="service">Cooperative Service</option>
                    <option value="other">Other</option>
                  </select>
                  {errors.category && <small className="field-error" id="category-error">{errors.category}</small>}
                </div>

                <div className="form-group">
                  <div className="label-row">
                    <label htmlFor="description">Describe your issue *</label>
                    <span>{descriptionLength}/500</span>
                  </div>

                  <textarea
                    id="description"
                    name="description"
                    value={form.description}
                    onChange={(e) => {
                      if (e.target.value.length <= 500) handleChange(e);
                    }}
                    placeholder="Describe your grievance in detail..."
                    rows="6"
                    aria-invalid={Boolean(errors.description)}
                    aria-describedby={errors.description ? "description-error" : undefined}
                  />
                  {errors.description && <small className="field-error" id="description-error">{errors.description}</small>}
                </div>

                <button type="submit" className="submit-grievance" disabled={isSubmitting}>
                  {isSubmitting ? "Submitting..." : "Submit Grievance"}
                  <span aria-hidden="true">→</span>
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </main>
  );
};

export default Grievance;