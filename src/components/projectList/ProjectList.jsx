import Project1 from "../projects/Projects"
import Project2 from "../projects/Projects2"
import Project3 from "../projects/Project3"
import Project4 from "../projects/Project4"
import Project5 from "../projects/Project5"
import Project6 from "../projects/Project6"
import "./projectList.css"


const ProjectList = () => {
  return (
    <div className="pl">
        <div className="pl-texts">
            <h1 id="portfolio" className="pl-title">My Projects</h1>
            <p className="pl-desc">
                yadyaydyaydyadyydyadyydadyadyaydyad
            </p>
        </div>
       <div className="pl-list">
         <Project1 />
         <Project2 />
         <Project3 />
         <Project4 />
         <Project5 />
         <Project6 />
        </div>
    </div>
  );
  };



export default ProjectList;