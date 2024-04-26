import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../pages/home.css'
const Header = () => {
    const navigate = useNavigate()
    return (
        <nav>
            <div class="navleft">Mental Health</div>
            <div class="navright">
                <ul>
                    <li>Home</li>
                    <li>Logout</li>
                </ul>

            </div>
        </nav>
    )
}

export default Header