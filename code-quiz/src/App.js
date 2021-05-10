import React, { useState } from "react";
import logo from './logo.svg';
import './App.css';

import Home from './pages/Home';
import HighScores from './pages/HighScores';
import QuizComplete from './pages/QuizComplete';
import Questions from './pages/QuizComplete';

import Header from './components/Header';
import Footer from './components/Footer';

function App() {
const [currentPage, handlePageChange] = useState('QuizComplete');

// Select page based on currenPage state
const renderPage = () => {
  switch (currentPage) {
    case 'Home': return <Home/>;
    case 'HighScores': return <HighScores/>;
    case 'QuizComplete': return <QuizComplete/>;
    case 'Questions': return <Questions/>;
    default: return <Home/>
  }
}

  return (
    <div className="App">
      <Header className="App-header"/>
      <header className="App-header">
        {renderPage(currentPage)}
      </header>
      <Footer />
    </div>
  );
}

export default App;
