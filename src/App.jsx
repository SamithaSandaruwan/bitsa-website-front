// eslint-disable-next-line no-unused-vars
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Title from "./components/Title";
import Events from "./pages/Events";
import Home from "./pages/Home";

const App = () => {
  return (
    <Router>
      <Title/>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<Events />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
