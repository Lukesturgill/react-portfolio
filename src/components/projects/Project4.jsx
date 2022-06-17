import "./projects.css"
import EmployTrack from '../../img/project-pics/employee-tracker.png'

const Project4 = () => {
    return (
    <div className="p">
          <div className="p-browser">
          <div className="p-circle"></div>
                <div className="p-circle"></div>
                <div className="p-circle"></div>
                </div>
              <a href='https://github.com/Lukesturgill/employee-tracker' target='_blank' rel="noreferrer"><img src={EmployTrack} alt='Employee Tracker' className="p-img"></img></a>
            </div>    
      );
    };

    export default Project4