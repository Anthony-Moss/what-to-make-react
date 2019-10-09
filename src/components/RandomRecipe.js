import React, { Component } from 'react';
const Axios = require('axios');

class RandomRecipe extends Component {
    constructor(props) {
        super(props)
        this.state = {
            recipe: []
        }
    }

    render() {
        return (
            <div>
                <button onClick={this.getRandomRecipe}>Get random recipe</button>
                <p>{this.state.recipe[0]}</p>
                <p>{this.state.recipe[2]}</p>
            </div>
        )
    }

    getRandomRecipe = () => {
        // GET 'https://api.spoonacular.com/recipes/random'
        console.log(process.env)
        Axios.get(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_SPOON_API_KEY}`)
            .then((response) => {
                console.log(response.data.recipes[0])
                console.log(response.data.recipes[0].title)
                this.setState({"recipe": [response.data.recipes[0].title, response.data.recipes[0].id, response.data.recipes[0].instructions, response.data.recipes[0].image]})
            })
            .catch((error) => {
                console.log(error)
            })
    }
}

export default RandomRecipe