import React from 'react'
import Pfp from '../../img/pfp.png'
import './profile.css'
import Posts from './posts/posts'

function Profile(props) {
	return(
		<div className = "profile">
			<div className = "info">
				<img src = {Pfp} className = "mainPfp"></img>
				<p className = "userName">{props.name}</p>
			</div>
			<Posts posts = {props.profilePage.posts} 
			newPost = {props.newPost} 
			newPostText = {props.newPostText} 
			changePost = {props.changePost}
			dispatch = {props.dispatch}/>
		</div>
	)
}

export default Profile