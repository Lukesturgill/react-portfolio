import "./about.css"
import AboutPic from "../../img/about-me.png"
const About = () => {
  return (
    <div id="about" className="about">
         <div className="about-left">
                <div className="about-card bg"></div>
                <div className="about-card">
                     <img src={AboutPic} alt="Luke" className="a-img" />
                </div>
            </div>
       <div className="about-right">
           <h1 className="about-title">About Me</h1>
           <p className="about-sub">How my journey in programming began
           </p>
           <p className="about-desc">I was born and raised outside of Detroit, Michigan. This is where I started skatedboarding and first found a passion for working with computer programs to make videos for me and my friends. For a long time, I was so curious to know how these programs and websites I was using operated and allowed me to create the things I did. That curiousity is what led me to looking into web development and it is a trait that I believe will be an advantage in a constantly expanding and advancing field.
           </p>
       </div>
    </div>
  )
}

export default About