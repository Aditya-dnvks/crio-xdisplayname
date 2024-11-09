import { useState } from "react";
import "./App.css";

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    if (e.target.name === "firstName") {
      setFirstName(e.target.value);
    } else {
      setLastName(e.target.value);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(`${firstName} ${lastName}`);
  };
  return (
    <div style={{ margin: 30 }}>
      <h1 style={{ margin: 10 }} s>
        Full Name Display
      </h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label style={{ margin: 10 }}>First Name:</label>
          <input
            required
            type="text"
            name="firstName"
            onChange={handleChange}
          />
        </div>
        <div>
          <label style={{ margin: 10 }}>Last Name:</label>
          <input required type="text" name="lastName" onChange={handleChange} />
        </div>

        <button type="submit" style={{ margin: 10 }}>
          Submit
        </button>
      </form>
      {message && <p style={{ margin: 10 }}>Full Name: {message}</p>}
    </div>
  );
}

export default App;
