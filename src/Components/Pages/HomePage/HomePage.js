import React from 'react';
import {useHistory} from 'react-router-dom';
import styled from 'styled-components';
import {userLogin} from '../../../Redux/Actions/ActionCreators';
import {useDispatch,useSelector,connect}from 'react-redux';
import{useEffect, useState} from 'react';
import{ Button} from '../../../Shared/Button';


const Title = styled.div`
  font-size: 1.1em;
  margin:100px 400px;
  background-color:	#7FFFD4;
  padding:100px 200px;
  color:black;
`;




const HomePage=()=> {
    const history=useHistory();
   const dispatch=useDispatch();
    const [username,setName]=useState("");
    const [password,setPass]=useState("");
    var loginStatus=useSelector(state=>state.isLogin);
    

const setUsername=(event)=>{
     setName(event.target.value);
}
const setPassword=(event)=>{
    setPass(event.target.value);

}
 const getDetails =(event)=>{
    
               dispatch(userLogin(username,password))
               event.preventDefault();
     }
 const registerPage=(event)=>{
            history.push('/register');
          }

useEffect(()=>{
    if(loginStatus)
    { 
        history.push('/login');  
    }
    else
    {
       history.push('/');
    }} ,[loginStatus]);

    return(<Title>
        <form onSubmit={getDetails}>
          <label htmlFor="username" placeholder="User name" name="username">UserName</label>
          <input type="text" id="username"name="username" className="userName"  onChange={setUsername} required></input>  
          <label htmlFor="password" name="password">Password</label>
          <input type="password" id="password" name="password" onChange={setPassword} autoComplete="on" required></input>  
          <Button type="submit" id="submit" className="Submit">Login</Button >  <span>    </span> <Button type="button" onClick={registerPage}>Register</Button>
        </form>
    </Title>);
}
 

export default HomePage;

