import React from "react";
import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';

import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header className="App-header"/>
      <header className="App-header">
        <Home></Home>
      </header>
      <Footer />
    </div>
  );
}

export default App;
