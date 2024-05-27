import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/dashboard/Dashboard";
import Analytics from "./pages/analytics/Analytics";
import CreateQuiz from "./pages/createQuiz/CreateQuiz";
import QuestionwiseAnalysis from "./pages/analytics/QuestionwiseAnalysis";
import Login from "./pages/login/Login";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/create-quiz" element={<CreateQuiz />} />
        <Route
          path="/questionwiseanalysis"
          element={<QuestionwiseAnalysis />}
        />
      </Routes>
    </BrowserRouter>
  );
}
