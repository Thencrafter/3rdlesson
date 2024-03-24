import Png from '../img/png.png'
import Tangerine from '../img/tan.png'

let idNum = 5

const NEWPOST = "NEW-POST"

const CHANGEPOST = "CHANGE-POST"

let stateObj = {
        messagePage: {
        messages: [
            {message: "Hello!", name: "Alex", id: 1},
            {message: "Hello!", name: "Dmitriy", id: 2},
            {message: "Nice to meet you!", name: "Alex", id: 3},
            {message: "Nice to meet you too!", name: "Dmitriy", id: 4},
            {message: "My name is Alex! What's yours?", name: "Alex", id: 5},
            {message: "Dmitriy", name: "Dmitriy", id: 6}
        ],

        dialogNames: [
            {name: "Dmitriy Kozhuhov", id: 1},
            {name: "Tim Holmaskiy", id: 2},
            {name: "Joshua Coppola", id: 3}
        ],

        newMessageText: "Hello!"
    },
    
    navBar: {
        friends: [
            {name: "Tim", pfp: "../img/flower.jpg", id: 1},
            {name: "Dmitriy", pfp: {Png}, id: 2},
            {name: "Joshua", pfp: {Tangerine}, id: 3}
        ]
    },

    profilePage: {
        posts: [
            {message: "Hello!", id: 1},
            {message: "Nice to meet you!", id: 2},
            {message: "My name is Alex!", id: 3},
            {message: "What's yours?", id: 4}
        ],

        newPostText: "jkh"
    } 
    } 

function profReducer(action = 0, state = stateObj){
    console.log(action)
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

export let rePost = (mtext) =>{
    return{type: CHANGEPOST, id: 2, text: mtext}
}