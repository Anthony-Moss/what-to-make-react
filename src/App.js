import React from 'react';
import './App.css';
import FindRecipe from './components/FindRecipe';
import NavBar from './components/NavBar';

function App() {
  let navLinks = ['Home', 'Search', 'Random']

  return (
    <div className="Home-container">
      <header className="Home-header">
        <h1>What To Make!</h1>
      
        <NavBar data={navLinks}/>
        {/* <FindRecipe /> */}
      
      </header>
      <div>
        <h2>Welcome to What To Make</h2>
        <p>The website to help you decide what to cook!</p>
        <h3>Stop Thinking Start Cooking!</h3>
      </div>
    </div>
  );
}

export default App;
