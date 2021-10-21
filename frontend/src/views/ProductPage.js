import React, { useState } from "react";
import {Link} from "react-router-dom";
import Rating from "../components/Rating";
import { useDispatch, useSelector } from "react-redux";
import Popup from "../components/Popup";
import { useEffect } from "react";
import { createReview, detailsProduct } from "../redux-actions/productActions";
import { LinearProgress } from "@material-ui/core";
import { REVIEW_CREATE_RESET } from "../redux-constants/productConstants";

const ProductPage =(props)=>{
    const dispatch= useDispatch();
    const prodId = props.match.params.id;
    const [qty, setQty] = useState(1); 
    const [rating, setRating] = useState(0); 
    const [comment, setComment] = useState(''); 
const productDetails = useSelector(state => state.productDetails) ;
const {loading, error, product} = productDetails;
const reviewCreate = useSelector(state => state.reviewCreate) ;
const {loading: loadingReviewCreate, error:errorReviewCreate, success:successReviewCreate} = reviewCreate;
const userSignin  = useSelector(state => state.userSignin);
const {userInfo} = userSignin;
useEffect(()=>{
    if(successReviewCreate){
        window.alert("Your review has been added successfully");
        setRating("")
        setComment("")
        dispatch({type: REVIEW_CREATE_RESET})
    }
    dispatch(detailsProduct(prodId))
},[dispatch, prodId, successReviewCreate]);
const addToCartHandler=()=>{
    props.history.push(`/cart/${prodId}?qty=${qty}`)
}

const submitHandler=(e)=>{
  e.preventDefault();
  if(comment && rating){
     dispatch(createReview(prodId, {rating, comment, name:userInfo.name}))
  }else{
     alert("Please Select All Fields!")
  }
}
    return(<div>
        {loading? 
        <LinearProgress
        style={{margin:"15% 30%",height:"2rem", color:"#854d27"}}
       
        color="secondary"
      /> :
        error?<Popup variant="danger">{error}</Popup>:
        <div className="content">
        {/* <div className="back">
        <Link to="/">Go Back</Link>
        </div> */}
        <div className="details">
        <div className="image-details">
        <img src={product.image} alt={product.name}/>
        </div>
        <div className="info-details">
        <ul>
        <li><h1>{product.name}</h1></li>
        <li> <Rating   rating={product.rating} reviews={product.numReviews} /></li>
         <li><h2><strong>₦{product.price}</strong></h2></li>
         <li><strong>Food Details</strong><div>{product.description}</div></li>
        </ul>
    </div>
        <div className = "action-details">
        <ul>
       
       {/* <li>Availability: {product.stock>0? <span className="success">Still In Stock </span>:
                                     <span className="error">Out Of Stock</span>}
       </li> */}
       {
    //    product.stock>0 && 
       (
           <>
           <li className="quantity">
               Quantity: <span>
                   <select className="quantity selected-quantity" value={qty}  onChange={event=> setQty(event.target.value)}>
                       {
                           [...Array(100).keys()].map(x=>(
                               <option key={x+1} value={x+1}>{x+1}</option>
                           ))
                       }
                   </select>
               </span>
           </li>
           <li style={{display:"flex", gap:"4rem", marginTop:"3rem", marginBottom:"-2.5rem"}}>
       <li><Link id="add-btn" to= {`/wishlist/${prodId}`}  className="btn">Save Item<i class="fas fa-heart fa-lg"></i></Link></li>
       <li><button id="add-btn" onClick={addToCartHandler} className="btn">Add To Cart<i className="fa fa-cart-plus fa-lg"></i></button></li>
       </li>
           </>

       )}
     </ul>
        </div>
        </div>
        <div id="reviews">
            <h3 style={{marginLeft:"1rem",fontSize:"2.5rem", color:"#854d27", textShadow:"1px 1px 1px black"}}>Customer Reviews</h3>

            {product.reviews.length===0 && <Popup>No review on this food item.</Popup>} 
            <ul>
             {
             product.reviews.map(review=>{
                return(<>
                <li  key={review._id} style={{ marginLeft:"-3rem",}} >
                    <div style={{display:"flex" , flexDirection:"row", alignItems:"center"}}><strong>{review.name}</strong>
                    
                    <div style={{fontSize:".1rem"}}><Rating rating={review.rating} ></Rating></div>
                   
                    </div>
                   <p>{review.comment}</p>
                   <p>{review.createdAt.substring(0, 10)}</p>

                </li> 
                </>)
            })} 
             <li style={{ marginLeft:"-4rem",}}>
                  {userInfo ?
                   <form action=""   onSubmit={submitHandler} className="form">
                      <div><h3 style={{color:"#854d27", textShadow:"1px 1px 1px black"}}>Submit a review and rating</h3> </div>
                     
                         <div style={{display:"flex", flexDirection:"row", justifyContent:"space-between"}}>
                             <div><label style={{color:'#854d27'}} htmlFor="rating">Rating <i  className="fa fa-star"></i></label></div>
                         <div  style={{fontSize:"1.6rem" ,fontWeight:"bold", color:"#854d27"}} >
                         <input onChange={(e)=>setRating(e.target.value)} type="radio" name="rating"  value="1"/>1
                         <input onChange={(e)=>setRating(e.target.value)} type="radio" name="rating"  value="2"/>2
                         <input onChange={(e)=>setRating(e.target.value)} type="radio" name="rating"  value="3"/>3
                         <input onChange={(e)=>setRating(e.target.value)} type="radio" name="rating"  value="4"/>4
                         <input onChange={(e)=>setRating(e.target.value)} type="radio" name="rating"  value="5"/>5
                         </div>
                        </div> 
<div>
    <label style={{color:"#854d27"}} htmlFor="comment">Comment <i className="fa fa-edit"></i></label>
    <textarea style={{border:"2px solid #854d27"}} name="" value={comment} id="" onChange={(e)=>setComment(e.target.value)} cols="30" rows="3"></textarea>
</div>

<div><label htmlFor=""></label>
   <button className="btn">Submit</button>
</div>
<div>
{loadingReviewCreate && <LinearProgress
             style={{margin:"1% 30%", color:"#854d27"}}
            
             color="secondary"
           /> }
           {errorReviewCreate && 
            <Popup variant="danger">{errorReviewCreate}</Popup>
        }
                  </div>   
                   </form>:
                  (<Popup> <a style={{fontWeight:"bolder", color:"#854d27"}} href="/login">Login</a> to submit a review</Popup>)}
              </li>
            
         
               
               
            </ul>
        </div>

        </div>
        }
        
        </div>
       

    )
};

export default ProductPage;