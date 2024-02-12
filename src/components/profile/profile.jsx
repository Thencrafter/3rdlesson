import React from 'react'
import Pfp from '../../img/pfp.png'
import './profile.css'

function Profile() {
	return(
		<div className = "profile">
			<div className = "info">
				<img src = {Pfp} className = "mainPfp"></img>
				<p className = "userName">Alex</p>
			</div>
			<div className = "posts">
				<h1 className = "postHead">My posts</h1>
				<input></input>
				<button>Post</button>
				<div className = "post">
					<img src = {Pfp} className = "postPfp"></img>
					<p className = "postUserName">Alex</p>
				</div>
				<p className = "postText">Some text</p>
			</div>
		</div>
	)
}

export default Profile