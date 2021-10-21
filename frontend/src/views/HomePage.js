import React, {  useEffect} from "react";
import Product from "../components/Product";
import Popup from "../components/Popup";
import { useDispatch, useSelector } from "react-redux";
import { listCategories, listProducts } from "../redux-actions/productActions";
 import Slider from "../components/Slider";
import { LinearProgress } from "@material-ui/core";
import { useParams } from "react-router";
import {Swiper, SwiperSlide} from "swiper/react";
import SwiperCore, {Navigation, Autoplay} from "swiper";
import CategoryItem from '../components/CategoryItem';
import styled from '@emotion/styled';
import "swiper/swiper-bundle.min.css";
import { Link } from "react-router-dom";
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
.box-group{
  
  display: flex;
  justify-content: space-around;
  align-items: center;
 background:#e7e393;
  padding: 5rem 0;
  padding-top: 19rem;
  padding-bottom: 15rem;
 


}
.box{
  width: 30%;
  color: navy;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  flex-wrap: wrap;
}
.box i {
 font-size: 700%;
 color:#854d27;
 
}

@keyframes animate{
  0%{
    transform : rotate(0deg)
  }

  25%{
    transform : rotate(-20deg)

  }
  50%{
    transform : rotate(0deg)
  }

  75%{
    transform : rotate(20deg)

  }
  100%{
    transform : rotate(0deg)


  }
}
@keyframes animate1{
  0%{
    margin-bottom:0rem;
  }

  25%{
    margin-bottom:1.5rem;
  }
  50%{
    margin-top:0rem;
  }
  75%{
    margin-top:1.5rem;
  }
  100%{
    margin-bottom:0rem;



  }
}

@keyframes animate2{
  0%{
    margin-left:0rem;
  }
  12.5%{
    margin-left:2rem;
  }
  25%{
    margin-left:4rem;

  }
  37.5%{
    margin-left:2rem;

  }
  50%{
    margin-left:0rem;
  }
  62.5%{
    margin-right:2rem;
  }
  75%{
    margin-right:4rem;
  }
  87.5%{
    margin-right:2rem;
  }
  100%{
    margin-bottom:0rem;



  }
}
.box img:hover{
transform: rotate(-5deg);
animation-duration: 2s;

 
}

.box h3{
color: #04030f;
z-index: 3;
text-align: center;
font-size: 1.6rem;
font-family:san-serif;
}
.box h2{
color:#04030f;
z-index: 3;
text-align: center;
font-size: 2.3rem;
margin-bottom: 1.6rem;
font-weight:bolder;

}

.round{
  padding:.3rem ;
  margin-left:-5rem;
  
}

.num{
  background: BLACK;
  color: YELLOW;
  padding:1rem 1.6rem;
  border-radius:50%;
  font-size: 2.3rem;

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
.box-group{
  flex-direction: column;
  gap:3rem;
  


}

.box{
   width: 90%;
   margin-bottom: 7rem;
}
@keyframes animate1{
  0%{
    margin-bottom:3rem;
  }
  50%{
    margin-top:3rem;



  }
  100%{
    margin-bottom:0rem;



  }
}

@keyframes animate2{
  0%{
    margin-left:0rem;
  }
  12.5%{
    margin-left:4rem;
  }
  25%{
    margin-left:8rem;

  }
  37.5%{
    margin-left:4rem;

  }
  50%{
    margin-left:0rem;
  }
  62.5%{
    margin-right:4rem;
  }
  75%{
    margin-right:8rem;
  }
  87.5%{
    margin-right:4rem;
  }
  100%{
    margin-bottom:0rem;



  }
}
}
`
const HomePage =(props)=>{
    const dispatch = useDispatch();
    const productList = useSelector((state) => state.productList);
    const{ error, products,pages, page, loading} = productList;
    const categoryList = useSelector(state=>state.categoryList);
    const {loading:loadingCategory, error: errorCategory, categories}= categoryList;
    const {name = "all", category="all", pageNumber=1} = useParams();
    // SLIDER
 

    useEffect(()=>{
        dispatch(listCategories())

   dispatch(listProducts({pageNumber}))
    },[dispatch, pageNumber]);
    const getFilterUrl =(filter)=>{
        const filterPage =  filter.page || pageNumber;
        const filterCategory = filter.category || category;
        const filterName = filter.name || name;
    return `/search/category/${filterCategory}/food/${filterName}/pageNumber/${filterPage}`

    
    }
    return(<ProjectSectionStyles>
        <div className="hero">
        <Slider autoPlay={5}></Slider>
        </div>

       <div>
        <h2 style={{textAlign:"center", marginBottom:"3rem",color:"#854d27",textShadow:"1px 1px 1px black",
         marginTop:"5rem"}}>Simple Steps</h2>
       </div>
        <div className="services">
     <div className="box-group">

     <div class="box">
       <div>
     <div  className="round"><span className="num">1</span></div>
     <i style={{height:"17rem",animation: "animate 4s infinite linear"}} className="fa fa-shopping-cart" alt=""></i>
     </div>
      <div>
       
      <h2>Order</h2>
<h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed corporis quam magni, error eveniet eaque odit nesciunt numquam magnam nobis. Pariatur, maiores. Ratione corrupti ab vel consectetur excepturi accusantium placeat!</h3>       </div>
    </div>
     <div class="box">
     <div>
     <div  className="round"><span className="num">2</span></div>

     <i style={{height:"17rem",animation: "animate1 4s infinite linear"}} className="fa fa-credit-card" alt=""></i>
     </div>

      <div>
      <h2>Online Payment</h2>
<h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed corporis quam magni, error eveniet eaque odit nesciunt numquam magnam nobis. Pariatur, maiores. Ratione corrupti ab vel consectetur excepturi accusantium placeat!</h3>       </div>
    </div>
     <div class="box">
     <div>
     <div  className="round"><span className="num">3</span></div>

     <i style={{height:"17rem",animation: "animate2 4s infinite linear"}} className="fa fa-shipping-fast" alt=""></i>

     </div>
      <div>
      <h2>Delivery To Your Doorstep</h2>
<h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed corporis quam magni, error eveniet eaque odit nesciunt numquam magnam nobis. Pariatur, maiores. Ratione corrupti ab vel consectetur excepturi accusantium placeat!</h3>       </div>
    </div>
     </div>


        </div>
        <h2 style={{textAlign:"center", marginBottom:"-10rem",color:"#854d27",textShadow:"1px 1px 1px black",
         marginTop:"5rem"}}>Categories</h2>
        <div className="container">
       <div className="project-items">
           <Swiper spaceBetween={10}  slidesPerView={2} navigation
           breakpoints={
             {640:{
               //when >=640px
               slidesPerView : 2, 
             },
            768:{
              slidesPerView : 4
            },
            1200:{
              slidesPerView:5
            }
            }
           }
           >
       {  loadingCategory ? "" :errorCategory ?"" : categories.map((c, index)=>{
           //if(index>=5) return null;
         return (<>

         <SwiperSlide navigation  key={index }>
            
             <CategoryItem className={c.name === category ? "active" : ""}  key={c.id } title={c.name}
             img={c.image} 
             desc={c.desc} url={getFilterUrl({category: c.name})}
             />
          
             

           </SwiperSlide>

       </>
       )

         
       })}
           </Swiper>
       </div>
      </div>
      <h2 style={{textAlign:"center",color:"#854d27",textShadow:"1px 1px 1px black", marginTop:"7rem"}}>Food Items </h2>
       {loading?  <LinearProgress
      style={{margin:"10% 30%",height:"2rem", color:"red"}}
     
      color="secondary"
    /> :error?(<Popup variant="danger">{error}</Popup>):
       
        (
            <>

        <ul className="products">
        {products.map((product)=>(
        <Product key={product._id}  product={product}></Product>
        ))}
        </ul>
        <br/>
        <br/>
        {/* <div className="pageBtn">
         { [...Array(pages).keys()].map(x=>{
           return (<>
           <Link className={x+1 === page ? "activePage" :""}  key={x+1}
           to={`/pageNumber/${x+1}`}
           >{x+1}</Link>
           </>)
         })
         }
        </div> */}
        <div className="pageBtn">
           {/* <Swiper spaceBetween={2}  slidesPerView={10} navigation
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
           > */}
       { [...Array(pages).keys()].map((x, index)=>{
            // if(index>=25) return null;
         return (<>

         {/* <SwiperSlide navigation  key={index }> */}
            
         <Link className={x+1 === page ? "activePage" :""}  key={x+1}
           to={`/pageNumber/${x+1}`}
           >{x+1}</Link>
          
             

           {/* </SwiperSlide> */}

       </>
       )

         
       })}
           {/* </Swiper> */}
       </div>
     
        </>
        )}
        
        </ProjectSectionStyles>
    )
};

export default HomePage;