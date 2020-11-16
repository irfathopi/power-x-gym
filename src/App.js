import './App.css';
import React from "react";
import PricingPlans from './Component/PricingPlans/PricingPlans';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import GymMembership from './Component/GymMembership/GymMembership';

function App() {
  return (
    
      <Router>
        <Switch>
          <Route exact  path="/">
            <PricingPlans></PricingPlans>
          </Route>
          <Route exact path="/gymmembership">
            <GymMembership></GymMembership>
          </Route>
        </Switch>
      </Router>
    
  );
}

export default App;
