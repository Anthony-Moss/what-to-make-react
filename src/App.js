import React from 'react';
import './App.css';
import FindRecipe from './components/FindRecipe';
import NavBar from './components/NavBar';
import HomePage from './components/HomePage';
import RandomRecipe from './components/RandomRecipe';
import SimpleRecipeSearch from './components/SimpleRecipeSearch';

function App() {
  let navLinks = ['Home', 'Search', 'Random']

  return (
    <div className="Home-container">
      <header className="Home-header">
        <h1>What To Make!</h1>
      
        {/* <NavBar data={navLinks}/> */}
      
      </header>
      {/* <HomePage /> */}
      {/* <FindRecipe /> */}
      <SimpleRecipeSearch />
      <RandomRecipe /> 
    </div>
  );
}

export default App;
