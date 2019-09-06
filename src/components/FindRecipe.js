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
                <button onClick={this.getRandomRecipe}>Get random recipe</button>

                <p>{this.state.recipes[0]}</p>
                <p>{this.state.recipes[2]}</p>
            </div>
        )
    }

    handleChange = (event) => {
        this.setState({[event.target.name]: [event.target.value]});
    }

    search = async (e) => {
        console.log(e, this.state.criteria[0])
        try {
            const response = await Axios({
                                method: 'GET',
                                url: `https://api.spoonacular.com/recipes/findByIngredients?apiKey=${process.env.REACT_APP_SPOON_API_KEY}&&ingredients=${this.state.criteria[0]}`
                            })
            console.log(response)
            // this.setState({
            //     ...this.state
            //     // 'recipes': [response.data.recipes[0]] 
            // })
        } catch (error) {
            alert(error)
            console.log(error);
        }
    }
    // Axios.get(`https://api.spoonacular.com/recipes/findByIngredients?apiKey=${process.env.REACT_APP_SPOON_API_KEY}${this.state.criteria[0]}`)
    //         .then((response) => {
    //             console.log(response.data)
    //             this.setState({
    //                 'recipes': [response.data.recipes[0]] 
    //             })
    //         })
    //         .catch((error) => {
    //             console.log(error)
    //         })
    // }

    getRandomRecipe = () => {
        // GET 'https://api.spoonacular.com/recipes/random'
        console.log(process.env)
        Axios.get(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_SPOON_API_KEY}`)
            .then((response) => {
                console.log(response.data.recipes[0])
                console.log(response.data.recipes[0].title)
                this.setState({"recipes": [response.data.recipes[0].title, response.data.recipes[0].id, response.data.recipes[0].instructions]})
            })
            .catch((error) => {
                console.log(error)
            })
    }
}

export default FindRecipe