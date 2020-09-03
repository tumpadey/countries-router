import React from 'react';

import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home';
import NoMatch from './NoMatch/NoMatch';
import CountryDetail from './components/CountryDetail/CountryDetail';

function App() {
 
  return (
    <Router>
      <Switch>
        <Route path="/Home">
          <Home />
        </Route>
        <Route path ="/country/:countryName">
          <CountryDetail />
        </Route>
        <Route exact path ="/">
          <Home />
         </Route>
         <Route path ="*">
           <NoMatch></NoMatch>

         </Route>
      </Switch>
    </Router>
  );
}

export default App;
