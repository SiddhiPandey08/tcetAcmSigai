import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/layouts/Navbar";
import Home from "./pages/Home";
import Events from "./pages/Events";
import Team from "./pages/Team";
import Blogs from "./pages/Blogs";
import Publications from "./pages/Publications";
import "./index.css"; // Core requirement for Tailwind styles to load!
import { CustomCursor } from "./components/ui/CustomCursor";
import { PeekingRobot } from "./components/ui/PeekingRobot";
import EventDetails from "./pages/EventDetails.jsx"; // Import the new details page
import Footer from "./components/layouts/Footer.jsx";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-paper-grid text-black font-sans selection:bg-retroYellow">
        {/* <CustomCursor /> */}

        <Navbar />
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/events" element={<Events />} />
            <Route path="/events/:eventId" element={<EventDetails />} />{" "}
            {/* Dynamic Route */}
            <Route path="/team" element={<Team />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/publications" element={<Publications />} />
          </Routes>
        </main>
        <PeekingRobot />
        <Footer />
      </div>
    </Router>
  );
}
