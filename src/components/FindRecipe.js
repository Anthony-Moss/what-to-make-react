import React from 'react';
const axios = require('axios');

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
                <form id="recipe-search-form" onSubmit={this.search}>
                    <input name="criteria" placeholder="Search by Ingredients" value={this.state.criteria} onChange={this.handleChange}></input>
                    <button>Search</button>
                </form>

                <button onClick={this.getRandomRecipie}>Get random recipie</button>

                <p>{this.state.recipes[0]}</p>
            </div>
        )
    }

    handleChange = (event) => {
        this.setState({[event.target.name]: [event.target.value]});
    }

    search = () => {
        const url = `https://api.spoonacular.com/recipes/findByIngredients?${this.state.criteria[0]}`
    }

    getRandomRecipie = () => {
        // GET 'https://api.spoonacular.com/recipes/random'
        console.log(process.env)
        axios.get(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_SPOON_API_KEY}`)
            .then((response) => {
                console.log(response.data.recipes[0].title)
                this.setState({"recipes": [response.data.recipes[0].title, response.data.recipes[0].id, response.data.recipes[0].analyzedInstructions]})
            })
            .catch((error) => {
                console.log(error)
            })
    }
}

export default FindRecipe