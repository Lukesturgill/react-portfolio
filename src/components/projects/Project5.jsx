import "./projects.css"
import BudgetApp from '../../img/project-pics/budget-tracker.png'

const Project5 = () => {
    return (
    <div className="p">
          <div className="p-browser">
          <div className="p-circle"></div>
                <div className="p-circle"></div>
                <div className="p-circle"></div>
                </div>
              <a href='https://stark-ravine-58698.herokuapp.com/' target='_blank' rel="noreferrer"><img src={BudgetApp} alt='Budget Tracker' className="p-img"></img></a>
            </div>    
      );
    };

    export default Project5