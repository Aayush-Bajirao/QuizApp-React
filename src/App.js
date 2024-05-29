import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/dashboard/Dashboard";
import Analytics from "./pages/analytics/Analytics";
import Navbar from "./components/Navbar";

import QuestionwiseAnalysis from "./pages/analytics/QuestionwiseAnalysis";
import Login from "./pages/login/Login";
import UserPage from "./pages/analytics/UserPage/UserPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route
          path="/questionwiseanalysis"
          element={<QuestionwiseAnalysis />}
        />
        <Route path="/userpage" element={<UserPage />} />
      </Routes>
    </BrowserRouter>
  );
}
