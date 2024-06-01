import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import Leadership from "./pages/Leadership/Leadership";
import TrackMain from "./pages/Tracks/TrackMain";
import EventMain from "./pages/Events/EventMain";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/leadership" element={<Leadership />} />
          <Route path="/tracks" element={<TrackMain />} />
          <Route path="/Events" element={<EventMain />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
