import Flower from '../img/flower.jpg'
import Png from '../img/png.png'
import Tangerine from '../img/tan.png'
import profReducer from './profReducer.js'

function run(){
    console.log('It is fake function');
}

let idNum = 5

let idMNum = 7

const NEWMESSAGE = "NEW-MESSAGE"

const CHANGEMESSAGE = "CHANGE-MESSAGE"

let store = {
_state: {
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
},

dispatch(action){
    this._state = profReducer(action, this._state)
    this.run(this._state)
    if(action.type == NEWMESSAGE){
            let addMessage = {
                message: this._state.messagePage.newMessageText,
                id: idMNum
            }
            this._state.messagePage.messages.push(addMessage)
            this._state.messagePage.newMessageText = ""
            idNum = idNum + 1
            this.run(this._state)
    }
    else if(action.type == CHANGEMESSAGE){
        this._state.messagePage.newMessageText = action.text
        this.run(this._state)
    }
},

subscribe(observer){
    this.run = observer
},

getState(){
    return this._state
}
}

export let addMessage = () =>{
    return{type: NEWMESSAGE, id: 1}
}

export let changeMessage = (mtext) =>{
    return{type: CHANGEMESSAGE, id: 2, text: mtext}
}

export default store