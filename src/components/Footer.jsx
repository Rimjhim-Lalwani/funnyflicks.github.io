import { FaFacebook } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa'

import React from 'react'

import './styles/Footer.css';
import logo from "./images/logo1.png";
const Footer = () => {
  return (
    <div className="footer">
        <div className="boxf-container">
          <div className="boxff">
            
            <img src={logo} alt="logo" className='FootLogo' height="150px" width="200px" />
            
          </div>
          
          <div className="boxf">
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/cards">Games</a>
              </li>
              <li>
                <a href="/manga">Anime</a>
              </li>
              <li>
                <a href="/jokes">Jokes</a>
              </li>
            </ul>
          </div>
          <div className="boxf">           
            <div className="social-icons">
           <FaFacebook/>
           <FaInstagram/>
           <FaTwitter/>
            </div>
          </div>
        </div>
        <hr></hr> 
        <p className="copyright">R2 ⓒ 2023 - All Rights Reserved </p>
        <div className="made">
          <p>
            Made with ♡ by <b>Rishav & Rimjhim</b>
          </p>
        </div>
  
    </div>
  );
};

export default Footer;
