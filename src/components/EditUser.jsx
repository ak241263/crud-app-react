import React, { useState,useEffect } from 'react'
import { FormGroup,FormControl, InputLabel,Input, Button, Typography } from '@mui/material';
import {useNavigate,useParams } from 'react-router-dom';
import {editUser, getUsers} from '../Service/api';
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


export const EditUser = () => {
  const [user,setUser] = useState(initialValues);
  const { name,username,email,phone } = user;
  const {id} = useParams();
  const navigate =useNavigate ();
  useEffect(()=>{
    loadUserData();

  },[]);

  const loadUserData=async()=>{
    const response= await getUsers(id);
    setUser(response.data);
  }

  const onValueChange=(e)=>{
    setUser({...user,[e.target.name]:e.target.value})
  }
  const editUserDetails=async()=>{
    await editUser(id,user);
    navigate('/');
  } 
  return (
    <>
     <FormGroup style={myStyle}>
       <Typography variant="h4">Edit User</Typography>
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
      <Button onClick={()=>editUserDetails()} variant="contained" color="primary" style={myStyle1}>Edit User</Button>
    </FormGroup></>
   
  )
}
