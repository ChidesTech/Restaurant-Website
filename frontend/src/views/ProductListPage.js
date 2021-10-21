import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createProduct, deleteProduct, listProducts } from "../redux-actions/productActions";
import Popup from "../components/Popup";
import { LinearProgress } from "@material-ui/core";
import { PRODUCT_CREATE_RESET, PRODUCT_DELETE_RESET } from "../redux-constants/productConstants";
import { Link, useParams } from "react-router-dom";
import {Swiper, SwiperSlide} from "swiper/react";
import SwiperCore, {Navigation, Autoplay} from "swiper";
import styled from '@emotion/styled';

import "swiper/swiper-bundle.min.css";
SwiperCore.use([Navigation, Autoplay]);

const ProjectSectionStyles= styled.div`
padding:  0;

// display: flex;
// flex-direction: column;
.project-items{
  display: flex;
  gap:3rem;
  margin-top: 5rem;
  
 
}
.container{
    padding: 0 1rem;
}
.center{
  text-align: center;
  margin-top: 5rem;
  margin-bottom: 10rem;
 
}
.swiper-container{
  padding-top: 8rem;
  max-width:100%

}

.swiper-button-prev,
.swiper-button-next{
  position: absolute;
  height: 50px;
  width: 50px;
//  background-color: red;
  z-index:18;
  right: 60px;
  left: auto;
  top: 7.3rem;
  transform: translateY(50%);
   color:white;
   border-radius:8px;
   text-shadow: 3px 1px 1px red
}

.swiper-button-next{
  right:0;
  

}
.swiper-button-prev{
 left:0
 

}
.swiper-button-prev::after,
.swiper-button-next::after{
  font-size: 2rem;
  font-weight: bolder;
}
@media only screen and (max-width: 768px){
  .project-items{
    flex-direction: column;
    max-width: 400px;
    margin: 0 auto;
    margin-top: 7rem;
    gap: 5rem;
    .project-img{
      width:100% 
    }
  }
  .swiper-button-prev,
.swiper-button-next{
  position: absolute;
  height: 40px;
  width: 40px;
   background-color: transparent;
  z-index:10;
  right: 60px;
  left: auto;
  top: 8.5rem;
  transform: translateY(50%);
   color:white;
   border-radius:3px;
   text-shadow:none;
  font-weight: bolder;
  z-index:2;
  text-shadow:1px 0 1px red;

   
}
 .swiper-button-next{
     right:0;
   }
   .swiper-button-prev{
     left:0
    
   
    }
   .swiper-button-prev::after,
.swiper-button-next::after{
  font-size: 2rem;
  font-weight: bolder;
  opacity:1;
}
}`
const ProductListPage =(props)=>{

    const productList = useSelector(state=>state.productList);
    const {loading, error, products, pages, page}= productList;
    const productCreate = useSelector(state=>state.productCreate);
    const { error :errorCreate, success: successCreate, product: createdProduct}= productCreate;
    const productDelete = useSelector(state=>state.productDelete);
    const { error :errorDelete, success: successDelete}= productDelete;
    const { pageNumber=1} = useParams();
    const dispatch = useDispatch();
    useEffect(()=>{
        
        if(successCreate){
           
            dispatch({type: PRODUCT_CREATE_RESET});
            props.history.push(`/product/${createdProduct._id}/add`);
        }
        if(successDelete){
           
            dispatch({type: PRODUCT_DELETE_RESET});
        }
        dispatch(listProducts({pageNumber}))
    },[dispatch,createdProduct,props.history, successCreate, successDelete, pageNumber])
const createHandler=()=>{
    dispatch(createProduct());
}
    const deleteHandler=(product)=>{
        if(window.confirm("Are you sure you want to delete this food item?")){
   dispatch(deleteProduct(product._id))}
    }

   
    let sn = 1;

return(<ProjectSectionStyles>
      <h1 style={{textAlign:"center",color:"red",textShadow:"1px 1px 1px black", fontSize:"2.2rem"}}>Administrator Food Items</h1>
    {/* {loadingDelete && <LinearProgress style={{margin:"0 30%",height:"1rem", color:"red"}} color="secondary"/>  } */}
      {errorDelete && <Popup variant="danger">{errorDelete}</Popup> }
      {errorCreate && <Popup variant="danger">{errorCreate}</Popup> }
    {loading?(<LinearProgress style={{margin:"10% 30%",height:"2rem", color:"red"}} color="secondary"/> )
    : error? <Popup variant="danger">{error}</Popup>:
      (<><table className="table">
          {products.length>0 ?  (
              <>
<thead>
    <tr style={{backgroundColor:"white", padding:"1rem 0"}}>
        <th>S.N</th>
        <th>Name</th>
        <th>Price</th>
        <th>Category</th>
        <th><button type="button" onClick={createHandler}
        style={{backgroundColor:"red",marginRight:".5rem",cursor:"pointer", color:"white" ,padding:"1.2rem 1rem"}}
         className="btn-small">Add Food <i className="fa fa-plus"></i></button></th>
    </tr>
</thead>
<tbody>
    { products.map(product=>(
        <tr key={product._id} >
     <td style={{ padding:"2rem 0", textAlign:"center"}}>{sn++}</td>
     <td style={{textAlign:"center"}} >{product.name}</td>
     <td style={{textAlign:"center"}}>{product.price}</td>
     <td style={{textAlign:"center"}}>{product.category }</td>
    <td style={{textAlign:"center"}}>
  
   <button style={{backgroundColor:"wheat",marginRight:"1rem",cursor:"pointer", color:"red"}} type="button" className="btn-small"
                 onClick={()=>{props.history.push(`/product/${product._id}/edit`)}}
                > <i className="fa fa-lg fa-edit"></i></button> 
    <button type="button" style={{ cursor:"pointer"}} className="btn-small"
                onClick={()=>deleteHandler(product)}
                > <i className="fa fa-trash-alt fa-lg"></i></button>  
    </td>
        </tr>
    ))}
</tbody>
         </> ) : <><Popup>No food item has been added.</Popup>
         <button type="button" onClick={createHandler}
         style={{backgroundColor:"red",marginLeft:"1rem",cursor:"pointer", color:"white" ,padding:"1.5rem 1.5rem"}}
          className="btn-small">Add First Food Item <i className="fa fa-plus"></i></button> </>}
      </table>
      {/* <div className="pageBtn">
         { [...Array(pages).keys()].map(x=>{
           return (<>
           <Link className={x+1 === page ? "activePage" :""}  key={x+1}
           to={`/food-list/pageNumber/${x+1}`}
           >{x+1}</Link>
           </>)
         })
         }
        </div> */}
                <div className="pageBtn">
           <Swiper spaceBetween={2}  slidesPerView={10} navigation
           breakpoints={
             {640:{
               //when >=640px
               slidesPerView : 10, 
             },
            768:{
              slidesPerView : 10
            },
            1200:{
              slidesPerView:25
            }
            }
           }
           >
       { [...Array(pages).keys()].map((x, index)=>{
            // if(index>=25) return null;
         return (<>

         <SwiperSlide navigation  key={index }>
            
         <Link className={x+1 === page ? "activePage" :""}  key={x+1}
           to={`/food-list/pageNumber/${x+1}`}
           >{x+1}</Link>
          
             

           </SwiperSlide>

       </>
       )

         
       })}
           </Swiper>
       </div>
      </>

      )
    }
    </ProjectSectionStyles>
)

}

export default ProductListPage;