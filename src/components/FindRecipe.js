import React from 'react';
import RecipeCard from './RecipeCard';
const Axios = require('axios');

class FindRecipe extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            query: '',
            ingredients: [],
            recipeCards: [],
            dietaryOption: ''
        }
        this.handleChange = this.handleChange.bind(this);
    }

    render() {
        let cards = this.state.recipeCards.map((recipe, i) => {
            return <RecipeCard key={recipe.id} id={recipe.id} title={recipe.title} image={recipe.image} />
        })

        return (
            <div className='search-container'>
                <div className='search-bar'>
                    <div className='user-input'>
                        <h4>Find Recipes</h4>
                        <input type='text' name="query" placeholder="Chicken Salad, Pho" value={this.state.query} onChange={this.handleChange}></input>
                        <h4>Search by Ingredient</h4>
                        <input type='text' name="ingredients" placeholder="Eggs, bacon, milk, onion" value={this.state.ingredients} onChange={this.handleChange}></input>
                    </div>
                    <form>
                    <h4>Dietary Options</h4>
                        <div className='radio'>
                            <label>
                                <input type='radio' name='vegan' value='vegan' onChange={this.setDiet} checked={this.state.dietaryOption === 'vegan'} />
                                Vegan
                            </label>
                        </div>

                        <div className='radio'>
                            <label>
                                <input type='radio' name='vegetarian' value='vegetarian' onChange={this.setDiet} checked={this.state.dietaryOption === 'vegetarian'} />
                                Vegetarian
                            </label>
                        </div>

                        <div className='radio'>
                            <label>
                                <input type='radio' name='keto' value='keto' onChange={this.setDiet} checked={this.state.dietaryOption === 'keto'} />
                                Keto
                            </label>
                        </div>

                        <div className='radio'>
                            <label>
                                <input type='radio' name='Gluten Free' value='Gluten Free' onChange={this.setDiet} checked={this.state.dietaryOption === 'Gluten Free'}/>
                                Gluten Free
                            </label>
                        </div>
                    </form>

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
                    url: `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_SPOON_API_KEY}&query=${this.state.query}&includeIngredients=${this.state.ingredients[0]}&diet=${this.state.dietaryOption}&instructionsRequired=True`
                })

                let cardInfo = response.data.results
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

    setDiet = (event) => {
        console.log(event.target)
        this.setState({'dietaryOption': event.target.name})
    }


    
    // Do not use this unless know that all recipes want to be searched as it is 1pt per recipe not 1 per call
    // getBulkRecipes = async () => {
    //     let ids = this.state.recipeCards.map((recipe) => recipe.id)
    //     try {
    //         const response = await Axios({
    //             method: 'GET',
    //             url: `https://api.spoonacular.com/recipes/informationBulk?apiKey=${process.env.REACT_APP_SPOON_API_KEY}&ids=${ids}`
    //         })
    //         console.log(response)
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }  
}

export default FindRecipe