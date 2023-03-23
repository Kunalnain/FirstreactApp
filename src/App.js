import React from 'react';
import CartItem from './CartItem';
import Cart from './Cart';
import Navbar from './Navbar';

class App extends React.Component {

  
    constructor() {
      super();
      this.state={
         products: [
            {  
               id :1,
               price: 999,
               title: 'phone',
               qty: 0,
               img : 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-card-40-iphone14pro-202209_FMT_WHH?wid=508&hei=472&fmt=p-jpg&qlt=95&.v=1663611329204'
            },
            {
              id :2,
              price: 100,
              title: 'watch',
              qty: 0,
              img : 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/watch-compare-se-202209_GEO_IN_FMT_WHH?wid=308&hei=364&fmt=jpeg&qlt=90&.v=1661557187191'
           },
           {
              id:3,
              price: 50,
              title: 'earpods',
              qty: 0,
              img : 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MME73?wid=890&hei=890&fmt=jpeg&qlt=90&.v=1632861342000'
           },
           {
              id:4,
              price: 700,
              title: 'MacBook',
              qty: 0,
              img : 'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/61bX2AoGj2L._SL1500_.jpg'
           }
         ]
      }
  }

  handleIncrease =(product)=>{
         const {products}= this.state;
         const index = products.indexOf(product);
         products[index].qty+=1;

         this.setState({
          products:products
         });

  }

  handleDecrease=(product)=>{
      const {products} = this.state;
      const index = products.indexOf(product);

      if(products[index].qty===0)return ;

      products[index].qty-=1;

      this.setState({
          products:products
      });

  }
  handleDelete=(id)=>{
      const {products} = this.state;

      const items = products.filter((item)=>item.id !==id);
      this.setState({
          products:items
      });

  }
  getCartCount=()=>{
    const {products}= this.state;
    let count  = 0 ;
    products.forEach((product)=>{
      count += product.qty;
    })
  
    return count;
  }
  getCartTotal=()=>{
    const {products}= this.state;
    let count  = 0 ;
    products.forEach((product)=>{
      count += (product.qty * product.price);
    })
  
    return count;
  }
  render(){
  const {products}=this.state;
  return (
    <div className="App">
     <Navbar
     count = { this.getCartCount()}
     />
     <Cart
        products={products}
        onInc = {this.handleIncrease} 
        onDec={this.handleDecrease} 
        onDel={this.handleDelete}
     />

     <div style={styles.total} >Total:$ {this.getCartTotal()} </div>
    
    </div>
  );
 }
}

const styles={
   
   total:{
    margin: 30,
    fontSize:50
   }

};




export default App;
