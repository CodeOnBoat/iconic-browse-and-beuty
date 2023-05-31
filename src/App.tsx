import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { AboutMe } from "./pages/AboutMe/AboutMe";
import { Prices } from "./pages/Prices/Prices";
import { Contacts } from "./pages/Contacts/Contacts";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { services } from "./contents/services";
import { OneProduct } from "./pages/OneProduct/OneProduct";

function App() {
  return (
    <div>
      <Header />
      <div className="content-container">
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/prices" element={<Prices />} />
          <Route path="/aboutme" element={<AboutMe />} />
          {services.map((p) => (
            <Route
              path={`/services/${p.id}`}
              element={<OneProduct title={p.name} text={p.text} />}
            />
          ))}
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
