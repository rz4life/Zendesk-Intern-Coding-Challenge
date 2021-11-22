import './App.css';
import { Route, Routes, Link } from 'react-router-dom'
import axios from 'axios'
import { useState} from 'react'

import AllTickets from './pages/alltickets'
import SingleTicket from './pages/singleticket'

function App() {
  // const[allTicket, setallTickets] = useState({})
  // const [singleTicket, setSingleTicket] = useState({})
  return (
    <div className="App">
      <h2>Zendesk Ticket Viewer </h2>

      <h3>Please select One of the following options to Continue: </h3>
      <br/>
      <Routes>
          <Route exact path = "/alltickets" render = { () =>{
            return <AllTickets/>
          }}></Route>
          <Route exact path = "/singleticket" render = {() =>{
            return <SingleTicket/>
          }}/>
      </Routes>
      <p><Link to = "/alltickets"><button> 1 </button></Link> View all tickets </p>
      <p><Link to = "/singleticket"><button> 2 </button></Link>  View a specific ticket </p>
      <br/>
      <Link to = "/"><button className="thirdButton"> return </button></Link>
    </div>
  );
}

export default App;
