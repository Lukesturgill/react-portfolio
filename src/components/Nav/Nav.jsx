import "./nav.css"

const Nav = () => {
    return (
        <header class="header">
        <div>
           <h1 class="main">LUKE STURGILL</h1>
           </div>
           <div>
           <nav>
           <ul>
                <li>
                   <a href="#intro">Home</a>
                </li>
                <li>
                   <a href="#about">About Me</a>
                </li>
                <li>
                    <a href="#portfolio">Portfolio</a>
                </li>
                <li>
                    <a href="#resume">Resume</a>
                </li>
                <li>
                   <a href="#contact-me">Contact Me</a>
                </li>
            </ul>
           </nav>
           </div>
           </header>
    )
};

export default Nav