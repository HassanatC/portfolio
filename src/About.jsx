import PropTypes from 'prop-types';

const About = ({ isShowing, toggleFB, toggleFN }) => {

    return (
    <>
    <div className="information">

        <h2 className="about-me" id="about-me">About Me</h2>

        <p className="info">I am Hassanat Choudhry.</p>

            <p className="info"> I am a software engineer, UI designer, and student. I enjoy History and studied it at University, and slowly after my degree ended, I decided to start teaching myself how to program.</p>

                <p className="info"> I like to write code in Java and JavaScript, and have made projects in Python. I like to build software with good user-oriented design. I also like to create good websites and user interfaces.</p>
                
                <p className="info">You can see some of it on my <a className="gitLink" href="https://github.com/HassanatC">GitHub</a>, and from projects here.</p>

                <p className="info">I have finished studying Computer Science at masters level at the University fo Birmingham, and have created a file sharing web application as my summer project.</p>

                <a className="resume-link" href="./src/assets/CV4P.pdf" target="_blank" rel="noopener noreferrer">
                    <button className="resume">My Resume</button>
                </a>


    <h2 className="projectHeader" id="projects">My Portfolio</h2>

    <div className="project-container">

        <div className="project-card">

        
        <img className="project-image" src="src/images/fb2.jpeg" width="130" height="260" alt="Project Pic"></img>

        <h3>FitBites</h3>

        <p className="subtext">UI design and interface for FitBites. FitBites is intended to be a competent and comprehensive food delivery mobile application.
        </p>

        <button onClick={toggleFB} className="proj-buttons">Open</button>

    </div>

        <div className="project-card">

            <img className="project-image" src="src/images/filenexus.PNG" width="335" height="200" alt="Project Pic"></img>

            <h3>FileNexus</h3>
            <p className="subtext">Full-Stack file hosting/sharing web application, allowing for cloud storage and sharing of your favourite files.</p>

            <button onClick={toggleFN} className="proj-buttons">Open</button>
            <a href="https://github.com/HassanatC/filenexus" className="project-links" target="_blank" rel="noreferrer"><button className="proj-buttons">Source</button></a>
        </div>

        <div className="project-card">
            <img className="project-image" src="src/images/dripzone.PNG" width="335" height="200" alt="Project Pic"></img>

            <h3>DRIP ZONE</h3>
            <p className="subtext">E-commerce site for clothing, particularly designer streetwear clothing, jackets and accessories.</p>

            <a href="https://dripzone.org" className="project-links" target="_blank" rel="noreferrer"><button className="proj-buttons">Live Version</button></a>
        </div>
    </div>
    </div>

    </>
    );
};

About.propTypes = {
    isShowing: PropTypes.bool.isRequired,
    toggleFB: PropTypes.func.isRequired,
    toggleFN: PropTypes.func.isRequired,
}

export default About;