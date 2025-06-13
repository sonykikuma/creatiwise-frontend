import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Expertise from "./components/Expertise";
import Works from "./components/Works";
import Experience from "./components/Experience";
import Blog from "./components/Blog";
import WhatTheySay from "./components/WhatTheySay";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero /> <Expertise />
      <Works />
      <Experience />
      <Blog />
      <WhatTheySay />
      <FAQ />
      <Footer />
    </>
  );
}

export default App;
