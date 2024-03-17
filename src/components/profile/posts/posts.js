import React from 'react'
import Pfp from '../../../img/pfp.png'
import Post from './post.js'

let postText = React.createRef()


function Posts(props){
	function newPost() {
		if (postText.current.value != "") {
			props.dispatch({type: "NEW-POST"})
			postText.current.value = ""
		}
		
	}

	let changePost = () =>{
		props.dispatch({type: "CHANGE-POST", text: postText.current.value})
	}

	return(
		<div className = "posts">
			<h1 className = "postHead">My posts</h1>
			<input ref = {postText} value = {props.newPostText} onChange = {changePost} autofocus></input>
			<button onClick = {newPost}>Post</button>
			{props.posts.map((e)=>
				<Post message = {e.message} id = {e.id}/>
			)}
		</div>
	)
}

export default Posts