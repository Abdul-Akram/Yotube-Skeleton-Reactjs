import React from 'react'
import "./Header.css"


const Header = ({ search, setsearch }) => {
    return (
        <div className='heading'>
            <h1><span><i class="fa-brands fa-youtube"></i></span>Youtube</h1>
            <input type="text" placeholder='Search...' value={search} onChange={(e) => setsearch(e.target.value)} />
        </div>
    )
}

export default Header