import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import {userRegister} from '../../../Redux/Actions/ActionCreators';
import styled from 'styled-components';
import {Button} from '../../../Shared/Button';

const Title = styled.h1`
  font-size: 1.2em;
  margin:100px 400px;
  background-color:springgreen;
  padding:100px 200px;
  color:raspberry;
`;


const RegisterPage =()=>{
    const history=useHistory();
     const[firstname,setFirstname]=useState('');
     const[lastname,setLastname]=useState('');
     const[username,setUsername]=useState('');
     const[password,setPassword]=useState('');
     const[senddata ,setSendata]=useState(false);

    const userEntry=(event)=>{
        setFirstname(event.target.firstname.value);
        setLastname(event.target.lastname.value);
        setUsername(event.target.username.value);
        setPassword(event.target.password.value);
        setSendata(true);
    
       event.preventDefault();
        
    }
     useEffect(()=>{
         if(senddata)
         {
            const User={firstname:firstname,lastname:lastname,username:username,password:password};
            console.log(User);
            userRegister(User);
            alert("User Successfully Registred");
            history.push('/');
         }
        
        
        
     },[senddata])
        
const gotoHome=()=>{
    history.push('/');
}
    return(<Title>
        <form onSubmit={userEntry}>
            <label htmlFor="firstname">First Name</label>
            <input id="firstname" placeholder="Firstname" type="text" name="firstname" required></input>
            <label htmlFor="lastname">Last Name</label>
            <input id="lasttname" placeholder="Lasttname" type="text" name="lastname" required></input>
            <label htmlFor="username">User Name</label>
            <input id="usertname" placeholder="Username" type="text" name="username" required></input>
            <label htmlFor="password">Pass Word</label>
            <input id="password" placeholder="password" type="password" name="password" autocomplete="on" required></input>
            <Button type="submit" className="Submit">Submit</Button>
            <Button type="button" className="Home" onClick={gotoHome}>Home</Button>
            

        </form>
        </Title>)
}
export default RegisterPage;