import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import MySkills from "./pages/MySkills";
import AboutMe from "./pages/AboutMe";
import Portfolio from "./pages/Portfolio";
import Testimonial from "./pages/Testimonial";
import ContactMe from "./pages/ContactMe";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutme" element={<AboutMe />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/testimonials" element={<Testimonial />} />
          <Route path="/contactme" element={<ContactMe />} />
          <Route element={<Footer />} />
        </Routes>
        <MySkills />
        <AboutMe />
        <Portfolio />
        <Testimonial />
        <ContactMe />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
