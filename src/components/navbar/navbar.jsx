import React from 'react'
import './navbar.css'
import {NavLink} from 'react-router-dom'

function Navbar() {
	return(
		<div className = "navbar">
			<NavLink to="/profile" className = "menuItem">Profile</NavLink>
			<NavLink to="/messages" className = "menuItem">Messages</NavLink>
			<NavLink to="/users" className = "menuItem">Users</NavLink>
		</div>
	)
}

export default Navbar