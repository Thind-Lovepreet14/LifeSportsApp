<<<<<<< HEAD
import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
=======
import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route} from "react-router-dom";


import NavBar from './component/utils/Navbar';
import HomePage from './sitePages/HomePage';
import BasketballPage from './sitePages/BasketballPage';
import CreateUserPage from './sitePages/CreateUserPage';
import UserBoysPage from './sitePages/UserBoysPage';
import UserGirlsPage from './sitePages/UserGirlsPage';
>>>>>>> 5d4d05bd0aee0200aa5c097e583ffaa928887888

import NavBar from "./component/utils/Navbar";
import HomePage from "./sitePages/HomePage";
import CreateUserPage from "./sitePages/CreateUserPage";
import UserBoysPage from "./sitePages/UserBoysPage";
import playerProfilePage from "./sitePages/playerProfilePage";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
<<<<<<< HEAD
        <Route path="/" exact component={HomePage} />
        <Route path="/user" component={CreateUserPage} />
        <Route path="/boyUsers" component={UserBoysPage} />
        <Route path="/playerprofile" component={playerProfilePage} />
=======
        <Route path= '/' exact component={HomePage} />
        <Route path='/basketball' component={BasketballPage} />
        <Route path='/user' component={CreateUserPage} />
        <Route path='/boyUsers' component={UserBoysPage} />
        <Route path='/girlUsers' component={UserGirlsPage} />
>>>>>>> 5d4d05bd0aee0200aa5c097e583ffaa928887888
      </div>
    </Router>
  );
}

export default App;
