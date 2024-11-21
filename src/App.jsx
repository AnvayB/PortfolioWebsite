import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from 'react';
import NavBar from "./components/NavBar/NavBar";
import Banner from "./components/Banner/Banner";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";

function App() {
  useEffect(() => {
    // Check if alert has already been shown
    const hasShownAlert = sessionStorage.getItem('hasShownAlert');
    
    if (!hasShownAlert) {
      alert("This website is not yet updated to my recent academic development:\n- Starting a Masters in Data Analytics at SJSU.\n\nPlease refer to my GitHub or LinkedIn for an updated status of my skills.\nThank you!");
      // Mark alert as shown
      sessionStorage.setItem('hasShownAlert', 'true');
    }
  }, []);

  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;