import React from 'react';
import { Link } from "react-router-dom";
import { socialLinks } from "../constants";
import gaxLogo from "../assets/images/gaxtech-logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='footer font-poppins'>
      <hr className='border-slate-200' />

      <div className='footer-container'>
        <p>
          © {currentYear} <strong>Gabriel Carvalho</strong>. All rights reserved.
        </p>

        <a
          href='https://www.gaxtech.org/'
          target='_blank'
          rel='noopener noreferrer'
          className='flex items-center gap-2 opacity-70 hover:opacity-100 transition-opacity'
        >
          <img src={gaxLogo} alt='GAX TECH' className='w-6 h-6 object-contain' />
          <span className='text-sm text-slate-500'>GAX TECH</span>
        </a>

        <div className='flex gap-3 justify-center items-center'>
          {socialLinks.map((link) => (
            <Link key={link.name} to={link.link} target='_blank'>
              <img
                src={link.iconUrl}
                alt={link.name}
                className='w-6 h-6 object-contain'
              />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
