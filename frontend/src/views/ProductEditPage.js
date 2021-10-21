import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { detailsCategory, detailsProduct, updateProduct } from "../redux-actions/productActions";
import {  LinearProgress} from "@material-ui/core";
import Popup from "../components/Popup";
import { PRODUCT_UPDATE_RESET } from "../redux-constants/productConstants";
import axios from "../../node_modules/axios/index";


const ProductEditPage =(props)=>{
   const productId = props.match.params.id;
   const [name, setName] = useState('');
   const [price, setPrice] = useState('');
   const [image, setImage] = useState('');
   const [category, setCategory] = useState('');
   const [description, setDescription] = useState('');
   const categoryList = useSelector(state=>state.categoryList);
   const {loading: loadingCategory, error: errorCategory, categories}= categoryList;
   const productDetails = useSelector(state=>state.productDetails);
   const {loading, error, product} = productDetails;
   const productUpdate = useSelector(state=>state.productUpdate);
   const {loading: loadingUpdate, error: errorUpdate,success: successUpdate} = productUpdate;
   const dispatch = useDispatch();
   useEffect(()=>{

    if(successUpdate){
   props.history.push("/food-list");

    }
       if(!product || product._id !== productId || successUpdate){
        dispatch({type:PRODUCT_UPDATE_RESET});

        dispatch(detailsProduct(productId))
        dispatch(detailsCategory())

       }else{
           setName(product.name);
           setPrice(product.price);
           setImage(product.image);
           setCategory(product.category);
           setDescription(product.description);
       }
   },[dispatch, product, productId, props, successUpdate]);

   const [uploading, setUploading] = useState(false);
   const [errorUpload, setErrorUpload] = useState("");
   const userSignin  = useSelector(state => state.userSignin);
   const {userInfo} = userSignin;
   const uploadFileHandler=async(e)=>{
      const file = e.target.files[0];
      const bodyFormData = new FormData();
      bodyFormData.append("image", file);
      setUploading(true);
      try {
          const {data} = await axios.post("/api/uploads", bodyFormData,{
          headers:{
              "Content-Type":"multipart/form-data",
              Authorization:`Bearer ${userInfo.token}`
          }});
          setImage(data);
          setUploading(false);
      } catch (error) {
          setErrorUpload(error.message);
          setUploading(false);

      }

   }
   const back=(product)=>{
props.history.push("/food-list");
}

   const submitHandler=(event)=>{
   event.preventDefault();
   dispatch(updateProduct({_id: productId, name, price, image, category, description}));
   }
   return <>
   {loadingUpdate && <LinearProgress
             style={{margin:"1% 30%", color:"red"}}
            
             color="secondary"
           /> }
           {errorUpdate && 
            <Popup variant="danger">{errorUpdate}</Popup>
        }
  {loading ? (
            <LinearProgress
            style={{margin:"10% 30%",height:"2rem", color:"red"}}
           
            color="secondary"
          /> 
          ) : error ? (
            <Popup variant="danger">{error}</Popup>
          ) :    (

            <form   onSubmit={submitHandler}
            className="form">
               <div style={{marginBottom:"-3rem", textAlign:"center"}} className=""><h2>Edit Food Details</h2></div>
          <div >
              <label  htmlFor="name" >Name</label>
              <input type="text" id="name" required placeholder="Enter Food Name" value={name} onChange={(e)=> setName(e.target.value)}/>
          </div>
          <div >
              <label htmlFor="price" >Price</label>
              <input type="number" min="0" id="price" required placeholder="Enter Food Price" value={price} onChange={(e)=> setPrice(e.target.value)}/>
          </div>
          <div style={{display:"none"}} >
              <label htmlFor="image" >Image</label>
              <input type="text"  id="image"
               required 
               placeholder="Enter Food Image"
               value={image} onChange={(e)=> setImage(e.target.value)}/>
          </div>
          <div >
{uploading &&  <LinearProgress style={{marginTop:"2%",marginBottom:"-1rem", color:"red"}} color="secondary"/> }
            {errorUpload && <h4 style={{color:"red", textAlign:"center", marginTop:"1rem", marginBottom:"-1rem"}}>
                {errorUpload}
                </h4>}
              <label htmlFor="imageFile" >Image</label>
              <input type="file" id="imageFile" label="Choose Food" name="" onChange={uploadFileHandler}/>
          </div>
          <div >
              <label htmlFor="description" >Description</label>
              <textarea style={{border:"2px solid rgb(233, 9, 9)", borderRadius:"8px", fontWeight:"bolder"}} type="text" id="description" rows='3' required placeholder="Enter Food Description" value={description} onChange={(e)=> setDescription(e.target.value)}/>
          
          </div>
          <div >
              <label htmlFor="category" >Category</label>
<select required style={{padding:"1rem", borderRadius:"15px", border:"2px solid red",fontWeight:"bolder", outline:"red"}} 
 value={category} onChange={(e)=> setCategory(e.target.value)} 
>

<div>Loading Categories ...</div>

   {loadingCategory? 
   <option style={{padding:"1rem", fontSize:"1.6rem"}}  value="">Loading Categories ...</option>:
   errorCategory
   ?
   <option style={{padding:"1rem",   fontSize:"1.6rem"}}  value="">{errorCategory}</option>
   
     : 
    <>
<option style={{padding:"1rem", fontSize:"1.6rem"}}  value="">--Select Category--</option>

    { categories.map(category=>(<option style={{padding:"1rem", fontSize:"1.6rem"}}  value={category.name}>{category.name}</option>
   )
   
   )}
   </>}


              </select>
 {/* <input type="text" id="category" required placeholder="Enter Food Category" value={category} onChange={(e)=> setCategory(e.target.value)}/> */}
          </div>
          
          
          <div style={{display:"flex",justifyContent:"space-between" ,flexDirection:"row-reverse", marginTop:"1rem"}} >
              <button style={{width:"40%"}} type="submit" className="btn">Done</button>
              <button onClick={()=>back(productId)} style={{width:"40%", backgroundColor:"transparent", borderColor:"transparent", color:"red", boxShadow:"1px 1px 1px 1px red"}} type="button" className="btn">Cancel</button>

          </div>
          {/* <div >
              <label/>
              <button style={{width:"40%"}} type="button" className="btn">Cancel</button>
          </div> */}
          </form>
          )
          }
  
   </>

}

export default ProductEditPage;