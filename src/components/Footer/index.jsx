import React from 'react';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FooterArea } from '../MainComponents';

const Footer = () =>  {
  return (
    <FooterArea>
      <div className="container-fluid border bg-light">
        Footer
      </div>
    </FooterArea>
  );
} 

export default Footer;