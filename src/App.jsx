import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import SignUp from "./pages/SignUp";
import Profile from "./pages/Profile";
import AgentPanel from "./pages/AgentPanel";
import AgentProperties from "./pages/agent/AgentProperties";
import AgentNewListing from "./pages/agent/AgentNewListing";
import AgentMessages from "./pages/agent/AgentMessages";
import AgentSettings from "./pages/agent/AgentSettings";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/agent-panel" element={<AgentPanel />} />
        <Route path="/agent-panel/properties" element={<AgentProperties />} />
        <Route path="/agent-panel/new" element={<AgentNewListing />} />
        <Route path="/agent-panel/messages" element={<AgentMessages />} />
        <Route path="/agent-panel/settings" element={<AgentSettings />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
