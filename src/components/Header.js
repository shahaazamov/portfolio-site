import React,{useState} from 'react'
import './header.css'
import { Link as LinkR } from 'react-router-dom'
import { Link as LinkS } from 'react-scroll'
import {FaBars} from 'react-icons/fa'
import {MdCancel} from 'react-icons/md'
import Hero from './hero/Hero'
import Doing from './doing/Doing'
function Header() {
    
    const [toggleMenu, setToggleMenu] = React.useState(false);
    return (
        <>
           <nav className="app__navbar">
        <div className="app__navbar-logo">
        <LinkR to='/' className="nav__logo">Shaha</LinkR>
        </div>
        <ul className="app__navbar-links">
        <li className="p__opensans active"><a href="#home">Home</a></li>
        <li className="p__opensans"><a href="#about">About</a></li>
        <li className="p__opensans"><a href="#menu">Menu</a></li>
       
        <li className="p__opensans"><a href="#contact">Contact</a></li>
        </ul>

        <div className="app__navbar-smallscreen">
            
        <FaBars color="#fff" fontSize={27} onClick={() => setToggleMenu(true)} />
        {toggleMenu && (
            <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
                <div className="container">
                    <div className="app__navbar-logo">
                            <div className="nav__logo">Shaha</div>
                            </div>
                </div>
            <FaBars fontSize={27} className="overlay__close" onClick={() => setToggleMenu(false)} />
            <ul className="app__navbar-smallscreen_links">
            <li><a href="#home" onClick={() => setToggleMenu(false)}>Home</a></li>
            <li><a href="#about" onClick={() => setToggleMenu(false)}>About</a></li>
            <li><a href="#menu" onClick={() => setToggleMenu(false)}>Menu</a></li>
            
            <li><a href="#contact" onClick={() => setToggleMenu(false)}>Contact</a></li>
            </ul>
            </div>
            )}
            </div>
            </nav>

            <Hero/>
            <LinkS to='/doing'><Doing/></LinkS>
            </>
            )
        }
        
        export default Header