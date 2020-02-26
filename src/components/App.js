import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import { AboutUs } from './about/AboutUs';
import Homepage from './homepage/Homepage';
// import './reset.css';
import './App.css';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/about" component={AboutUs} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
