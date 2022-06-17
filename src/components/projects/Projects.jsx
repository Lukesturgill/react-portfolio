import "./projects.css"
import Locally from '../../img/project-pics/locally.png'

const Project1 = () => {
return (
<div className="p">
      <div className="p-browser">
      <div className="p-circle"></div>
            <div className="p-circle"></div>
            <div className="p-circle"></div>
            </div>
          <a href='https://safe-anchorage-05872.herokuapp.com/' target='_blank' rel="noreferrer"><img src={Locally} alt='locally' className="p-img"></img></a>
        </div>    
  );
};




export default Project1