import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Home from './pages/Home'
import {BrowserRouter, Route, Routes } from 'react-router-dom'
import Services  from './pages/Services';
import Team  from './pages/Team';
import Contact from './pages/Contact'
import Footer from './components/Footer'
function App() {
  return (
    <div className="App">
      <Header/>
      <BrowserRouter>      
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/services' element={<><Services/><Footer/></>}/>
          <Route path='/team' element={<><Team/><Footer/></>}/>
          <Route path='/contact' element={<><Contact/><Footer/></>}/>

        </Routes>
    
      </BrowserRouter>
     
    </div>
  );
}

export default App;
