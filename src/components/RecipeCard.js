import React from 'react';
const Axios = require('axios');

class RecipeCard extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            id: props.id,
            title: props.title,
            image: props.image,
            instructions: [],
            ingredients: [],
            dietaryOptions: { vegan: '', vegetarian: '', ketogenic: '', glutenFree: ''},
            source: ''
        }
    }

    render() {
        return (
                <div className='card-small' id={this.props.id} onClick={this.getRecipeDetails}>
                    <div className='card-image'>
                        <img src={this.props.image} />
                    </div>
                    <div className='card-content'>
                        <p>{this.props.title}</p>
                    </div>
                </div>
        )
    }

    getRecipeDetails = async (event) => {
        let idStr = this.state.id.toString()
        // console.log(idStr)
        // let id = document.getElementById(idStr.toString())
        try {
            const response = await Axios({
                method: 'GET',
                url: `https://api.spoonacular.com/recipes/${idStr}/information?apiKey=${process.env.REACT_APP_SPOON_API_KEY}`
            })
            console.log(response.data)
            let { analyzedInstructions, extendedIngredients, instructions, sourceUrl, vegan, vegetarian, ketogenic, glutenFree } = response.data

            this.setState({
                instructions: analyzedInstructions,
                ingredients: extendedIngredients,
                source: sourceUrl,
                dietaryOptions: { vegan, vegetarian, ketogenic, glutenFree }
            })

        } catch (error) {
            console.log(error)
        }
    }
}

export default RecipeCard