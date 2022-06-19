import "./nav.css"
import {Link} from "react-router-dom"

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
                   <Link to="/Home">Home</Link>
                </li>
                <li>
                    <Link to="/About">About Me</Link>
                </li>
                <li>
                    <Link to="/Portfolio">Portfolio</Link>
                </li>
                <li>
                    <Link to="/Resume">Resume</Link>
                </li>
                <li>
                    <Link to="/Contact">Contact Me</Link>
                </li>
            </ul>
           </nav>
           </div>
           </header>
    )
};

export default Nav