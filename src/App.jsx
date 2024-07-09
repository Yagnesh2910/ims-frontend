import View from './pages/View';
import Add from './pages/Add';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './pages/Login';
import Signup from './pages/Signup';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="signup" element={<Signup/>}/>
        <Route path="view" element={<View/>}/>
        <Route path="add" element={<Add/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
