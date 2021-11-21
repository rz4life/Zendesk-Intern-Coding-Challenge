import './App.css';
import axios from 'axios'
import { useState} from 'react'
function App() {
  const[allTicket, setallTickets] = useState({})
  const [singleTicket, setSingleTicket] = useState({})
  return (
    <div className="App">
      <h2>Zendesk Ticket Viewer </h2>

      <h3>Please select One of the following options to Continue: </h3>
      <br/>
      <p><button className="firstButton"> 1 </button> View all tickets </p>
      <p><button className="secondButton"> 2 </button> View a specific ticket </p>
      <br/>
      <button className="thirdButton"> return </button>
    </div>
  );
}

export default App;
