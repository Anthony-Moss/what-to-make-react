import React from 'react';

class FindRecipe extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            criteria: [],
            recipies: {}
        }
        this.handleChange = this.handleChange.bind(this);
    }

    render() {
        return (
            <div>
                <h1>Search Recipies</h1>
                <form id="recipe-search-form" onSubmit={this.search}>
                    <input name="criteria" placeholder="Search by Ingredients" value={this.state.criteria} onChange={this.handleChange}></input>
                    <button>Search</button>
                </form>
            </div>
        )
    }

    handleChange = (event) => {
        this.setState({[event.target.name]: [event.target.value]});
    }

    search = () => {
        const url = `https://api.spoonacular.com/recipes/findByIngredients?${this.state.criteria[0]}`

    }
}

export default FindRecipe