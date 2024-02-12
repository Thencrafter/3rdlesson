import React from 'react'
import Pfp from '../../../img/pfp.png'
import Post from './post.js'

function Posts(){
	return(
		<div className = "posts">
			<h1 className = "postHead">My posts</h1>
			<input></input>
			<button>Post</button>
			<Post message = "Hello!"/>
			<Post message = "Nice to meet you!"/>
			<Post message = "My name is Alex!"/>
			<Post message = "What's yours?"/>
		</div>
	)
}

export default Posts