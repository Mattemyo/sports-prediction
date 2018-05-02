import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import GamesListPage from './pages/GamesListPage';
import GameDetailsPage from './pages/GameDetailsPage';
import CompetitionPage from './pages/CompetitionPage';
import Page404 from './pages/Page404';
import './App.css';
import TopNav from './components/navigation/TopNav';
import Footer from './components/navigation/Footer';

const App = () => (
  <div className="container">
    <TopNav />
    <Route path="/" exact component={GamesListPage} />
    <Route path="/livegames" exact component={GamesListPage} />
    <Route path="/livegame/:gameId" component={GameDetailsPage} />
    <Route path="/competition/:competitionId" component={CompetitionPage} />
    <Route component={Page404} />
    <Footer />
  </div>
);

export default App;
