import "./intro.css"
import Me from "../../img/me.png" 

const Intro = () => {
    return (
        <div id="intro" className="intro">
            <div className="intro-left">
                <div className="i-left-wrapper">
                    <h2 className="intro-name">Hello, my name is</h2>
                    <h1 className="name">Luke Sturgill</h1>
                    <p className="intro-disc">Languages I know include:</p>
                    <div className="intro-title">
                        <div className="i-title-wrapper">
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
                        I took part in a 24 week Full-Stack Web Development bootcamp through the University of Utah to pursue a career in the development and tech industry. My goal is to get a position as a Junior Web Developer and continue to learn more about programming languages, as well as master the ones I have experience with now.
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