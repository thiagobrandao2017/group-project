import React, { Component } from 'react';
import whiteLogo from '../assets/img/whiteLogo.png';


const Footer = () => {
  return (
    <section className="footer-section">
      <div className="container">
        <div className="copyright text-center">
          <p>copyright <img className="footer-logo" src={require('../assets/img/whiteLogo.png')} /></p>
        </div>
      </div>
    </section>
  )
};

export default Footer;
