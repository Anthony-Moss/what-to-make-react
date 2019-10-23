import React, { Component } from 'react';

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
        const stIng = this.state.ingredients;

        const divStyle = {
            display: 'inline-flex',
            'text-align': 'center'
        };
        const pStyle = {
            display: 'flex',
            padding: '5px',
            outline: '1px solid green'
        };

        let makeIngContainer = (ing, i) => {
            return (
                <div key={i}>
                    <p style={pStyle}>{ing}</p>
                </div>
            )
        }
        // let catArr= Object.keys(stIng)
        // console.log(catArr)

        // let catagories = catArr.map((cat) => {
        //     cat = this.state.ingredients[cat]
        //     console.log(cat)
        //     cat.map((ing, i) => {
        //         return (
        //             <div key={i}>
        //                 <p style={pStyle}>{ing}</p>
        //             </div>
        //         )
        //     })
        // })

        let meats = stIng.meats.map((ing, i) => {
            return (
                makeIngContainer(ing, i)
            )
        });

        let seafood = stIng.seafood.map((ing, i) => {
            return (
                makeIngContainer(ing, i)
            )
        });

        let grains = stIng.grains.map((ing, i) => {
            return (
                makeIngContainer(ing, i)
            )
        });

        let vegetables = stIng.vegetables.map((ing, i) => {
            return (
                makeIngContainer(ing, i)
            )
        });

        let fruits = stIng.fruits.map((ing, i) => {
            return (
                makeIngContainer(ing, i)
            )
        });

        let dairy = stIng.dairy.map((ing, i) => {
            return (
                makeIngContainer(ing, i)
            )
        });

        let spices = stIng.spices.map((ing, i) => {
            return (
                makeIngContainer(ing, i)
            )
        });

        return (
            <div className="fridge-contents">
                <h3>Meats</h3>
                <div className='meats' style={divStyle}>
                    {meats}
                </div>

                <h3>seafood</h3>
                <div className='seafood' style={divStyle}>
                    {seafood}
                </div>

                <h3>grains</h3>
                <div className='grains' style={divStyle}>
                    {grains}
                </div>

                <h3>vegetables</h3>
                <div className='vegetables' style={divStyle}>
                    {vegetables}
                </div>

                <h3>fruits</h3>
                <div className='fruits' style={divStyle}>
                    {fruits}
                </div>

                <h3>dairy</h3>
                <div className='dairy' style={divStyle}>
                    {dairy}
                </div>

                <h3>spices</h3>
                <div className='spices' style={divStyle}>
                    {spices}
                </div>
            </div>
        )
    }
}

export default Fridge