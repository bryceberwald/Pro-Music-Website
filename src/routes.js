import React from 'react';
import HomePage from './pages/HomePage/HomePage';
import BiographyPage from './pages/BiographyPage/BiographyPage';
import ContactPage from './pages/ContactPage/ContactPage';
import MusicPage from './pages/MusicPage/MusicPage';
import EventsPage from './pages/EventsPage/EventsPage';
import StorePage from './pages/StorePage/StorePage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/biography" element={<BiographyPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/music" element={<MusicPage />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/store" element={<StorePage />} />

        {/* Add more routes as needed */}
        {/* <Route path="/about" element={<ComponentName />} /> */}
      </Routes>
    </Router>
  );
};

export default AppRouter;