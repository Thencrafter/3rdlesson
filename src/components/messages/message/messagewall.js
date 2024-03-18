import React from 'react'
import Pfp from '../../../img/pfp.png'
import Message from './message.js'
import {addMessage} from '../../../data/state.js'
import {changeMessage} from '../../../data/state.js'

let messageText = React.createRef()



function Messagewall(props){
	function newMessage() {
		if (messageText.current.value != "") {
			props.dispatch(addMessage())
			messageText.current.value = ""
		}
		
	}

	let changeMessage = () =>{
		props.dispatch(changeMessage(messageText.current.value))
	}
	return(
		<div className = "messagewall">
			{props.messages.map((e)=>
				<Message message = {e.message} name = {e.name} id = {e.id}/>
			)}
			<input ref = {messageText} 
			value = {props.newMessageText} 
			onChange = {changeMessage} 
			autofocus></input>
			<button onClick = {newMessage}>Message</button>
		</div>
	)
}

export default Messagewall