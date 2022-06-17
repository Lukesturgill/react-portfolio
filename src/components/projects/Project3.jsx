import "./projects.css"
import PassGen from '../../img/project-pics/password-generator.png'

const Project3 = () => {
    return (
    <div className="p">
          <div className="p-browser">
          <div className="p-circle"></div>
                <div className="p-circle"></div>
                <div className="p-circle"></div>
                </div>
              <a href='https://github.com/Lukesturgill/password-generator' target='_blank' rel="noreferrer"><img src={PassGen} alt='Password Generator' className="p-img"></img></a>
            </div>    
      );
    };

    export default Project3