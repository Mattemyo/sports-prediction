import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import GamesListPage from './pages/GamesListPage';
import GameDetailsPage from './pages/GameDetailsPage';
import CustomersList from './CustomersList';
import CustomerCreateUpdate from './CustomerCreateUpdate';
import './App.css';
import TopNav from './components/navigation/TopNav';
import Footer from './components/navigation/Footer';

const App = () => (
  <div className="container">
    <TopNav />
    <Route path="/" exact component={CustomersList} />
    <Route path="/livegames" exact component={GamesListPage} />
    <Route path="/livegame/:gameId" component={GameDetailsPage} />
    <Route path="/customer/:pk" component={CustomerCreateUpdate} />
    <Route path="/customer/" exact component={CustomerCreateUpdate} />
    <Footer />
  </div>
);

export default App;
