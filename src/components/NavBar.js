import React from 'react';

class NavBar extends React.Component {
    constructor(props) {
        super(props)
    }

    render () {
        const navLinks = this.props.data.map((link,i) => {
            return (
                <li key={i} className="page-link">
                    <a className='material-icons' href='home'>{link}</a>
                </li>
            )
        })
        return (
            <div className='Navbar'>
                <ul className='nav center-align'>
                    {navLinks}
                </ul>
            </div>
        )
    }
    
}

export default NavBar