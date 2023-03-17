import "./footer.css";
import {FaFacebookF} from 'react-icons/fa'
import {BsLinkedin} from "react-icons/bs";
import {FaGithub} from "react-icons/fa"

const Footer =() => {
    return (
        <footer>
            <a href="#" className="footer__logo">Petro Zabila</a>

            <ul className="permalinks">
                <li><a href="#">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>

            <div className="footer__socials">
                <a href="https://www.linkedin.com/in/petro-zabila-685052257" target="_blank" rel="noreferrer"><BsLinkedin/></a>
                <a href="https://github.com/PeterZabila" target="_blank" rel="noreferrer"><FaGithub/></a>
                <a href="https://www.facebook.com/petro.zabila/" target="_blank" rel="noreferrer"><FaFacebookF/></a>
            </div>

            <div className="footer__copyright">
                <small>&copy; Petro Zabila 2023</small>
            </div>
        </footer>
    )
}

export default Footer;