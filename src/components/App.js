import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import { AboutUs } from './about/AboutUs';
import SaleDetail from './sale/SaleDetail';
import Homepage from './homepage/Homepage';
import './reset.css';
import './App.css';
import PricesOverTimeChart from '../components/sale/charts/Chart';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/about" component={AboutUs} />
        <Route path="/detail/:id" component={SaleDetail} />
        <Route path="/chart/" component={PricesOverTimeChart} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
