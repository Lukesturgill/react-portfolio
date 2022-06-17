import Intro from "./components/intro/Intro";
import About from "./components/about/About";
import ProjectList from "./components/projectList/ProjectList";
import Nav from "./components/Nav/Nav";
import Contact from "./components/contact/Contact";

const App = () => {
  return <div>
    <Nav/>
    <Intro/>
    <About/>
    <ProjectList/>
    <Contact/>
    </div>;
};

export default App;