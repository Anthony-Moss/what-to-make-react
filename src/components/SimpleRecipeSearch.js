import React, { Component } from 'react';
import RecipeCard from './RecipeCard';
const Axios = require('axios');

class SimpleRecipeSearch extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            criteria: [],
            recipeCards: []
        }
    }

    render() {
        let cards = this.state.recipeCards.map((recipe, i) => {
            let urls = `https://spoonacular.com/recipeImages/${recipe.id}-312x231.jpg`
            return <RecipeCard key={recipe.id} id={recipe.id} title={recipe.title} image={urls} />
        })
        return (
            <div className='search-container'>
                <h1>Search recipes</h1>
                <div className='search-bar'>

                    <input type='text' name="criteria" placeholder="Search Recipes" value={this.state.ingredients} onChange={this.handleChange}></input>
                    
                    <input type="submit" value="Search" onClick={this.simpleSearch}/>
                </div>
                <div className='recipe-cards'>
                    {cards}
                </div>
            </div>
        )
    }


    handleChange = (event) => {
        this.setState({[event.target.name]: [event.target.value]});
    }

    simpleSearch = async () => {
        // make get request to recipe api to get info
            try {
                const response = await Axios({
                    method: 'GET',
                    // spoontaculars complex search endpoint to get details to make recipe cards (id, name, image)
                    url: `https://api.spoonacular.com/recipes/search?apiKey=${process.env.REACT_APP_SPOON_API_KEY}&query=${this.state.criteria}&instructionsRequired=True&number=50`
                })

                let cardInfo = response.data.results
                console.log(cardInfo)
                // if there were not results found send an alert to user
                if (!cardInfo || cardInfo.length === 0) {
                    return alert(`0 recipes found matching ingredients, try widening search!`)
                }
                
                // Sets the state with the recipe data needed for cards
                this.setState({"recipeCards": cardInfo})
            } catch (error) {
                console.log(error);
            }
    }

}

export default SimpleRecipeSearch