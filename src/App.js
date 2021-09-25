import './App.css';
import React from 'react';
import Create from './components/create';
import Update from './components/update';
import Read from './components/read';
import Admin from './components/admin';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/home';
import UserLogIn from './components/user-log';
// import { Button } from 'semantic-ui-react';


function App() {
  
  return (

    <Router>
        <div className="main">
          <h1 className="main-header">React CRUD Operations</h1>
          <Home />
          <div>
            <Route exact path="/admin" component={Admin}></Route>
          </div>
          <div>
            <Route exact path="/create" component={Create}></Route>
          </div>
          <div>
            <Route exact path="/update" component={Update}></Route>
          </div>
          <div>
            <Route exact path="/read" component={Read}></Route>
          </div>
          <div>
            <Route exact path="/user-log" component={UserLogIn}></Route>
          </div>
          
        </div>
    </Router>
  );
}

export default App;
