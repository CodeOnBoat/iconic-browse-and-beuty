import React from "react";
import "./App.css";
import { Route, Routes, useNavigate } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { AboutMe } from "./pages/AboutMe/AboutMe";
import { Prices } from "./pages/Prices/Prices";
import { Contacts } from "./pages/Contacts/Contacts";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { OneProduct } from "./pages/OneProduct/OneProduct";
import {services} from './contents/services';

function App() {
  const servicesRef = React.useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const goToServices = () => {
    console.log("goToServices");
    navigate("/");
    setTimeout(() => {
      servicesRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <div>
      <Header goToServices={goToServices} />
      <div className="content-container">
        <Routes>
          <Route path="/" element={<Home servicesRef={servicesRef} />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/prices" element={<Prices />} />
          <Route path="/aboutme" element={<AboutMe />} />
          {services.map((p) => (
            <Route
              path={`/services/${p.id}`}
              element={<OneProduct title={p.name} text={p.description} />}
            />
          ))}
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
