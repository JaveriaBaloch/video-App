import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import HomePage from './components/HomePage';
import {Routes, Route} from 'react-router-dom'
import OverView from './components/OverviewPage';
import Login from './components/Login';
import UserArea from './components/UserArea';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Routes>
        <Route path="/" exact element={<HomePage/>}/>
        <Route path="/overview/:id" element={<OverView/>}/>
        <Route path="/Login" element={<Login/>}/>
        <Route path="/Profile" element={<UserArea/>}/>
     </Routes>
    </div>
  );
}

export default App;
