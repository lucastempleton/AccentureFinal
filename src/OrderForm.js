import {useState} from 'react'
export default function OrderForm({changePopUp, order, orderNumber}){
    const [cart, setCart] = useState([])
    const [showPork, setPork] = useState(true)
    const [showBrats, setBrats] = useState(true)
    const [showBeef, setBeef] = useState(true)
    const [showChicken, setChicken] = useState(true)
    function openPork(){setPork(!showPork);setBrats(true);setBeef(true);setChicken(true)}
    function openBrats(){setPork(true);setBrats(!showBrats);setBeef(true);setChicken(true)}
    function openBeef(){setPork(true);setBrats(true);setBeef(!showBeef);setChicken(true)}
    function openChicken(){setPork(true);setBrats(true);setBeef(true);setChicken(!showChicken)}
    function addToCart(e){
        setCart([...cart, e.target.value])
    }
    return (
        // this pop up covers the entire page
        <div className="popup">
          {/* this popup is the form that the user will interact with */}
          <div className="popup-inner">
            {/* button controls the tenary operator in case a customer wants to cancel */}
            <button className="close-btn" onClick={() => changePopUp()}>X</button>
            <br></br><br></br>
            <button onClick={()=>openPork()}>Pork</button>
            <button onClick={()=>openBrats()}>Brats</button>
            <button onClick={()=>openBeef()}>Beef</button>
            <button onClick={()=>openChicken()}>Chicken/Poultry</button>
            <br></br><br></br>
            {showPork ? null :
                <><button>Pork Chops</button><button>Stuffed chops</button></>
            }
            {showBrats ? null :
                <><button>Brat Links</button><button>Brat Burgers</button></>
            }
            {showBeef ? null :
                <><button>Steaks</button><button>Ground Beef</button><button>Burgers</button></>
            }
            {showChicken ? null :
                <><button>Marinated Chicken</button><button>Chicken Grillers</button>
                <button>Stuffed Chicken</button><button>Chicken Patties</button></>
            }
            <br></br>
            <button className="submit" onClick={()=>{order(); alert(`Your order number is: ${orderNumber + 1}`); changePopUp()}}>Submit Cart</button>
          </div>
        </div>
    )
}