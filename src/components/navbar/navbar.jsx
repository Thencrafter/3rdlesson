import React from 'react'
import './navbar.css'
import {NavLink} from 'react-router-dom'
import Friends from './friend.jsx'

function Navbar(props) {
	return(
		<div className = "navbar">
			<NavLink to="/profile" className = "menuItem">Profile</NavLink>
			<NavLink to="/messages" className = "menuItem">Messages</NavLink>
			<NavLink to="/users" className = "menuItem">Users</NavLink>
			<div className = "friends">
				{props.friends.friends.map((e)=>
						<Friends name = {e.name} pfp = {e.pfp} id = {e.id}/>
				)}
			</div>
		</div>
	)
}

export default Navbar