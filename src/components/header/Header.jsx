import "./header.css";
import CTA from "./CTA";
import ME from "../../assets/me.png";
import HeaderSocials from "./HeaderSocials";

const Header =() => {
    return (
        <header>
            <div className="container header__container">
                <h5>Hello I'm</h5>
                <h1>Petro Zabila</h1>
                <h5 className="text-light">Frontend and Backend Developer</h5>
                <CTA />

                <HeaderSocials/>
                <div className="me">
                    <img src={ME} alt="" />
                </div>

                <a href="#contact" className="scroll__down">Scroll down</a>
            </div>
        </header>
    )
}

export default Header;