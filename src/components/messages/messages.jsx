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
					{props.messages.dialogNames.map((e)=>
						<Dialogitem name = {e.name} id = {e.id}/>
					)}
				</ul>
			</div>
			<div className = "message">
				<Messagewall messages = {props.messages.messages}/>
			</div>
		</div>
	)
}

export default Messages