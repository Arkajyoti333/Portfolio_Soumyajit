import Navbar from "./components/Navbar/navbar";
import Intro from "./components/intro/intro"
import About from "./components/About/skills";
import Footer from "./components/Footer/footer";
import Works from "./components/Works/works";
import Contact from "./components/Contact/contact";
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div className="App">
          <Navbar/>
          <Intro/>
          <About/>
          <Works/>
          <Toaster/>
          <Contact/>
          <Footer/>
    </div>
  );
}

export default App;
