import React from 'react'
import './navbar.css'

function Navbar() {
	return(
		<div className = "navbar">
			<a className = "menuItem">Profile</a>
			<a className = "menuItem">Messages</a>
			<a className = "menuItem">Users</a>
		</div>
	)
}

export default Navbar