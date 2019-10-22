import React, { Component } from 'react';
import { interfaceDeclaration } from '@babel/types';

class Fridge extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            ingredients: {
                meats: ['steak', 'bacon', 'turkey', 'ground beef', 'chicken'],
                seafood: ['lobster', 'shrimp', 'salmon', 'crab'],
                grains: ['pasta', 'bread', 'flour', 'beans'],
                vegetables: ['bell pepper', 'broccoli', 'brussels sprouts', 'carrot', 'cucumber', 'lettuce', 'mushrooms', 'onion', 'spinich', 'potatoe'],
                fruits: ['kiwi', 'apple', 'bannana', 'tomatoe', 'avacado', 'blueberry', 'cherry', 'grapes', 'lime', 'lemon', 'orange', 'pineapple', 'strawberry', 'watermelon'],
                dairy: ['milk', 'cheese', 'heavy cream', 'butter', 'skim milk', 'greek yogurt', 'cottage cheese', ],
                spices: ['ground cumin', 'cinnamon', 'paprika', 'garlic powder', 'onion powder', 'nutmeg', 'coriander seeds', 'cloves', 'turmeric', 'yellow mustard seed powder', 'ground allspice', 'ginger root', 'basil', 'bay leves', 'thyme', 'oregano', 'rosemary', 'red pepper flakes', 'cayenne chile powder', 'curry powder', 'cajun seasoning', 'salt', 'pepper', 'vinegar', 'olive oil']
            }
        }
    }

    render() {
        const divStyle = {
            display: 'flex',
        };
        const pStyle = {
            display: 'inline-flex',
            padding: '5px',
            outline: '1px solid green'
        };

        let meats = this.state.ingredients.meats.map((ing, i) => {
            return (
                <div key={i}>
                    <p style={pStyle}>{ing}</p>
                </div>
            )
        });

        return (
            <div className="fridge-contents" style={divStyle}>
                <div className='meats' style={divStyle}>
                    {meats}
                </div>
            </div>
        )
    }
}

export default Fridge