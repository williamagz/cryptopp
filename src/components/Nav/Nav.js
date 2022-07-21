import React, { Component } from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {


    return (
        <div>
            <Link to="/"> Home </Link>
            <Link to="/about"> </Link>
        </div>
    )
}

export default Nav;