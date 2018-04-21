import React, { Component } from 'react';
import './TopNav.css';

export default class TopNav extends Component {
  state = {
    open: true
  };

  render() {
    const { open } = this.state;
    return (
      <nav>
        <div className="nav-logo">
          <h3>&#9917; and FutureScore</h3>
        </div>
        <div className={`nav-links ${open && 'hidden'}`}>
          <a href="http://#">Competitions</a>
          <a href="http://#">About</a>
          <a href="http://#">Cool Facts</a>
        </div>
        <button id="hamburger" onClick={() => this.setState({ open: !open })}>
          <i className={`fas fa-bars fa-2x ${!open && 'hidden'}`} />
          <i className={`fas fa-times fa-2x ${open && 'hidden'}`} />
        </button>
      </nav>
    );
  }
}
