import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <div className="drop-shadow-xl p-4 " >
            <nav className="navbar w-full rounded-lg bg-white p-4 flex place-content-between ">
                <Link to="/">
                    <h2 className="mx-6 text-2xl font-extrabold tracking-tight text-gray-900">STORE</h2>
                </Link>
                <h2 className="mx-6 text-2xl font-extrabold tracking-tight text-gray-900">Register</h2>
            </nav>
        </div>
    )
}

export default Navbar