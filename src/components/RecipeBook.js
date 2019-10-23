import React, { Component } from 'react';
import RecipeCard from './RecipeCard';


class RecipeBook extends Component {
    constructor(props) {
        super(props)

        this.state = {
            favorites: [props.favorites],
            toMake: [props.toMake],
            all: [props.allRecipes]
        }
        
    }

    render() {
        let favorites = this.state.favorites.map((recipe, i) => {
            if (recipe !== null) {
                return <RecipeCard key={recipe.id} id={recipe.id} title={recipe.title} image={recipe.urls} />
            } else {
                return (
                <div key={i}>
                    <p>No favorites yet!</p>
                </div>
                )
            }
        })

        // let toMake = this.state.toMake.map((recipe) => {
        //     return <RecipeCard key={recipe.id} id={recipe.id} title={recipe.title} image={recipe.urls} />
        // })

        let allRecipes = this.state.all.map((recipe, i) => {
            if (recipe !== null) {
                return <RecipeCard key={recipe.id} id={recipe.id} title={recipe.title} image={recipe.urls} />
            } else {
                return (
                <div key={i}>
                    <p>No recipes added yet!</p>
                </div>
                )
            }
        })

        return (
            <div>
                <h3>My Recipe Book</h3>
                {allRecipes}
                {favorites}
            </div>
        )
    }
}

export default RecipeBook