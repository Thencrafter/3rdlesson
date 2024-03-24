
import './App.css';
import Header from './components/header/header.jsx'
import Navbar from './components/navbar/navbar.jsx'
import Profile from './components/profile/profile.jsx'
import Messages from './components/messages/messages.jsx'
import {BrowserRouter, Route, Routes, Switch} from 'react-router-dom' 

function App(props) {
  console.log(props.state)
  return (
    <div className = "wrapper">
    <BrowserRouter>
      <Header/>
      <Navbar friends = {props.state.navBar}/>
      <Switch>
        <Route path = "/profile" render = {() =>
          <Profile profilePage = {props.state.profilePage} 
          newPost = {props.newPost} 
          newPostText = {props.state.profilePage.newPostText} 
          changePost = {props.changePost}
          dispatch = {props.dispatch}/>
        }/>
        <Route exact path = '/messages' render = {() =>
          <Messages messages = {props.state.messagePage}
          dialogNames = {props.state.messagePage} 
          newMessage = {props.newMessage} 
          newMessageText = {props.state.messagePage.newMessageText} 
          changeMessage = {props.changeMessage}
          dispatch = {props.dispatch}/>
        }/>
      </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;
