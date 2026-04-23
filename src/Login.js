import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "./assets/logo-mbad.svg";

function Login() {
  const navigate = useNavigate();

  // STATE
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // HANDLE LOGIN
  const handleLogin = async (e) => {
    e.preventDefault();

    const res = await fetch("http://localhost:5000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email, password })
    });

    const data = await res.json();

    if (data.success) {
      alert("Login berhasil!");
      navigate("/dashboard");
    } else {
      alert("Email atau password salah");
    }
    if (data.success) {
  localStorage.setItem("isLogin", "true"); // simpan status login
  navigate("/dashboard");
    }
    localStorage.setItem("user", JSON.stringify(data.user));
  };

  return (
    <div style={{
      minHeight: "100vh",
      display: "flex",
      flexWrap: "wrap",
      fontFamily: "Inter, sans-serif"
    }}>

      {/* LEFT */}
      <div style={{
        flex: 1,
        minWidth: "300px",
        background: "linear-gradient(135deg, #4e73df, #6f42c1)",
        color: "white",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "40px"
      }}>
        <img src={logo} alt="logo" style={{ height: "80px", marginBottom: "20px" }} />
        <h2>Welcome Back 👋</h2>
        <p style={{ textAlign: "center", maxWidth: "300px" }}>
          Login untuk mengakses dashboard analisis Mobile Banking
        </p>
      </div>

      {/* RIGHT */}
      <div style={{
        flex: 1,
        minWidth: "300px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#f8f9fc",
        padding: "20px"
      }}>

        <div style={{
          width: "100%",
          maxWidth: "350px",
          background: "white",
          padding: "30px",
          borderRadius: "16px",
          boxShadow: "0 8px 25px rgba(0,0,0,0.08)"
        }}>

          <h3 style={{ marginBottom: "20px", textAlign: "center" }}>
            Login Admin
          </h3>

          {/* FORM */}
          <form onSubmit={handleLogin}>

            <input
              type="email"
              placeholder="Email"
              style={inputStyle}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <input
              type="password"
              placeholder="Password"
              style={inputStyle}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <button
              type="submit"
              style={{
                width: "100%",
                padding: "12px",
                background: "#4e73df",
                color: "white",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer",
                fontWeight: "500"
              }}
            >
              Login
            </button>

          </form>

        </div>
      </div>

    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: "12px",
  marginBottom: "15px",
  borderRadius: "8px",
  border: "1px solid #ddd",
  outline: "none"
};

export default Login;