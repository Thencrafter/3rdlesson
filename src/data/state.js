import {run} from '../render.js'
import Flower from '../img/flower.jpg'
import Png from '../img/png.png'
import Tangerine from '../img/tan.png'
console.log(Flower)

let idNum = 5

let state = {
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
        ]
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

export let newPost = (postText) =>{
    let addPost = {
        message: postText,
        id: idNum
    }
    state.profilePage.posts.unshift(addPost)
    state.profilePage.newPostText = ""
    idNum = idNum + 1
    run(state)
}

export let changePost = (text) =>{
    state.profilePage.newPostText = text
    run(state)
}

export default state