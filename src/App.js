import React from 'react';
import './App.css';
import FindRecipe from './components/FindRecipe';
import NavBar from './components/NavBar';
import HomePage from './components/HomePage';
import RandomRecipe from './components/RandomRecipe';
import SimpleRecipeSearch from './components/SimpleRecipeSearch';
import RecipeBook from './components/RecipeBook';

function App() {
  let favorites = localStorage.getItem('favoriteRecipes')
  let toMake = localStorage.getItem('toMakeRecipes')
  let allRecipes = localStorage.getItem('allRecipes')

  return (
    <div className="Home-container">
      <header className="Home-header">
        <h1>What To Make!</h1>
      
        {/* <NavBar data={navLinks}/> */}
      
      </header>
      {/* <HomePage /> */}
      <FindRecipe />
      {/* <SimpleRecipeSearch /> */}
      <RandomRecipe /> 
      <RecipeBook favorites={favorites} toMake={toMake} allRecipes={allRecipes} />
    </div>
  );
}

export default App;
