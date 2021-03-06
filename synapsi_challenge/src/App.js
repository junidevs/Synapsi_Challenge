import React from 'react';
import Signup from './components/signup';
import PrivateRoute from './components/PrivateRoute';
import Login from './Login';
import Dashboard from './Dashboard';
import {AuthProvider} from './contexts/AuthContext';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
function App() {
  return (
    <Router>
      <AuthProvider>
        <Switch>
          <PrivateRoute exact path="/" component={Dashboard} />
          <Route path="/signup" component={Signup} />
          <Route path="/login" component={Login} />
         </Switch>
      </AuthProvider>
    </Router>
  );
}

export default App;
