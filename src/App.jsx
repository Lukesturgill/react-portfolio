import Intro from "./components/intro/Intro";
import About from "./components/about/About";
import ProjectList from "./components/projectList/ProjectList";
import Nav from "./components/Nav/Nav";
import Contact from "./components/contact/Contact";
import Resume from "./components/resume/Resume";

const App = () => {
  return <div>
    <Nav/>
    <Intro/>
    <About/>
    <ProjectList/>
    <Resume/>
    <Contact/>
    </div>;
};

export default App;