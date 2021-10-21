import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import{BrowserRouter, Route, Link} from "react-router-dom";
import { signout } from "./redux-actions/userActions";
import Sidebar from "./components/SideBar";
import CartPage from "./views/CartPage";
import DeliveryPage from "./views/DeliveryPage";
import HomePage from "./views/HomePage";
import LoginPage from "./views/LoginPage";
import OrderDetailsPage from "./views/OrderDetailsPage";
import OrderHistoryPage from "./views/OrderHistoryPage";
import PaymentPage from "./views/PaymentPage";
import PlaceOrderPage from "./views/PlaceOrderPage";
import ProductPage from "./views/ProductPage";
import ProfilePage from "./views/ProfilePage";
import SignupPage from "./views/SignupPage";
import WishListPage from "./views/WishListPage";
import ReservationPage from "./views/ReservationPage";
import PrivateRoute from './components/PrivateRoute';
import * as BsIcons from "react-icons/bs";
import AdminRoute from "./components/AdminRoute";
import ProductListPage from "./views/ProductListPage";
import ProductEditPage from "./views/ProductEditPage";
import CategoryEditPage from "./views/CategoryEditPage";
import ProductAddPage from "./views/ProductAddPage";
import CategoryAddPage from "./views/CategoryAddPage";
import OrderListPage from "./views/OrderListPage";
 import ReservationListPage from "./views/ReservationListPage";
import CategoryListPage from "./views/CategoryListPage";
import UserListPage from "./views/UserListPage";
import UserEditPage from "./views/UserEditPage";
import Search from "./components/Search";
import SearchPage from "./views/SearchPage";
import { useEffect } from "react";
import { listProductCategories } from "./redux-actions/productActions";
import DashboardPage from "./views/DashboardPage";
import ScrollToTop from "./components/ScrollToTop";
function App() {

  const [open, setOpen] = useState(false);
  const cart = useSelector(state=>state.cart);
   const {cartItems} = cart
  // const wishlist = useSelector(state=>state.cart);
  //  const {wishlistItems} = wishlist

   const userSignin = useSelector(state => state.userSignin);
   const {userInfo} = userSignin;
   const dispatch = useDispatch()
   const logoutHandler=()=>{
     dispatch(signout())
   }
useEffect(()=>{
  dispatch(listProductCategories())
},[dispatch])

  return (<BrowserRouter>
  <ScrollToTop></ScrollToTop>
    <div  className="grid-container">
      
    <header className="header-row" onClick={()=> setOpen(false)}>
        <div><Link className="brand" to="/"><i className="fas fa-concierge-bell"></i> ChidesKitchen</Link></div>
        <Route render={({history})=> <Search history={history}></Search>} />
    </header>  
   
    <nav className="row" >
    <div onClick={()=> setOpen(false)}>
      { userInfo && userInfo.isAdmin &&
     <Sidebar ></Sidebar>
      }
      {  
      (userInfo &&  !userInfo.isAdmin)  &&
      <Sidebar></Sidebar>
    }

    {!userInfo  && <Sidebar></Sidebar>}

</div>

    <div>
         <Link   onClick={()=> setOpen(false)} className="float" to="/cart">
           {/* <span className="name"> Cart</span> */}
           <img src="/cart.svg" style={{height:"2.3rem", marginBottom:"-3px",marginLeft:"-.2rem" }} alt=""/>
        
           <span  className="cart-count">{cartItems.length}</span>
         
         </Link>
         <Link   onClick={()=> setOpen(false)} className="float" to="/wishlist">
           {/* <span className="name"> Cart</span> */}
           {/* <img src="/cart.svg" style={{height:"2.3rem", marginBottom:"-3px",marginLeft:"-.2rem" }} alt=""/>
         */}
         {/* <span style={{ marginRight:"2rem"}}>
           <span  style={{fontSize:"2.3rem"}} className=" fa fa-heart"></span>
           <span style={{fontWeight:"bold"}}>{wishlistItems.length}</span>
           </span> */}
         </Link>
         
         {
           userInfo? 
           (
           <div className="dropdown">
             <div  >
             <BsIcons.BsFillPersonFill  onClick={()=> setOpen(!open)} style={{fontSize:"3rem", marginBottom:"-.5rem",color:"white"}} />
            <Link className="name"  onClick={()=> setOpen(!open)} to="#">
                {userInfo.name}{!open ?<i style={{ marginLeft:".5rem"}} className="fa fa-caret-down"></i> : 
              <i style={{ marginLeft:".5rem"}} className="fa fa-caret-up"></i>}
                </Link>
                </div>
               {open && <ul className="dropdown-content"  onClick={()=> setOpen(!open)}>
              <li><Link className="logout" to="/wishlist" ><i className="fa fa-heart"> Wishlist</i></Link></li> 
              <li><Link className="logout" to="/order-history" ><i className="fas fa-clipboard"> Order History</i></Link></li> 
              <li><Link className="logout" to="/reservations" ><i className="fas fa-clipboard"> Reservation</i></Link></li> 
              <li><Link className="logout" to="/account"><i className="fa fa-cog"> Account </i> </Link></li> 
              <li><a className="logout" href="/" onClick={logoutHandler}> <i className="fas  fa-sign-out-alt"> Logout</i> </a></li> 
             </ul>}
             
           </div>
             )
           :
           (<>
           
           <Link className="float" style={{fontWeight:"bold", marginRight:"1rem"}} to="/login">Login</Link>
           </>
           )
         }
          
     </div>
    {/* <Sidebar></Sidebar> */}

      </nav>



    <main  onClick={()=> setOpen(false)}>

      <Route path="/search/food/:name?" exact component={SearchPage}/>
      <Route path="/search/category/:category" exact component={SearchPage}/>
      <Route path="/search/category/:category/food/:name/pageNumber/:pageNumber" exact component={SearchPage}/>
      <Route path="/order/:id?" component={OrderDetailsPage}/>
      <Route path="/wishlist/:id?" component={WishListPage}/>
      <Route path="/cart/:id?" component={CartPage}/>
      <Route path="/product/:id" exact component={ProductPage}/>
      <Route path="/product/:id/add" exact component={ProductAddPage}/>
      <Route path="/category/:id/add" exact component={CategoryAddPage}/>
      <Route path="/product/:id/edit" exact component={ProductEditPage}/>
      <Route path="/category/:id/edit" exact component={CategoryEditPage}/>
      <Route path="/order-history" component={OrderHistoryPage}/>
      <Route path="/order-now" component={PlaceOrderPage}/>
      <Route path="/payment-method" component={PaymentPage}/>
      <Route path="/delivery" component={DeliveryPage}/>
      <Route path="/signup" component={SignupPage}/>
      <Route path="/login" component={LoginPage}/>
      <PrivateRoute  path="/account"
            component={ProfilePage}
          ></PrivateRoute>
      <PrivateRoute  path="/reservations"
            component={ReservationPage}
          ></PrivateRoute>
      {/* <Route path="/account" component={ProfilePage}/> */}
      <AdminRoute path="/user/:id/edit" exact component={UserEditPage}/>
      <AdminRoute path="/dashboard" exact component={DashboardPage}/>

      <AdminRoute path="/category-list"
        component={CategoryListPage}
        >
      </AdminRoute>
      <AdminRoute path="/users"
        component={UserListPage}
        >
      </AdminRoute>
      <AdminRoute path="/food-list/pageNumber/:pageNumber"
        component={ProductListPage} exact
        >
      </AdminRoute>
      <AdminRoute path="/food-list"
        component={ProductListPage}
       exact >
      </AdminRoute>

     
     
      <AdminRoute path="/reservation-list"
        component={ReservationListPage}
        >
      </AdminRoute>
      <AdminRoute path="/order-list"
        component={OrderListPage}
        >
      </AdminRoute>
       <Route path="/pageNumber/:pageNumber"   component={HomePage}
        exact/>
       <Route path="/"   component={HomePage}
        exact/>
    
    </main> 
    <footer className="footer" onClick={()=> setOpen(false)}>
      
     <div className="footer-container">
<div className="footer-row">
  <div className="footer-col">
    <h4>Kitchen</h4>
    <ul>
      <li><a href="test.js">About Us</a></li>
      <li><a href="/order-history">Orders</a></li>
      <li><a href="/reservations">Reservations</a></li>
     <li><a href="/account">Account</a></li>
    </ul>
  </div>
  <div className="footer-col">
    <h4>Affiliate Programs</h4>
    <ul>
      <li><a href="test.js">ChideStore</a></li>
      <li><a href="test.js">Chides Technologies</a></li>
      <li><a href="test.js">ChidesLands</a></li>
    </ul>
  </div>
  <div className="footer-col">
    <h4>Follow Us On</h4>
    <div  className="socials">
      <a href="test.js"><i className="fab fa-facebook-f"></i></a>
      <a href="test.js"><i className="fab fa-twitter"></i></a>
      <a href="test.js"><i className="fab fa-instagram"></i></a>
      <a href="test.js"><i className="fab fa-linkedin-in"></i></a>
    </div>
  </div>
  <div className="footer-col">
    <h4>Subscribe to our NewsLetter</h4>
    <ul>
      <li><input style={{backgroundColor: "transparent"
       , padding:"1rem 1.6rem", border:"1px solid white", fontSize:"1.5rem", color:"white"}} type="email" placeholder="Email"/></li>
      <li><button style={{backgroundColor: "red", cursor:"pointer", color:"white", padding:"1rem", border:"1px solid red", borderRadius:"3px"}} >Submit</button></li>
    </ul>
  </div>
</div>
     </div>
      </footer>
      <a href="https://desmondnwosu.netlify.app">
      <div className="copyright row center">By ChidesTechnologies @2021</div>
      </a>
      
 </div>
 </BrowserRouter>);
}

export default App;
