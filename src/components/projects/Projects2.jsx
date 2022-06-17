import "./projects.css"
import wineDine from '../../img/project-pics/wine-n-dine.png'

const Project2 = () => {
    return (
    <div className="p">
          <div className="p-browser">
          <div className="p-circle"></div>
                <div className="p-circle"></div>
                <div className="p-circle"></div>
                </div>
              <a href='https://github.com/JWViking/project1' target='_blank' rel="noreferrer"><img src={wineDine} alt='Wine-N-Dine' className="p-img"></img></a>
            </div>    
      );
    };

    export default Project2