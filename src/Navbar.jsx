import './index.css';
import homeIcon from './assets/home.svg';
import aboutIcon from './assets/about.svg';
import projectsIcon from './assets/projects.svg';

const Navbar = () => {

    return (
    <>
    <nav className="navbar">
        <ul className="navbar-nav">
        <li className="logo">
            <a href="#home" className="nav-link">
                <div className="link-text logo-text fade-in-text hlogo">
             <img src="src/images/Hlogo.png" />
                </div>
            <span className="link-text logo-text fade-in-text"></span>
            </a>
        </li>

        <li className="nav-item">
            <a href="#home" className="nav-link">
            <img src={homeIcon} alt="Home" className="home-icon" />
            <span className="link-text logo-text fade-in-text">Home</span>
            </a>
        </li>

        <li className="nav-item">
            <a href="#about-me" className="nav-link">
            <img src={aboutIcon} alt="About Me" className="home-icon" />
            <span className="link-text logo-text fade-in-text">About Me</span>
            </a>
        </li>

        <li className="nav-item">
            <a href="#projects" className="nav-link">
            <img src={projectsIcon} alt="Projects" className="home-icon" />
            <span className="link-text logo-text fade-in-text">Projects</span>
            </a>
        </li>

        </ul>
    </nav>
    </>            
    );
};

export default Navbar;