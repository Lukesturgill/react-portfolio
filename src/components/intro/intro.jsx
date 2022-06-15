import "./intro.css"
import Me from "../../img/me.png" 

const Intro = () => {
    return (
        <div className="intro">
            <div className="intro-left">
                <div className="i-left-wrapper">
                    <h2 className="intro-name">Hello, my name is</h2>
                    <h1 className="name">Luke Sturgill</h1>
                    <div className="intro-title">
                        <div className="i-title-wrapper">
                            <div className="i-title-item">Web Developer</div>
                            <div className="i-title-item">Web Developer</div>
                            <div className="i-title-item">Web Developer</div>
                            <div className="i-title-item">Web Developer</div>
                            <div className="i-title-item">Web Developer</div>
                        </div>
                    </div>
                    <p className="intro-disc">
                       placeholder placeholder placeholder finish discription I'm an aspiring full stack web developer, with knowledge in HTML, CSS, JavaScript, SQL, React, Node.js, and more. PLaceholder PLaceholder etc 
                    </p>
                </div>
            </div>
            <div className="intro-right">right</div>
            <div className="i-bg"></div>
            <img src={Me} alt="Luke" className="i-img" />
        </div>
    )
}

export default Intro