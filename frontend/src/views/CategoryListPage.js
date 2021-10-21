import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createCategory, deleteCategory, listCategories } from "../redux-actions/productActions";
import Popup from "../components/Popup";
import { LinearProgress } from "@material-ui/core";
import { CATEGORY_CREATE_RESET, CATEGORY_DELETE_RESET } from "../redux-constants/productConstants";

const CategoryListPage =(props)=>{

    const categoryList = useSelector(state=>state.categoryList);
    const {loading, error, categories}= categoryList;
    const categoryCreate = useSelector(state=>state.categoryCreate);
    const { error :errorCreate, success: successCreate, category: createdCategory}= categoryCreate;
    const categoryDelete = useSelector(state=>state.categoryDelete);
    const { error :errorDelete, success: successDelete}= categoryDelete;
   
    const dispatch = useDispatch();
    useEffect(()=>{
        
        if(successCreate){
           
            dispatch({type: CATEGORY_CREATE_RESET});
            props.history.push(`/category/${createdCategory._id}/add`);
        }
        if(successDelete){
           
            dispatch({type: CATEGORY_DELETE_RESET});
        }
        dispatch(listCategories())
    },[dispatch,createdCategory,props.history, successCreate, successDelete])
const createHandler=()=>{
    dispatch(createCategory());
}
    const deleteHandler=(category)=>{
        if(window.confirm("Are you sure you want to delete this food category?")){
   dispatch(deleteCategory(category._id))}
    }

   
    let sn = 1;

return(<>
      <h1 style={{textAlign:"center",color:"red",textShadow:"1px 1px 1px black", fontSize:"2.2rem"}}>Administrator Food Categories </h1>
    {/* {loadingDelete && <LinearProgress style={{margin:"0 30%",height:"1rem", color:"red"}} color="secondary"/>  } */}
      {errorDelete && <Popup variant="danger">{errorDelete}</Popup> }
      {errorCreate && <Popup variant="danger">{errorCreate}</Popup> }
    {loading?(<LinearProgress style={{margin:"10% 30%",height:"2rem", color:"red"}} color="secondary"/> )
    : error? <Popup variant="danger">{error}</Popup>:
      (<table className="table">
          {categories.length>0 ?  (
              <>
<thead>
    <tr style={{backgroundColor:"white", padding:"1rem 0"}}>
        <th>S.N</th>
        <th>Category</th>
        
        <th><button type="button" onClick={createHandler}
        style={{backgroundColor:"red",marginRight:".5rem",cursor:"pointer", color:"white" ,padding:"1.2rem 1rem"}}
         className="btn-small">Add Category <i className="fa fa-plus"></i></button></th>
    </tr>
</thead>
<tbody>
    { categories.map(category=>(
        <tr key={category._id} >
     <td style={{ padding:"2rem 0", textAlign:"center"}}>{sn++}</td>
     <td style={{textAlign:"center"}} >{category.name}</td>
    
    <td style={{textAlign:"center"}}>
  
   <button style={{backgroundColor:"wheat",marginRight:"1rem",cursor:"pointer", color:"red"}} type="button" className="btn-small"
                 onClick={()=>{props.history.push(`/category/${category._id}/edit`)}}
                > <i className="fa fa-lg fa-edit"></i></button> 
    <button type="button" style={{ cursor:"pointer"}} className="btn-small"
                onClick={()=>deleteHandler(category)}
                > <i className="fa fa-trash-alt fa-lg"></i></button>  
    </td>
        </tr>
    ))}
</tbody>
         </> ) : <><Popup>No food category has been added.</Popup>
         <button type="button" onClick={createHandler}
         style={{backgroundColor:"red",marginLeft:"1rem",cursor:"pointer", color:"white" ,padding:"1.5rem 1.5rem"}}
          className="btn-small">Add First Food Category <i className="fa fa-plus"></i></button> </>}
      </table>

      )
    }
    </>
)

}

export default CategoryListPage;