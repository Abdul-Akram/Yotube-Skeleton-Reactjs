import React from 'react'
import { MenuItems } from './MenuItems'
import "./Nav.css"
const Nav = () => {
    return (
        <nav>
            {MenuItems.map((item, index) => {
                return (
                    <div key={index} className='per-menu'>
                        <i className={item.class}></i>
                        <p>{item.label}</p>
                    </div>
                )
            })}
        </nav>
    )
}

export default Nav