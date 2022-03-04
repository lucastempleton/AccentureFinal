
export default function OrderForm({changePopUp}){
    return (
        // this pop up covers the entire page
        <div className="popup">
          {/* this popup is the form that the user will interact with */}
          <div className="popup-inner">
            {/* button controls the tenary operator in case a customer wants to cancel */}
            <button className="close-btn" onClick={() => changePopUp()}>X</button>
          </div>
        </div>
    )
}