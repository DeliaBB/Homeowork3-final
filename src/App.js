import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import LoginPage from './LoginPage';
import DashboardPage from './DashboardPage';
import UnsuccessfulLoginPage from './UnsuccessfulLoginPage';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginFailed, setLoginFailed] = useState(false);

  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            {isLoggedIn ? 
              <Redirect to="/dashboard" /> : 
              (loginFailed ? 
                <UnsuccessfulLoginPage onTryAgain={() => setLoginFailed(false)} /> : 
                <LoginPage onSuccess={() => setIsLoggedIn(true)} onFailure={() => setLoginFailed(true)} />
              )
            }
          </Route>
          <Route path="/dashboard">
            {isLoggedIn ? 
              <DashboardPage onLogout={() => setIsLoggedIn(false)} /> : 
              <Redirect to="/" />
            }
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

