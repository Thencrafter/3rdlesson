import React from 'react'
import Pfp from '../../../img/pfp.png'

function Post(props){
	return(
		<>
		<div className = "post">
			<img src = {Pfp} className = "postPfp"></img>
			<p className = "postUserName">Alex</p>
		</div>
		<p className = "postText">{props.message}</p>
		</>
	)
}

export default Post