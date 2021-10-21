import React from "react";
import Rating from "./Rating";
import{ Link} from "react-router-dom"



const Product =({product})=>{
    return(
        <>
        <li key={product._id}>
        <div className="product">
                  <div to= {`/product/${product._id}`}>
                  <img style={{borderRadius:"5px 5px 0 0"}}  src={product.image} alt={product.name}/>
                   </div>
                   <div className="price">
                       <div href="">₦{product.price}</div>
                   </div>
                   <div className="overlay ">
                       <Link  className="a"  to= {`/product/${product._id}`}>
                       <i  style={{height:"2rem", width:'2rem',  
                       padding:"1.8rem 2rem", borderRadius:"45px"}} className="fa fa-info icon"></i>
                    </Link>
                       <Link  className="a"  to= {`/wishlist/${product._id}`}>
                       <i  style={{height:"2rem", width:'2rem', 
                       padding:"1.8rem 2rem", borderRadius:"45px"}} className="fa fa-heart icon"></i>
                    </Link>

                       <Link  className="a"  to= {`/cart/${product._id}`}>
                       <i   style={{height:"2rem", width:'2.1rem', fontSize:"2rem",
                       padding:"1.8rem 2rem", borderRadius:"45px"}} className="fa fa-cart-plus icon"></i>
                       </Link>
                   </div>
                   <div style={{borderRight:"1px solid rgba(224, 200, 200, 0.5)", borderLeft:"1px solid rgba(224, 200, 200, 0.5)"}} >
                  <div  className="product-name">
               <Link to= {`/product/${product._id}`}>
             {product.name}
              </Link>
              </div>
              <div className="category-price">
                  <p style={{color:"grey"}}>{product.category}</p>
              <div style={{display:"flex"}} >

             <Rating   rating={product.rating} 
             
              ></Rating><span>({product.numReviews})</span>
                  
                  </div>
              </div>
              </div>
                  </div>
                 
        </li>
        
        </>
        )
};

export default Product;