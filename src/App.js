
import './App.css';
import Header from './components/header/header.jsx'
import Navbar from './components/navbar/navbar.jsx'
import Profile from './components/profile/profile.jsx'

function App() {
  return (
    <div className = "wrapper">
      <Header/>
      <Navbar/>
      <Profile/>
    </div>
  );
}

export default App;
