import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { signin } from '../redux-actions/userActions';
import Popup from '../components/Popup';

 const LoginPage = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const redirect = props.location.search
    ? props.location.search.split('=')[1]
    : '/';

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo, error } = userSignin;

  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(signin(email, password));
  };
  useEffect(() => {
    if (userInfo) {
      props.history.push(redirect);
    }
  }, [props.history, redirect, userInfo]);
  return (
    
    <div>
        {error &&  <Popup variant="danger">{error}</Popup>}

     <form className="form" onSubmit={submitHandler}>
        <div>
          <h1 className="text-align">Login</h1>
        </div>
        <div>
          <label  htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            placeholder="Enter Email"
            required
            onChange={(event) => setEmail(event.target.value)}
          ></input>
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Enter Password"
            required
            onChange={(event) => setPassword(event.target.value)}
          ></input>
        </div>
        <div>
          <label />
          <button className="btn" type="submit">
            Login
          </button>
        </div>
        <div>
          <label />
          <div className="signup">
          Don't have an account? {" "}<Link to={`/signup?redirect=${redirect}`} style={{color: "red"}}>Create An Account</Link>
          </div>
        </div>
      </form>

</div>
  );
}


export default LoginPage;