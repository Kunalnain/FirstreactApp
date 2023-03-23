import React from "react";

const Navbar = (props) => {
        return(
       
            <div className="nav">
                 <div className="icon-container"> 
                    <img className="cart-sign" src="https://cdn-icons-png.flaticon.com/512/2838/2838838.png" alt="CartSymbol" />
                    <span className="cart-count"> {props.count} </span>
                 </div>
            </div>
        );
}









export default Navbar;