import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "../src/pages/Home";
import SignupPage from "../src/pages/SignupPage";
import "./App.css";
import InterventionForm from "./components/InterventionForm";
import Report from "./components/Report";
import UserProfile from "./components/UserProfile";
import AdminDashboard from "./pages/AdminDashboard";
import CreateIntervention from "./pages/CreateIntervention";
import Dashboard from "./pages/Dashboard";
import LoginPage from "./pages/LoginPage";
import RedFlags from "./pages/RedFlags";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/red-flags" element={<RedFlags />} />
        <Route path="/intervention" element={<InterventionForm />} />
        <Route path="/report" element={<Report />} />
        <Route path="/userprofile" element={<UserProfile />} />
        <Route path="/createintervention" element={<CreateIntervention />} />
      </Routes>
    </Router>
  );
}

export default App;
