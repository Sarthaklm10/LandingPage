import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/AboutUs";
import Stats from "./components/Stats";
import Causes from "./components/Causes";
import Team from "./components/Team";
import GetInvolved from "./components/GetInvolved";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-white font-sans text-gray-900">
      <Header />
      <main>
        <Hero />
        <About />
        <Stats />
        <Causes />
        <Team />
        <GetInvolved />
      </main>
      <Footer />
    </div>
  );
}

export default App;
