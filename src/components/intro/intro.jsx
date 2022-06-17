import "./intro.css"
import Me from "../../img/me.png" 

const Intro = () => {
    return (
        <div id="intro" className="intro">
            <div className="intro-left">
                <div className="i-left-wrapper">
                    <h2 className="intro-name">Hello, my name is</h2>
                    <h1 className="name">Luke Sturgill</h1>
                    <div className="intro-title">
                        <div className="i-title-wrapper">
                            <div className="i-title-item">Full Stack Web Developer</div>
                            <div className="i-title-item">HTML</div>
                            <div className="i-title-item">CSS</div>
                            <div className="i-title-item">JavaScript</div>
                            <div className="i-title-item">Node.js</div>
                            <div className="i-title-item">Express.js</div>
                            <div className="i-title-item">SQL</div>
                            <div className="i-title-item">React</div>
                        </div>
                    </div>
                    <p className="intro-disc">
                       placeholder placeholder placeholder finish discription I'm an aspiring full stack web developer, with knowledge in HTML, CSS, JavaScript, SQL, React, Node.js, and more. PLaceholder PLaceholder etc 
                    </p>
                </div>
            </div>
            <div className="intro-right">
            <div className="i-bg"></div>
            <img src={Me} alt="Luke" className="i-img" />
            </div>
        </div>

    )
}

export default Intro