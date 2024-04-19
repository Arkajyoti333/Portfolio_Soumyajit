import React, { useState } from "react";
import './navbar.css';
import logo from '../../assets/logo.png';
import {Link} from 'react-scroll'
import contactImg from '../../assets/contact.png';
import resumePdf from '../../assets/SoumyajitRay_CV.docx';
import menu from '../../assets/menu.png'
const Navbar = () => {
    const [showMenu,setShowMenu] =useState(false)
    return(
         <nav className="navbar">
            <img src={logo} alt="logo" className="logo"  />
            <div className="desktopMenu">
                <Link activeClass="active" to='intro' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Home</Link>
                <a className="desktopMenuListItemCV" href={resumePdf} download='SoumyajitRay_CV.pdf'>Resume</a>
                <Link activeClass="active" to='skills' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Skills</Link>
                <Link activeClass="active" to='works' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Achievements</Link>
            </div>

           
            <button className="desktopMenuBtn" onClick={()=>{
                document.getElementById('contactPage').scrollIntoView({behavior:'smooth'});
            }}>
                <img src={contactImg} alt="" className="desktopMenuImg" />Contact me</button>
            
            
        <img src={menu} alt="Menu" className="mobMenu" onClick={()=>setShowMenu(!showMenu)} />
        <div className="navMenu" style={{display : showMenu ? 'flex': 'none'}}>
            <Link activeClass="active" to='intro' spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>Home</Link>
            <a className="listItemCV" href={resumePdf}  target="_blank">Resume</a>
            <Link activeClass="active" to='skills' spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>Skills</Link>
            <Link activeClass="active" to='works' spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>Achievements</Link>
            <Link activeClass="active" to='contactPage' spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>Contact Me</Link>
            </div>
        </nav>
    )
}

export default Navbar;