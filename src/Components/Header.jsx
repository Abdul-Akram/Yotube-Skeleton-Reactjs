import React from 'react'
import "./Header.css"

const Header = () => {
    return (
        <div className='heading'>
            <h1><span><i class="fa-brands fa-youtube"></i></span>Youtube</h1>
            <input type="text" placeholder='Search...' />
        </div>
    )
}

export default Header