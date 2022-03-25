import React from 'react'
import { AppBar, Toolbar } from '@mui/material';
import { NavLink } from 'react-router-dom'
let myStyle={
    background: "#111111",
}
let myStyle1={
    color: "#FFFFFF",
    textDecoration: "none",
    marginRight: 20,
    fontSize: 20,
}

export const NavBar = () => {
    
    return (
    <AppBar style={myStyle} position="static">
        <Toolbar>
            <NavLink style={myStyle1} to="all" exact="true">All Users</NavLink>
            <NavLink style={myStyle1} to="add" exact="true">Add Users</NavLink>

        </Toolbar>
    </AppBar>
  )
}
