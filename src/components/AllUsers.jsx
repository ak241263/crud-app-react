import React from 'react'
import { useEffect,useState } from 'react';
import { getUsers,deleteUser } from '../Service/api';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import { Button, TableRow } from '@mui/material';
import { margin } from '@mui/system';
import {Link} from 'react-router-dom';
let myStyle={
  margin: "50px 0 0 50px",
  width: "80%"
}
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));


export const AllUsers = () => {
  const [users,setUsers]=useState([])
  useEffect(() =>{
    getAllUsers();
  },[])
  const getAllUsers= async()=>{
    const response = await getUsers();
    console.log(response.data);
    setUsers(response.data);
  }
  const deleteUserData=async(id)=>{
    await deleteUser(id);
    getAllUsers();

  }
  return (
    <Table style={myStyle}>
      <TableHead>
          <TableRow>
            <StyledTableCell>Id</StyledTableCell>
            <StyledTableCell >Name</StyledTableCell>
            <StyledTableCell>Username</StyledTableCell>
            <StyledTableCell >Email</StyledTableCell>
            <StyledTableCell>Phone</StyledTableCell>
            <StyledTableCell></StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
            users.map(user=>(
              <TableRow>
                <StyledTableCell>{user.id}</StyledTableCell>
                <StyledTableCell>{user.name}</StyledTableCell>
                <StyledTableCell>{user.username}</StyledTableCell>
                <StyledTableCell>{user.email}</StyledTableCell>
                <StyledTableCell>{user.phone}</StyledTableCell>
                <StyledTableCell>
                  <Button variant="contained" color="primary" style={{marginRight:"10px"}} component={Link} to={`/edit/${user.id}`} >Edit</Button>
                  <Button variant="contained" color="secondary" onClick={()=>deleteUserData(user.id)}>Delete</Button>
                </StyledTableCell>
              </TableRow>
            ))
          }
        </TableBody>
    </Table>
  )
}
