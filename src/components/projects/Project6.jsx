import "./projects.css"
import WeatherApp from '../../img/project-pics/weather-dashboard.png'

const Project6 = () => {
    return (
    <div className="p">
          <div className="p-browser">
          <div className="p-circle"></div>
                <div className="p-circle"></div>
                <div className="p-circle"></div>
                </div>
              <a href='https://github.com/Lukesturgill/weather-dashboard' target='_blank' rel="noreferrer"><img src={WeatherApp} alt='Weather Dashboard' className="p-img"></img></a>
            </div>    
      );
    };

    export default Project6