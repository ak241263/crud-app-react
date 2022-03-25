import React, { useState } from 'react'
import { FormGroup,FormControl, InputLabel,Input, Button, Typography } from '@mui/material';
import {useNavigate } from 'react-router-dom';

import {addUser} from '../Service/api';
let myStyle={
  width: "60%",
  margin: "5% 0 0 25%",
}
let myStyle1={
  marginTop: "15px"
}
const initialValues={
  name:'',
  username:'',
  email:'',
  phone:''
}


export const AddUsers = () => {
  const [user,setUser] = useState(initialValues);
  const { name,username,email,phone } = user;
  const navigate =useNavigate ();
  const onValueChange=(e)=>{
    setUser({...user,[e.target.name]:e.target.value})
  }
  const addUserDetails=async()=>{
    await addUser(user);
    navigate('/');
  } 
  return (
    <>
     <FormGroup style={myStyle}>
       <Typography variant="h4">Add User</Typography>
      <FormControl style={myStyle1}>
        <InputLabel>Name</InputLabel>
        <Input onChange={(e)=>onValueChange(e)} name='name' value={name}/>
      </FormControl>
      <FormControl style={myStyle1}>
        <InputLabel>Username</InputLabel>
        <Input onChange={(e)=>onValueChange(e)} name='username' value={username}/>
      </FormControl>
      <FormControl style={myStyle1}>
        <InputLabel>Email</InputLabel>
        <Input onChange={(e)=>onValueChange(e)} name='phone' value={phone}/>
      </FormControl>
      <FormControl style={myStyle1}>
        <InputLabel>Phone</InputLabel>
        <Input onChange={(e)=>onValueChange(e)} name='email' value={email}/>
      </FormControl>
      <Button onClick={()=>addUserDetails()} variant="contained" color="primary" style={myStyle1}>Add User</Button>
    </FormGroup></>
   
  )
}
