
import './App.css';
import Header from './components/header/header.jsx'
import Navbar from './components/navbar/navbar.jsx'
import Profile from './components/profile/profile.jsx'
import Messages from './components/messages/messages.jsx'
import {BrowserRouter, Route, Routes, Switch} from 'react-router-dom' 

function App(props) {
  return (
    <div className = "wrapper">
    <BrowserRouter>
      <Header/>
      <Navbar friends = {props.state.navBar}/>
      <Switch>
        <Route path = "/profile" render = {() =>
          <Profile posts = {props.state.profilePage} newPost = {props.newPost} newPostText = {props.state.profilePage.newPostText} changePost = {props.changePost}/>
        }/>
        <Route exact path = '/messages' render = {() =>
          <Messages messages = {props.state.messagePage} dialogNames = {props.state.messagePage}/>
        }/>
      </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;
