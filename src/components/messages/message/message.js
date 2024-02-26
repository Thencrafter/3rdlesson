import React from 'react'

function Message(props){
	return(
		<>
		<div className = "message">
			<p className = "messageUserName">{props.name}</p>
		</div>
		<p className = "messageText">{props.message}</p>
		</>
	)
}

export default Message