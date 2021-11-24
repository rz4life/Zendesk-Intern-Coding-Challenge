import './App.css';
import {useState} from 'react'
import axios from 'axios'


function App() {

  const [pageNumber, setPageNumber] = useState(0)
  const [alltickets, setAllTicket] = useState({})
  const [Singleticket, setSingleTicket] = useState({})
  const [ticketNumber, setticketNumber] = useState()
  const getAlltickets = async () =>{

    try {
      const getAlltickets = await axios.get(`https://zendeskcodingchallenge434.zendesk.com/api/v2/requests`,{ 
        authorization:{
        username:'',
        password:''
        }
      })
      setAllTicket(getAlltickets)
      console.log(getAlltickets)
      
    }catch(error){
      setAllTicket("Sorry, there was a problem connecting to Zebdesk API")
      console.log(error) 
    }
  }

  const getSingleTicket = async () =>{
    try {
      const getsingleTicket = await axios.get(`https://zendeskcodingchallenge434.zendesk.com/api/v2/search.json?query=${ticketNumber}`)
      setSingleTicket(getsingleTicket)
      console.log("submited")
      
    }catch(error){
      console.log(error) 
      setSingleTicket("Sorry, there was a problem connecting to Zebdesk API")
    }
  }
  return (
    <div className="App">
     <h2>Zendesk Ticket Viewer </h2>


      {
        pageNumber === 0?
        <div>
          <h3>Please select One of the following options to Continue: </h3>
          <br/>
          <p><button onClick = {() =>( setPageNumber(1),getAlltickets())}> 1 </button> View all tickets </p>
          <p><button onClick = {() =>( setPageNumber(2))}> 2 </button> View a specific ticket </p>
          <br/>
        </div>
        : null
      }
      {
        pageNumber === 1?
        <div>
          <h5>All tickets</h5>
          <h5>{alltickets}</h5>
        </div>
        :null
      }

      {
        pageNumber === 2?
        <div>
      
          <input placeholder = 'Enter the Ticket Number here' value = {ticketNumber} onChange= {(e) =>(setticketNumber(e.target.value))}></input>
          <button onClick = {() =>(getSingleTicket())}>Search</button>
              
        </div>
        :null
      }

      <button className="thirdButton" onClick = {() =>( setPageNumber(0),setticketNumber(0) )}> return </button>

    </div>
  );
}

export default App;
