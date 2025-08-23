import { useState } from "react";
import axios from "axios";

export default function Auth() {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });

  // frontend/auth.js
// ... your imports and useState hooks here

const handleChange = (e) => {
  setFormData({ ...formData, [e.target.name]: e.target.value });
};

// ⬅ Replace this entire handleSubmit function with the new one
const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    let res;
    if (isLogin) {
      // Login request
      res = await axios.post(
        "https://byte-backend-raxq.onrender.com/api/auth/login", // <-- updated backend URL
        {
          email: formData.email,
          password: formData.password,
        }
      );
    } else {
      // Signup request
      res = await axios.post(
        "https://byte-backend-raxq.onrender.com/api/auth/signup", // <-- updated backend URL
        formData
      );
    }

    alert(res.data.message);

    // Store token if login
    if (res.data.token) {
      localStorage.setItem("token", res.data.token);

      // Redirect to home page
      window.location.href = "/";
    }

    // Clear form after submit
    setFormData({ name: "", email: "", password: "" });
  } catch (err) {
    console.error(err.response?.data || err.message);
    alert(err.response?.data?.message || "❌ Something went wrong");
  }
};


// ... rest of your Auth component (return JSX) stays the same


  return (
    <div style={{ maxWidth: "400px", margin: "0 auto", padding: "20px" }}>
      <h2>{isLogin ? "Login" : "Signup"}</h2>
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        {!isLogin && (
          <input
            className="form-control"
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        )}
        <input
          className="form-control"
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          className="form-control"
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <button type="submit">{isLogin ? "Login" : "Signup"}</button>
      </form>

      <button className="btn btn-success"
        onClick={() => setIsLogin(!isLogin)}
        style={{ marginTop: "10px", background: "transparent", border: "none", color: "blue", cursor: "pointer" }}
      >
        Switch to {isLogin ? "Signup" : "Login"}
      </button>
    </div>
  );
}
