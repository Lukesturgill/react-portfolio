import Projects from "../projects/Projects"
import "./projectList.css"
import {projects} from "../../data"

const ProjectList = () => {
  return (
    <div className="pl">
        <div className="pl-texts">
            <h1 className="pl-title">My Projects</h1>
            <p className="pl-desc">
                yadyaydyaydyadyydyadyydadyadyaydyad
            </p>
        </div>
       <div className="pl-list">
            {projects.map((item) => (
                 <Projects
                 key={item.id} 
                 img={item.img}
                link={item.link} />
             ))};
        </div>
    </div>
  );
  };



export default ProjectList;