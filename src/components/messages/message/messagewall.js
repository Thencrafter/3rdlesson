import React from 'react'
import Pfp from '../../../img/pfp.png'
import Message from './message.js'
let messages = [
		{message: "Hello!", name: "Alex", id: 1},
		{message: "Hello!", name: "Dmitriy", id: 2},
		{message: "Nice to meet you!", name: "Alex", id: 3},
		{message: "Nice to meet you too!", name: "Dmitriy", id: 4},
		{message: "My name is Alex! What's yours?", name: "Alex", id: 5},
		{message: "Dmitriy", name: "Dmitriy", id: 6}
	]


function Messagewall(props){
	return(
		<div className = "messagewall">
			{props.messages.map((e)=>
				<Message message = {e.message} name = {e.name} id = {e.id}/>
			)}
			<input></input>
			<button>Message</button>
		</div>
	)
}

export default Messagewall