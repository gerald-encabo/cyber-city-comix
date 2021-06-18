import './App.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import Footer from './components/Footer/Footer';
import Comics from './pages/Comics/Comics';

function App() {
  return (
    <Router>
      <Navbar />
        <Switch>
           <Route path='/cyber-city-comics' exact>
             <Redirect to="/" />
           </Route>
           <Route path='/' component={ Home }  exact />
           <Route path='/comics/:num' component={ Comics } exact/>
        </Switch>
      <Footer />
    </Router>
  );
}

export default App;
