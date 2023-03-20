import "./about.css";
import ME from "../../assets/me-about.jpg";
import {FaAward} from "react-icons/fa";
import {FiUsers} from "react-icons/fi";
import {VscFolderLibrary} from "react-icons/vsc";

const About =() => {
    return (
        <section id="about">
           <h5>Get to know</h5>
           <h2>About me</h2>

           <div className="container about__container">
                <div className="about__me">
                    <div className="about__me-image">
                        <img src={ME} alt="me" />
                    </div>
                </div>

                <div className="about__content">
                    <div className="about__cards">
                        <article className="about__card">
                            <FaAward className="about__icon"/>
                            <h5>Experience</h5>
                            <small>1 Year of experience</small>
                        </article>

                        <article className="about__card">
                            <FiUsers className="about__icon"/>
                            <h5>Clients</h5>
                            <small>4 clients</small>
                        </article>

                        <article className="about__card">
                            <VscFolderLibrary className="about__icon"/>
                            <h5>Projects</h5>
                            <small>5 Completed</small>
                        </article>
                    </div>

                    <p>
                        I am a Junior Frontend developer looking for a full-time position in a company aimed at contributing to making both everyday life and business easier, more efficient, productive and user-friendly.
                        I have reasonable knowledge of HTML, CSS, JavaScript ad REACT a well as practical experience in keeping my workflow in accordance with Agile/SCRUM methodology while working in a team. 
                        Have project experience in creating backend applications using Node.js.
                    </p>
                    <a href="#contact" className="btn btn__primary">Let's talk</a>
                </div>
           </div>
        </section>
    )
}

export default About;