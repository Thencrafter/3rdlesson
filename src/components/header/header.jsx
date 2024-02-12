import React from 'react'
import logo from '../../img/logo.png'
import './header.css'

function Header() {
	return(
		<div className = "header">
			<img src = {logo} className = "logo"></img>
		</div>
	)
}

export default Header