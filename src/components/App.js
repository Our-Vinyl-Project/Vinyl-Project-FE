import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import { AboutUs } from './about/AboutUs';

export default function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/about" component={AboutUs} />
      </Switch>
      <Footer />
    </Router>
  );
}
  
