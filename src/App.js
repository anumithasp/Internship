import logo from './logo.svg';
import './App.css';
import Participant from './Components/Participant/Participant';
import Home from './Components/Home/Home';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div >
     
      <Routes>
        <Route path="/participant" element={<Participant />}></Route>
        <Route path="/" element={<Home/>}></Route>
      </Routes>
    </div>
  );
}

export default App;

