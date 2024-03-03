import React from 'react'
import './messages.css'
import Messagewall from './message/messagewall'
import {NavLink} from 'react-router-dom'
import Dialogitem from './dialogitem'
let dialogNames = [
		{name: "Dmitriy Kozhuhov", id: 1},
		{name: "Tim Holmaskiy", id: 2},
		{name: "Joshua Coppola", id: 3}
	]

function Messages(props) {
	return(
		<div className = "messages">
			<div className = "contacts">
				<ul className = "personList">
					{dialogNames.map((e)=>
						<Dialogitem name = {e.name} id = {e.id}/>
					)}
				</ul>
			</div>
			<div className = "message">
				<Messagewall/>
			</div>
		</div>
	)
}

export default Messages