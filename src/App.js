import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

import Navigation from './components/Navigation';
import CreateFiscalias from './components/CreateFiscalias';
import CreateUser from './components/CreateUser';
import FiscaliaList from './components/FiscaliaList';
import Main from './components/Main';


function App() {
  return (
    <Router>
      <Navigation/>
      <div className="container p-4">
        <Route path="/" exact component={Main}/>
      <Route path="/fiscalist" exact component={FiscaliaList}/>
      <Route path="/edit/:id" exact component={CreateFiscalias}/>
      <Route path="/create" exact component={CreateFiscalias}/>
      <Route path="/user" exact component={CreateUser}/>
      </div>
    </Router>

    
  );
}

export default App;
