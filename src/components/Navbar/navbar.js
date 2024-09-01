import React, { useState } from "react";
import './navbar.css';
import logo from '../../assets/logo.png';
import { Link } from 'react-scroll';
import contactImg from '../../assets/contact.png';
// import resumePdf from '../../assets/SoumyajitRay_CV.docx';
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);

    return (
        <nav className="navbar">
            <img src={logo} alt="logo" className="logo" />
            <div className="desktopMenu">
                <Link activeClass="active" to='intro' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Home</Link>
                <Link activeClass="active" to='resume' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Resume</Link>
                {/* <a className="desktopMenuListItemCV" href={resumePdf} download='SoumyajitRay_CV.pdf'>Resume</a> */}
                <Link activeClass="active" to='skills' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Skills</Link>
                <Link activeClass="active" to='works' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Achievements</Link>
                <Link activeClass="active" to='projects' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Projects</Link>
            </div>

            <button 
                className="desktopMenuBtn" 
                onClick={() => {
                    document.getElementById('contactPage').scrollIntoView({ behavior: 'smooth' });
                }}
                aria-label="Scroll to contact section"
            >
                <img src={contactImg} alt="Contact icon" className="desktopMenuImg" />Contact me
            </button>
            <GiHamburgerMenu color="gold" size="large" className="mobMenu" onClick={() => setShowMenu(!showMenu)}/>
            <div className="navMenu" style={{ display: showMenu ? 'flex' : 'none' }}>
                
                <Link activeClass="active" to='intro' spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={() => setShowMenu(false)}>Home</Link>
                <Link activeClass="active" to='resume' spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={() => setShowMenu(false)}>Resume</Link>
                {/* <a className="listItemCV" href={resumePdf} target="_blank" rel="noopener noreferrer">Resume</a> */}
                <Link activeClass="active" to='skills' spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={() => setShowMenu(false)}>Skills</Link>
                <Link activeClass="active" to='works' spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={() => setShowMenu(false)}>Achievements</Link>
                <Link activeClass="active" to='projects' spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={() => setShowMenu(false)}>Projects</Link>
                <Link activeClass="active" to='contactPage' spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={() => setShowMenu(false)}>Contact Me</Link>
            </div>
        </nav>
    );
};

export default Navbar;
