import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { signup } from '../redux-actions/userActions';
import Popup from '../components/Popup';


const SignupPage = (props)=> {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordsNotMatch, setPasswordsNotMatch] = useState(false);

  const redirect = props.location.search
    ? props.location.search.split('=')[1]
    : '/';

  const userSignup = useSelector((state) => state.userSignup);
  const { userInfo, error } = userSignup;

  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
   if(confirmPassword!== password){
    setPasswordsNotMatch(true)
   }else{
    dispatch(signup(name, email, password));

   }

    
  };
  useEffect(() => {
    if (userInfo) {
      props.history.push(redirect);
    }
  }, [props.history, redirect, userInfo]);
  return (
    
    <div>
        {error ?<Popup variant="danger">{error}</Popup>: passwordsNotMatch? <Popup variant="danger">Passwords Don't Match</Popup>: null}


    {/* <form className="form" onSubmit={submitHandler}>
    <div>
          <h1>Signup</h1>
  <span id="error-popup"></span>
        </div>
        {error && <Popup variant="danger">{error}</Popup>}
        <div>
    <input type="text" placeholder="Name" required onChange={(event) => setName(event.target.value)}></input>
        </div>
        <div>
    <input type="email" placeholder="Email" required onChange={(event) => setEmail(event.target.value)}></input>
        </div>
        <div>
            <input type="password" placeholder="Password" required onChange={(event) => setPassword(event.target.value)} ></input>
        </div>
        <div>
            <input type="password" placeholder="Confirm Password" required onChange={(event) => setConfirmPassword(event.target.value)} ></input>
        </div>
        <div> 
        <label/>
        <button className=" btn"  type="submit">Signup</button>
        </div>
        <div>
            <label/>
            <div> Already have an account? {" "}<Link to={`/login?redirect=${redirect}`}>Login</Link></div>
        </div>
    </form> */}
    <form className="form" onSubmit={submitHandler}>
        <div>
          <h1 className="text-align" >Create Account</h1>
        </div>
        
        <div>
          <label htmlFor="email">E-mail </label>
          <input
            type="email"
            id="email"
            placeholder="Enter E-mail "
            required
            onChange={(e) => setEmail(e.target.value)}
          ></input>
        </div>
        <div>
          <label htmlFor="name">Username</label>
          <input
            type="text"
            id="name"
            placeholder="Enter Username"
            required
            onChange={(e) => setName(e.target.value)}
          ></input>
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Enter Password"
            required
            onChange={(e) => setPassword(e.target.value)}
          ></input>
        </div>
        <div>
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            placeholder="Confirm Password"
            required
            onChange={(e) => setConfirmPassword(e.target.value)}
          ></input>
        </div>
        <div>
          <label />
          <button className="btn" type="submit">
           Sign Up
          </button>
        </div>
        <div>
          <label />
          <div>
          <div className="signup"> Already have an account? {" "}<Link
          style={{color:"red"}}
          to={`/login?redirect=${redirect}`}>Login</Link></div>

          </div>
        </div>
      </form>

</div>
  );
}


export default SignupPage;