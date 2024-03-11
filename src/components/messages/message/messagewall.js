import React from 'react'
import Pfp from '../../../img/pfp.png'
import Message from './message.js'



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