import React, { Component } from 'react';
import RecipeCard from './RecipeCard';


class RecipeBook extends Component {
    constructor(props) {
        super(props)

        this.state = {
            favorites: [props.favorites],
            toMake: [props.toMake],
            all: [props.all]
        }
        
    }

    render() {
        let favorites = this.state.favorites.map((recipe) => {
            if (recipe !== null) {
                return <RecipeCard key={recipe.id} id={recipe.id} title={recipe.title} image={recipe.urls} />
            } else {
                return <div>
                    <p>No Favorites yet!</p>
                </div>
            }

        })

        // let toMake = this.state.toMake.map((recipe) => {
        //     return <RecipeCard key={recipe.id} id={recipe.id} title={recipe.title} image={recipe.urls} />
        // })

        // let allRecipes = this.state.all.map((recipe) => {
        //     return <RecipeCard key={recipe.id} id={recipe.id} title={recipe.title} image={recipe.urls} />
        // })

        return (
            <div>
                {favorites}
            </div>
        )
    }
}

export default RecipeBook