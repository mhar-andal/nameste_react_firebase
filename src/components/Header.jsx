import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="title">
          <span>nameste</span>
        </div>
        <div className="links">
          <div className="link">HOME</div>
          <div className="link">ABOUT</div>
          <div className="link">SIGN UP</div>
        </div>
      </div>
    );
  }
}

export default Header;
