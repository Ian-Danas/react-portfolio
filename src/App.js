
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home"
import Portfolio from "./Pages/Portfolio"
import Resume from "./Pages/Resume"
import Contact from "./Pages/Contact"
import Navbar from "./components/Navbar";





function App() {
  return (
      <Router>
        <Navbar /> 
        <Routes>
          <Route path= "/" element = {<Home/>} />
          <Route path= "/Portfolio" element = {<Portfolio/>}/>
          <Route path= "/Resume" element = {<Resume/>}/>
          <Route path= "/Contact" element = {<Contact/>} />

        </Routes>


      </Router>
  );
}

export default App;
