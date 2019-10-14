import React, { Component } from 'react';

class SimpleRecipeSearch extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            criteria: []
        }
    }

    render() {
        return (
            <div className='search-container'>
                <h1>Search recipes</h1>
                <div className='search-bar'>

                    <input type='text' name="criteria" placeholder="Search Recipes" value={this.state.ingredients} onChange={this.handleChange}></input>
                    
                    <input type="submit" value="Search" onClick={this.simpleSearch}/>
                </div>
                <div className='recipe-cards'>
                    {cards}
                </div>
            </div>
        )
    }

}

export default SimpleRecipeSearch