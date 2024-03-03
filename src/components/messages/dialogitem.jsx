import React from 'react'
import {NavLink} from 'react-router-dom'

function Dialogitem(props){
	return(
		<NavLink to = {`/messages/${props.id}`} className = "contact">{props.name}</NavLink>
	)
}

export default Dialogitem