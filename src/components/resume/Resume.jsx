import "./resume.css"
import resume from "./Luke Resume Final.pdf"

const Resume = () => {
  return (
    <div id="resume" className="resume">
       <div><h1 className="r-title">My Resume</h1>
            <div className="r-info">
               <div className="dwnload"><h3>You can download my resume <a href={resume} download="LukeSturgillResume">here</a></h3></div>
                 <div className="r-info-items">
                  <h2>Experience with:</h2>
                     <ul className="r-list">
                         <li>HTMl</li>
                         <li>CSS</li>
                         <li>JavaScript</li>
                         <li>jQuery</li>
                         <li>Node.js</li>
                         <li>Express.js</li>
                         <li>MySQL/ Sequelize</li>
                         <li>APIs</li>
                         <li>Bootstrap/ Tailwind</li>
                         <li>Mongoose/ Mongo.db</li>
                         <li>React</li>
                     </ul>
                     </div>
                 </div>
            </div>
    </div>
  )
}

export default Resume