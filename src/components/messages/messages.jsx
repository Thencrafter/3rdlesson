import React from 'react'
import './messages.css'
import Messagewall from './message/messagewall'

function Messages() {
	return(
		<div className = "messages">
			<div className = "contacts">
				<ul className = "personList">
					<a className = "contact">Dmitriy Kozhuhov</a>
					<a className = "contact">Tim Holmaskiy</a>
					<a className = "contact">Joshua Coppola</a>
				</ul>
			</div>
			<div className = "message">
				<Messagewall/>
			</div>
		</div>
	)
}

export default Messages