import Intro from "./components/intro/Intro";
import About from "./components/about/About";
import ProjectList from "./components/projectList/ProjectList";
import Nav from "./components/Nav/Nav";

const App = () => {
  return <div>
    <Nav/>
    <Intro/>
    <About/>
    <ProjectList/>
    </div>;
};

export default App;