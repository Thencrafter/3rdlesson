
import './App.css';
import Header from './components/header/header.jsx'
import Navbar from './components/navbar/navbar.jsx'
import Profile from './components/profile/profile.jsx'
import Messages from './components/messages/messages.jsx'
import {BrowserRouter, Route, Routes, Switch} from 'react-router-dom' 

function App() {
  return (
    <div className = "wrapper">
    <BrowserRouter>
      <Header/>
      <Navbar/>
      <Switch>
        <Route path = "/profile" component = {Profile}/>
        <Route path = "/messages" component = {Messages}/>
      </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;
