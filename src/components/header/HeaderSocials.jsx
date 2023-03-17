import {BsFacebook} from "react-icons/bs";
import {BsLinkedin} from "react-icons/bs";
import {FaGithub} from "react-icons/fa"


const HeaderSocials = () => {
    return (
        <div className="header__socials">
            <a href="https://www.linkedin.com/in/petro-zabila-685052257" target="_blank" rel="noreferrer"><BsLinkedin/></a>
            <a href="https://github.com/PeterZabila" target="_blank" rel="noreferrer"><FaGithub/></a>
            <a href="https://www.facebook.com/petro.zabila/" target="_blank" rel="noreferrer"><BsFacebook/></a>
        </div>
    )
}

export default HeaderSocials