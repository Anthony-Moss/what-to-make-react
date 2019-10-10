import React from 'react';

class RecipeCard extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            id: props.id,
            title: props.title,
            image: props.image
        }
    }

    render() {
        return (
            // <div className='col s-two'>
                <div className='card-small'>
                    <div className='card-image'>
                        <img src={this.props.image} />
                    </div>
                    <div className='card-content'>
                        <p>{this.props.title}</p>
                    </div>
                </div>
            // </div>
        )
    }
}

export default RecipeCard