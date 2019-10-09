import React from 'react';
const Axios = require('axios');

class FindRecipe extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            criteria: [],
            recipes: []
        }
        this.handleChange = this.handleChange.bind(this);
    }

    render() {
        return (
            <div>
                <h1>Search recipes</h1>

                <input type='text' name="criteria" placeholder="Search by Ingredients" value={this.state.criteria} onChange={this.handleChange}></input>
                <input type="submit" value="Search" onClick={this.search}/>

                <p>{this.state.recipes[0]}</p>
                <p>{this.state.recipes[2]}</p>
            </div>
        )
    }

    handleChange = (event) => {
        this.setState({[event.target.name]: [event.target.value]});
    }

    search = async () => {
        const recipes = localStorage.getItem('currentRecipes')
        console.log(recipes.length)
        if (recipes.length === 0) {
            try {
                const response = await Axios({
                    method: 'GET',
                    url: `https://api.spoonacular.com/recipes/findByIngredients?apiKey=${process.env.REACT_APP_SPOON_API_KEY}&&ingredients=${this.state.criteria[0]}`
                })
                console.log(response)
                const recipeJSON = JSON.stringify(response.data)
                localStorage.setItem('currentRecipes', localStorage.getItem('currentRecipes') + recipeJSON)
                this.setState({"recipes": [recipeJSON.recipes[0].title, response.data.recipes[0].id, response.data.recipes[0].instructions, response.data.recipes[0].image]})
            } catch (error) {
                alert(error)
                console.log(error);
            }
        }
        
        const recipeData = JSON.parse(recipes)
        console.log(recipeData)
        console.log(localStorage.getItem('currentRecipes'))
        
    }
}

export default FindRecipe