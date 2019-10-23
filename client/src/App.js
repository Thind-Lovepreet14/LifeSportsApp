import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route} from "react-router-dom";


import NavBar from './component/utils/Navbar';
import HomePage from './sitePages/HomePage';
import CreateUserPage from './sitePages/CreateUserPage';
import UserBoysPage from './sitePages/UserBoysPage';


function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Route path= '/' exact component={HomePage} />
        <Route path='/user' component={CreateUserPage} />
        <Route path='/boyUsers' component={UserBoysPage} />
      </div>
    </Router>
  );
}

export default App;