import React from 'react';
import { AmplifySignOut } from "@aws-amplify/ui-react";

const Footer = () => {
  return (
    <footer className="footer">

      <div className="container">
        <p className="legal">I want a copyright on everything</p>
        <p><AmplifySignOut/></p>
      </div>
    </footer>
  );
}

export default Footer;