import React from 'react'

function Friend(props){
	return(
		<div>
			<img src = {props.pfp.png}></img>
			<p>{props.name}</p>
		{console.log(props.pfp.png)}
		</div>
	)
}

export default Friend