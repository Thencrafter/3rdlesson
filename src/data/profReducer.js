
let idNum = 5

const NEWPOST = "NEW-POST"

const CHANGEPOST = "CHANGE-POST"

function profReducer(action, state){
	if(action.type == NEWPOST){
        let addPost = {
            message: state.profilePage.newPostText,
            id: idNum
        }
        state.profilePage.posts.unshift(addPost)
        state.profilePage.newPostText = ""
        idNum = idNum + 1
    }
    else if(action.type == CHANGEPOST){
        state.profilePage.newPostText = action.text
    }
    console.log(state)
	return state
}

export default profReducer

export let addPost = () =>{
    return{type: NEWPOST, id: 1}
}

export let changePost = (mtext) =>{
    return{type: CHANGEPOST, id: 2, text: mtext}
}