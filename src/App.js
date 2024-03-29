import React from 'react';
import './App.css';
import Login from './common/login/Login';
import Home from './components/traffic/Home';
import {Route, Switch} from 'react-router-dom';


function App() {
  return (
    
      <Switch>

        <Route component={({match}) =>
          <div className="">

            <Route exact path = "/" component = {Login} />
            <Route path = "/home" component = {Home} />
            
          </div>
        }/>

      </Switch>
    
  );
}

export default App;
