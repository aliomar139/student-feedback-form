import React, { useState } from "react";

const COURSES = [
  { value: "", label: "Select a course..." },
  { value: "react", label: "React Fundamentals" },
  { value: "javascript", label: "JavaScript Basics" },
  { value: "css", label: "CSS & Styling" },
];

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [course, setCourse] = useState("");
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState("");
  const [charCount, setCharCount] = useState(0);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const error = {};

    if (!name) {
      error.name = "Full name is required.";
    } else if (name.length < 2) {
      error.name = "Full name must be at least 2 characters long.";
    }

    if (!email) {
      error.email = "Email address is required.";
    } else if (!email.includes("@")) {
      error.email = "Please enter a valid email address.";
    }

    if (!course) {
      error.course = "Please select a course from the list.";
    }

    if (!rating) {
      error.rating = "Please provide a rating before submitting.";
    }

    return error;
  };

  const handleSubmit = () => {
    const validationErrors = validate();
    if (Object.keys(validationErrors).length) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    setSubmitted(true);
  };

  const handleClearForm = (e) => {
    e?.preventDefault();
    setName("");
    setEmail("");
    setCourse("");
    setRating(0);
    setFeedback("");
    setCharCount(0);
    setErrors({});
  };

  const handleSubmitAnother = () => {
    handleClearForm();
    setSubmitted(false);
  };

  const handleFeedbackChange = (e) => {
    const value = e.target.value;
    if (value.length <= 500) {
      setFeedback(value);
      setCharCount(value.length);
    }
  };

  if (submitted) {
    return (
      <div className="form-container">
        <div className="thank-you">
          <div className="checkmark">✓</div>
          <h2>Thank You!</h2>

          <div className="summary">
            <p><strong>Name:</strong> {name}</p>
            <p><strong>Email:</strong> {email}</p>
            <p><strong>Course:</strong> {course}</p>
            <p><strong>Rating:</strong> {rating}</p>
            {feedback && <p><strong>Feedback:</strong> {feedback}</p>}
          </div>

          <button className="btn thank-you" onClick={handleSubmitAnother}>
            Submit Another
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="form-container">
      <h1 className="form-title">📝 Student Feedback Form</h1>

      <div className="form-group">
        <label>Full Name *</label>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {errors.name && <p className="error-text">{errors.name}</p>}
      </div>

      <div className="form-group">
        <label>Email *</label>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {errors.email && <p className="error-text">{errors.email}</p>}
      </div>

      <div className="form-group">
        <label>Course *</label>
        <select value={course} onChange={(e) => setCourse(e.target.value)}>
          {COURSES.map((c) => (
            <option key={c.value} value={c.value}>
              {c.label}
            </option>
          ))}
        </select>
        {errors.course && <p className="error-text">{errors.course}</p>}
      </div>

      <div className="form-group">
        <label>Rating *</label>
        <div className="star-rating">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              type="button"
              className={`star-btn ${star <= rating ? "filled" : ""}`}
              onClick={() => setRating(star)}
            >
              {star <= rating ? "★" : "☆"}
            </button>
          ))}
        </div>
        {rating > 0 && <p>You rated {rating}/5</p>}
        {errors.rating && <p className="error-text">{errors.rating}</p>}
      </div>

      <div className="form-group">
        <label>Your Feedback (optional)</label>
        <textarea
          rows={4}
          placeholder="Tell us what you think..."
          value={feedback}
          onChange={handleFeedbackChange}
        />
        <p
          className={`char-count ${
            charCount >= 500 ? "danger" : charCount >= 400 ? "warning" : ""
          }`}
        >
          {charCount} / 500 characters
        </p>
      </div>

      <div className="button-group">
        <button className="btn btn-secondary" onClick={handleClearForm}>
          Clear Form
        </button>
        <button className="btn btn-primary" onClick={handleSubmit}>
          Submit Feedback
        </button>
      </div>
    </div>
  );
}

export default App;
