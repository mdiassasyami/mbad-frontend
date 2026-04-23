import { Routes, Route } from "react-router-dom";
import Survey from "./Survey";
import Login from "./Login";
import Home from "./Home";
import Dashboard from "./Dashboard";
import ProtectedRoute from "./ProtectedRoute";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      
      <Route 
        path="/dashboard" 
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        } 
      />

      <Route path="/survey" element={<Survey />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;