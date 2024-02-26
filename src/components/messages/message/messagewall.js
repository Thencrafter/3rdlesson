import React from 'react'
import Pfp from '../../../img/pfp.png'
import Message from './message.js'

function Messages(){
	return(
		<div className = "messagewall">
			<Message message = "Hello!" name = "Alex"/>
			<Message message = "Hello!" name = "Dmitriy"/>
			<Message message = "Nice to meet you!" name = "Alex"/>
			<Message message = "Nice to meet you too!" name = "Dmitriy"/>
			<Message message = "My name is Alex! What's yours?" name = "Alex"/>
			<Message message = "Dmitriy" name = "Dmitriy"/>
			<input></input>
			<button>Message</button>
		</div>
	)
}

export default Messages