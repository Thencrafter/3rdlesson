import React from 'react'
import Pfp from '../../../img/pfp.png'
import Post from './post.js'

function Posts(props){
	return(
		<div className = "posts">
			<h1 className = "postHead">My posts</h1>
			<input></input>
			<button>Post</button>
			{props.posts.map((e)=>
				<Post message = {e.message} id = {e.id}/>
			)}
		</div>
	)
}

export default Posts