import React from 'react'
import Pfp from '../../../img/pfp.png'
import Post from './post.js'

let postText = React.createRef()


function Posts(props){
	function newPost() {
		if (postText.current.value != "") {
			props.newPost(postText.current.value)
			postText.current.value = ""
		}
		
	}
	return(
		<div className = "posts">
			<h1 className = "postHead">My posts</h1>
			<input ref = {postText}></input>
			<button onClick = {newPost}>Post</button>
			{props.posts.map((e)=>
				<Post message = {e.message} id = {e.id}/>
			)}
		</div>
	)
}

export default Posts