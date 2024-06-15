import logo from './logo.svg';
import './App.css';
import Participant from './Components/Participant/Participant';
import Home from './Components/Home/Home';
import { Route, Routes } from 'react-router-dom';
import Login from './Components/LogIn/Login';
import Trainer from './Components/Trainer/Trainer';
import Nav from './Components/Nav/Nav';
import SignUp from './Components/SignUp/SignUp';

function App() {
  return (
    <div >
      
     
      <Routes>
        <Route path="/participant" element={<Participant />}></Route>
        <Route path="/" element={<Nav />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/trainer" element={<Trainer />}></Route>
      </Routes>
    </div>
  );
}

export default App;

