import React from 'react'
import Pfp from '../../../img/pfp.png'
import Post from './post.js'
import {addPost} from '../../../data/profReducer.js'
import {changePost} from '../../../data/profReducer.js'

let postText = React.createRef()


function Posts(props){
	function newPost() {
		if (postText.current.value != "") {
			props.dispatch(addPost())
			postText.current.value = ""
		}
		
	}

	let changePost = () =>{
		props.dispatch(changePost(postText.current.value))
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