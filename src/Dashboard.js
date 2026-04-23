import { uatData, performanceData, correlationData } from "./data";
import {
  BarChart, Bar, XAxis, YAxis, Tooltip,
  ResponsiveContainer, LineChart, Line, Legend
} from "recharts";
import { useNavigate } from "react-router-dom";
import logo from "./assets/logo-mbad.svg";

import { FaUsers, FaStar, FaChartLine } from "react-icons/fa";

function Dashboard() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <div style={container}>

      {/* SIDEBAR */}
      <div style={sidebar}>
        <div style={logoContainer}>
          <img src={logo} alt="logo" style={logoStyle} />
        </div>

        <ul style={menu}>
          <li style={menuItemActive}>📊 Dashboard</li>
          <li style={menuItem}>📝 Surveys</li>
          <li style={menuItem}>⬆️ Upload Data</li>
          <li style={menuItem}>📈 Analytics</li>
          <li style={menuItem}>⚙️ Settings</li>
        </ul>
      </div>

      {/* MAIN */}
      <div style={main}>

        {/* TOPBAR */}
        <div style={topbar}>
          <h2 style={{ margin: 0 }}>MBAD Dashboard</h2>

          <div style={topRight}>
            🔔
            <span>{user?.name || "Admin"}</span>
            <button onClick={handleLogout} style={logoutBtn}>
              Logout
            </button>
          </div>
        </div>

        {/* CARDS */}
        <div style={cardContainer}>
          <StatCard title="Total Users" value="120" icon={<FaUsers />} color="#4e73df" />
          <StatCard title="Avg Satisfaction" value="4.2" icon={<FaStar />} color="#1cc88a" isRating />
          <StatCard title="System Status" value="Stable" icon={<FaChartLine />} color="#36b9cc" />
        </div>

        {/* 4 CHART */}
        <div style={gridTop}>

          {/* 1 */}
          <div style={card}>
            <h4>User Satisfaction</h4>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={uatData}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="value" fill="#4e73df" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* 2 */}
          <div style={card}>
            <h4>Performance Metrics</h4>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={performanceData}>
                <XAxis dataKey="time" />
                <YAxis />
                <Tooltip />
                <Legend />

                <Line type="monotone" dataKey="responseTime" stroke="#4e73df" strokeWidth={3} dot={false} />
                <Line type="monotone" dataKey="latency" stroke="#e74a3b" strokeWidth={3} dot={false} />
                <Line type="monotone" dataKey="throughput" stroke="#f6c23e" strokeWidth={3} dot={false} />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* 3 */}
          <div style={card}>
            <h4>Resource Utilization</h4>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={performanceData}>
                <XAxis dataKey="time" />
                <YAxis />
                <Tooltip />
                <Legend />

                <Line type="monotone" dataKey="cpu" stroke="#1cc88a" strokeWidth={3} dot={false} />
                <Line type="monotone" dataKey="storage" stroke="#36b9cc" strokeWidth={3} dot={false} />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* 4 */}
          <div style={card}>
            <h4>Correlation Analysis</h4>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={correlationData}>
                <XAxis dataKey="variable" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="value" fill="#36b9cc" />
              </BarChart>
            </ResponsiveContainer>
          </div>

        </div>

      </div>
    </div>
  );
}

export default Dashboard;


// 🔥 STAT CARD
function StatCard({ title, value, icon, color, isRating }) {
  return (
    <div style={{ ...statCard, borderLeft: `6px solid ${color}` }}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <p style={{ color: "#777" }}>{title}</p>
        <div style={{ color }}>{icon}</div>
      </div>

      <h2>{value}</h2>

      {isRating && <div style={{ color: "#f6c23e" }}>⭐⭐⭐⭐☆</div>}
    </div>
  );
}


// ================= STYLE =================

const container = { display: "flex", background: "#f4f6f9", minHeight: "100vh" };

const sidebar = { width: "230px", background: "linear-gradient(180deg,#1e3c72,#2a5298)", padding: "20px" };

const logoContainer = { textAlign: "center", marginBottom: "30px" };
const logoStyle = { width: "120px" };

const menu = { listStyle: "none", padding: 0, color: "white" };

const menuItem = { padding: "12px", borderRadius: "8px", cursor: "pointer" };

const menuItemActive = { ...menuItem, background: "rgba(255,255,255,0.2)" };

const main = { flex: 1, padding: "25px" };

const topbar = {
  display: "flex",
  justifyContent: "space-between",
  background: "white",
  padding: "15px 20px",
  borderRadius: "12px",
  marginBottom: "25px"
};

const topRight = { display: "flex", alignItems: "center", gap: "15px" };

const logoutBtn = {
  padding: "8px 15px",
  background: "#e74a3b",
  color: "white",
  border: "none",
  borderRadius: "8px"
};

const cardContainer = { display: "flex", gap: "20px", marginBottom: "25px" };

const statCard = {
  flex: 1,
  background: "white",
  padding: "20px",
  borderRadius: "14px",
  boxShadow: "0 6px 18px rgba(0,0,0,0.08)"
};

const gridTop = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: "20px"
};

const card = {
  background: "white",
  padding: "20px",
  borderRadius: "14px",
  boxShadow: "0 6px 18px rgba(0,0,0,0.08)"
};