import React from "react";
import CardItem from './CartItem';

 const Cart =(props)=> {

   
    

        const {products} = props;
        return (
           <div className="cart">
              {
                products.map((product)=>{
                    return <CardItem  
                    product ={product} 
                    key ={product.id} 
                    onInc = {props.onInc} 
                    onDec={props.onDec} 
                    onDel={props.onDel}
                    />
                })
              }
           </div>
        );
    
}

export default Cart ;