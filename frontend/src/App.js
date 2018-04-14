import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import GamesListPage from './pages/GamesListPage';
import GameDetailsPage from './pages/GameDetailsPage';
import CustomersList from './CustomersList';
import CustomerCreateUpdate from './CustomerCreateUpdate';
import './App.css';

const App = () => (
  <div className="container-fluid">
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        Test React Yes
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <Link className="nav-item nav-link" to="/">
            CUSTOMERS
          </Link>
          <Link className="nav-item nav-link" to="/customer">
            CREATE CUSTOMER
          </Link>
        </div>
      </div>
    </nav>

    <div className="content hey">
      <Route path="/" exact component={CustomersList} />
      <Route path="/livegames" exact component={GamesListPage} />
      <Route path="/livegame/:gameId" component={GameDetailsPage} />
      <Route path="/customer/:pk" component={CustomerCreateUpdate} />
      <Route path="/customer/" exact component={CustomerCreateUpdate} />
    </div>
  </div>
);

export default App;
