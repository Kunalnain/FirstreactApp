import React from "react";


const cartItem = (props)=> {
   
    
    
       const{price,title,img,qty}=props.product;
      return (
        <div className="cart-item">

        <div className="left-block">
            <img style={styles.image} src={img}></img>
        </div>

        <div className="right-block">
            <div style={{fontSize:25}}>{title}</div>
            <div style={{color:'grey'}}>$ {price} </div>
            <div style={{color:'grey'}}>Qty : {qty}</div>
        

        <div className="cart-items-action">
        <img 
        alt="increase"
        className="action-icons"
        src="https://cdn-icons-png.flaticon.com/512/992/992651.png"
        onClick={()=>props.onInc(props.product)}
        />
        

         <img 
         alt="decrease" 
         className="action-icons" 
         src="https://cdn-icons-png.flaticon.com/512/992/992683.png"
         onClick={()=>props.onDec(props.product)}
         />
         
         
         <img 
         alt="delete" 
         className="action-icons" 
         src="https://cdn-icons-png.flaticon.com/512/3405/3405244.png"
         onClick={()=>props.onDel(props.product.id)}
         />
         

        </div>

    </div>

    </div>
     );

    
}

const styles={
    image: {
        height:110,
        width:110,
        borderRadius:4,
        marginRight:10,
        background:'#ccc'

    }
}







export default cartItem;
