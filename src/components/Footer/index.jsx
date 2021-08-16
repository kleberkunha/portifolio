import React from 'react';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FooterArea } from '../MainComponents';
import { Link } from 'react-router-dom';

const Footer = () =>  {
  return (
    <FooterArea>
      <div className="primary-container-footer container">
        <div className="box-footer-k">
         <Link>Copy Right &copy; <Link className="kleber" to="https://github.com/kleberkunha">Kleber da Cunha</Link></Link>
        </div>
      </div>
    </FooterArea>
  );
} 

export default Footer;