import "./App.css";
import About from "./components/About";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Service from "./components/Service";
import WorkingStep from "./components/workingStep";
import Pricing from "./components/pricing";

import Testimonial from "./components/testimonial";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="overflow-x-hidden ">
      <Navbar />
      <Hero />
      <Service />
      <About />
      <WorkingStep />
      <Pricing />
      <Testimonial />

      <Contact />

      <Footer />
      
     


    </div>
  );
}

export default App;
