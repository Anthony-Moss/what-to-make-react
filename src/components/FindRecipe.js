import React from 'react';
import RecipeCard from './RecipeCard';
const Axios = require('axios');

class FindRecipe extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            criteria: [],
            recipeCards: []
        }
        this.handleChange = this.handleChange.bind(this);
    }

    render() {
        let cards = this.state.recipeCards.map((recipe, i) => {
            return <RecipeCard key={recipe.id} id={recipe.id} title={recipe.title} image={recipe.image} />
        })
        return (
            <div className='search-container'>
                <h1>Search recipes</h1>
                <div className='search-bar'>

                    <input type='text' name="criteria" placeholder="Search by Ingredients" value={this.state.criteria} onChange={this.handleChange}></input>
                    <input type="submit" value="Search" onClick={this.searchComplex}/>
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

    searchComplex = async () => {
        // make get request to recipe api to get info
            try {
                const response = await Axios({
                    method: 'GET',
                    // spoontaculars complex search endpoint to get details to make recipe cards (id, name, image)
                    url: `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_SPOON_API_KEY}&includeIngredients=${this.state.criteria[0]}&instructionsRequired=True`
                })

                let cardInfo = response.data.results
                // if there were not results found send an alert to user
                if (!cardInfo || cardInfo.length === 0) {
                    return alert(`0 recipes found matching criteria, try widening search!`)
                }
                
                // Sets the state with the recipe data needed for cards
                this.setState({"recipeCards": cardInfo})
            } catch (error) {
                console.log(error);
            }
    }

    getBulkRecipes = async () => {
        let ids = this.state.recipeCards.map((recipe) => recipe.id)
        try {
            const response = await Axios({
                method: 'GET',
                url: `https://api.spoonacular.com/recipes/informationBulk?apiKey=${process.env.REACT_APP_SPOON_API_KEY}&ids=${ids}`
            })
            console.log(response)
        } catch (error) {
            console.log(error)
        }
    }  
}

export default FindRecipe