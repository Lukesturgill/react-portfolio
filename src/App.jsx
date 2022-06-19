import Home from "./components/intro/Intro";
import About from "./components/about/About";
import Portfolio from "./components/projectList/ProjectList";
import Nav from "./components/Nav/Nav";
import Contact from "./components/contact/Contact";
import Resume from "./components/resume/Resume";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App () {
  return (
  <BrowserRouter>
  <div>
    <Nav/>
    <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route path="/About" element={<About/>}/>
      <Route path="/Portfolio" element={<Portfolio/>}/>
      <Route path="/Resume" element={<Resume/>}/>
      <Route path="/Contact" element={<Contact/>}/>
    </Routes>
    </div>
    </BrowserRouter>
  );
};

export default App;