import React from 'react';

const Header = () => {
  return (
    <header id="home" className="header">
      <nav className="nav" role="navigation">
        <div className="container nav-elements">
          <ul className="navbar">

          </ul>
        </div>
      </nav>
      <div className="container tagline" style={{color: "white"}}>
        <h1 className="headline" >Our Mission</h1>
        <p>We assist <em>fast and professional</em> medical documentation by offering a <em>dynamic sorting</em> and storage application for <em>your</em> documentation text.</p>
      </div>
    </header>
  );
}

export default Header;