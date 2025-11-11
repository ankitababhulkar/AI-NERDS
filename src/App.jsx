import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import Dashboard from "./pages/Dashboard";
import ResumeUpload from "./pages/ResumeUpload";
import InterviewPrep from "./pages/InterviewPrep";
import AINews from "./pages/AINews";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="min-h-screen w-full bg-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/upload" element={<ResumeUpload />} />
          <Route path="/interview" element={<InterviewPrep />} />
          <Route path="/news" element={<AINews />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
