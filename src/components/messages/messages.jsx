import React from 'react'
import './messages.css'
import Messagewall from './message/messagewall'
import {NavLink} from 'react-router-dom'
import Dialogitem from './dialogitem'

function Messages(props) {
	return(
		<div className = "messages">
			<div className = "contacts">
				<ul className = "personList">
					<Dialogitem name = {"Dmitriy Kozhuhov"} id = {"1"}/>
					<Dialogitem name = {"Tim Holmaskiy"} id = {"2"}/>
					<Dialogitem name = {"Joshua Coppola"} id = {"3"}/>
				</ul>
			</div>
			<div className = "message">
				<Messagewall/>
			</div>
		</div>
	)
}

export default Messages