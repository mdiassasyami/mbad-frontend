import { useNavigate } from "react-router-dom";
import chartBar from "./assets/icons/chart-bar.svg";
import gear from "./assets/icons/gear.svg";
import chartLine from "./assets/icons/chart-line.svg";
import logo from "./assets/logo-mbad.svg";

function Home() {
  const navigate = useNavigate();

  return (
    <div style={{
      minHeight: "100vh",
      background: "#eef1f5",
      margin: "0",
      padding: "0"
    }}>

      {/* CONTAINER FULL */}
      <div style={{
        width: "100%",
        background: "white"
      }}>

        {/* 🔷 HERO SECTION */}
        <div style={{
          background: "linear-gradient(135deg, #4e73df, #224abe)",
          color: "white",
          padding: "60px 20px",
          display: "flex",
          justifyContent: "center",
          position: "relative" // ✅ penting untuk logo
        }}>

          {/* ✅ LOGO KIRI ATAS */}
          <img 
            src={logo} 
            alt="MBAD Logo" 
            style={{ 
              position: "absolute",
              top: "clamp(15px, 3vw, 25px)",
              left: "clamp(15px, 3vw, 25px)",
              height: "clamp(40px, 6vw, 70px)"
            }} 
          />

          {/* WRAPPER */}
          <div style={{
            maxWidth: "1200px",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center"
          }}>

            {/* TITLE */}
            <h1 style={{
              fontSize: "clamp(22px, 4vw, 34px)",
              margin: "10px 0"
            }}>
              MOBILE BANKING{" "}
              <span style={{ fontWeight: "300" }}>
                ANALYTICS DASHBOARD
              </span>
            </h1>

            {/* SUBTITLE */}
            <p style={{
              fontSize: "clamp(14px, 2.5vw, 18px)",
              marginBottom: "30px",
              maxWidth: "600px"
            }}>
              Analisis Kepuasan Pengguna & Performa Sistem
            </p>

            {/* BUTTON */}
            <button
              onClick={() => navigate("/login")}
              style={{
                padding: "12px 25px",
                background: "transparent",
                border: "1px solid white",
                color: "white",
                borderRadius: "8px",
                cursor: "pointer"
              }}
            >
              Login Admin
            </button>

          </div>
        </div>

        {/* 🔷 FITUR SECTION */}
        <div style={{
          display: "flex",
          justifyContent: "center",
          padding: "40px 20px"
        }}>

          <div style={{
            maxWidth: "1200px",
            width: "100%",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "20px"
          }}>

            <div style={cardStyle}>
              <img src={chartBar} alt="icon" style={iconStyle}/>
              <p style={textStyle}>Evaluasi Kepuasan Pengguna</p>
            </div>

            <div style={cardStyle}>
              <img src={gear} alt="icon" style={iconStyle}/>
              <p style={textStyle}>Monitoring Performa Sistem</p>
            </div>

            <div style={cardStyle}>
              <img src={chartLine} alt="icon" style={iconStyle}/>
              <p style={textStyle}>Analisis Data Terpadu</p>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}

/* STYLE */
const cardStyle = {
  background: "#f8f9fc",
  padding: "25px",
  borderRadius: "12px",
  textAlign: "center",
  boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
  transition: "0.3s",
  cursor: "pointer"
};

const iconStyle = {
  height: "45px",
  marginBottom: "10px"
};

const textStyle = {
  fontSize: "14px",
  fontWeight: "500"
};

export default Home;