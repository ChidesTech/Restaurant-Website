import React, { useEffect } from "react";
import {  addToWishlist, removeFromWishlist } from "../redux-actions/cartActions";
import {useDispatch, useSelector} from "react-redux";
import Popup from "../components/Popup";
import { Link } from "react-router-dom";

const WishListPage = (props) => {
    const prodId = props.match.params.id;
    const cart = useSelector(state=> state.cart);
    const {wishlistItems} = cart;

   const dispatch = useDispatch()
    useEffect(() => {
       if(prodId){
           dispatch(addToWishlist(prodId))
       }
    },[dispatch,prodId]);

    const removeFromWishlistHandler=(id)=>{
    dispatch(removeFromWishlist(id))
    }

    
    
   
    return (<>
         
        <div>
      <h1 style={{textAlign:"center",color:"red",textShadow:"1px 1px 1px black", fontSize:"2.2rem"}}>Saved Items</h1>
     
       
      
           <table>
               
        <tbody>
        {wishlistItems.length === 0 ? <Popup>You Have No Saved Item.</Popup> :
                wishlistItems.map(item => 
        <tr key={item.product} className="it ">
        <td className="" >
        <Link to={`/product/${item.product}`}>
        <img src={item.image} style={{height:"5rem", width:"6rem", marginLeft:"1rem", borderRadius:"6px"}} alt={item.name}/>
        </Link>
       </td>
      <td>
       <Link  to={`/product/${item.product}`}> {item.name}</Link>
       </td>
       <td>
       <Link type="button" to= {`/cart/${item.product}`} className="deleteBtn" >
          <img src="../cart-plus1.svg" style={{height:"3rem" ,width:"2.7rem", }} alt=""/></Link>
          </td>
       <td>
       <button type="button" className="deleteBtn" onClick={()=>removeFromWishlistHandler(item.product)}>
          <img src="../trash-alt-solid.svg" style={{height:"3rem" ,width:"2rem", }} alt=""/></button>
          </td>
       </tr >
        )
        }
     
     
        </tbody>
               
           </table>
       
    </div>
    </>
    )
};

export default WishListPage;