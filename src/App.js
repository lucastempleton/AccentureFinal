import './App.css';
import OrderForm from './OrderForm';
import { useState } from 'react'

function App() {
  // set states for now serving counter and the customers number
  let [customerCounter, setCustomerCounter] = useState(0);
  let [counter, setCounter] = useState(1);
  // boolean to open/close popup order form
  const [popUp, setPopUp] = useState(true);
  // function to reset the counters at the end of the night
  const reset = () => {setCounter(1); setCustomerCounter(0)}
  const changePopUp = () => setPopUp(!popUp)
  function addCounter(){setCounter(++counter)}
  function addCustomerCounter(){setCustomerCounter(++customerCounter)}
  function grabTicket(){addCustomerCounter(); alert(`Please be at the counter when it is your turn, your number is: ${customerCounter}`)}

  function clockTick() {
    let currentTime = new Date(),
        hours = currentTime.getHours(),
        minutes = currentTime.getMinutes(),
        seconds = currentTime.getSeconds(),
        text = (hours + ':' + minutes + ':' + seconds);
    // get the element with the id of "date" and change the content to the text variable we made above
    document.getElementById('date').innerHTML = text;
    // when time hits close the counters will reset
    if(hours === 21){reset()}
  }
  // run the clockTick function every 1000ms (1 second)
  setInterval(clockTick, 1000);
  return (
    <div className="App">
      <p id="date"></p>
      {/* currently serving */}
      <h1 className="counter">Now Serving: {counter}</h1>
      {/* button opens a form where customer can enter what they want */}
      <button className="start-order" onClick={()=>changePopUp()}>Start Order</button>
      {/* In case a customer would rather talk to one of the employees while ordering */}
      <button className="start-order" onClick={()=>grabTicket()}>Grab Ticket</button>
      {/* tenary operator to decide whether or not the form should be open */}
      { popUp ? null :

        <OrderForm changePopUp={changePopUp}/>
      }
      <br></br><br></br>
      {/* Employees will press this button when an order is complete */}
      <button className="complete-order" onClick={()=>addCounter()}>Order Complete</button>
      {/* Employees can press the reset button at the end of the night or could be automated by time */}
      <button className="complete-order" onClick={()=>{reset(); alert('Great work tonight!')}}>Reset</button>
      {/* counters will also be at closing time 9PM*/}
    </div>
  );
}

export default App;
