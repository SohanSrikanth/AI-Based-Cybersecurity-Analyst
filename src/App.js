import Login from './Components/Login/Login';
import { Route,Routes,BrowserRouter } from 'react-router-dom';
import Navbar from './Components/Navbar';
import LoginSignup from './Components/Login/LoginSignup'

function App() {
  return (
    <BrowserRouter>
    <Routes>    
    <Route path="/" element={<Navbar/>}></Route>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/signup" element={<LoginSignup/>}></Route>
    </Routes>
    </BrowserRouter>
    
  );
}

export default App;
