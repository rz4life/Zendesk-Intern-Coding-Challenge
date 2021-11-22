import './App.css';
import {Route, Routes } from 'react-router-dom'
import Navbar from './navbar'
import Alltickets from './pages/alltickets'
import Singleticket from './pages/singleticket'


function App() {
  return (
    <div className="App">
      <div>Hello from react app</div>
      <Navbar/>
      <Routes>
      <Route path = '/alltickets' exact render = {() =>{
        return <Alltickets />
      }}/>
      </Routes>


    </div>
  );
}

export default App;
