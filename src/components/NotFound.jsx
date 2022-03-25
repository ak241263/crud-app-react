import React from 'react'
import notFound from '../Assests/images/error.png'
let myStyle={
  width: '30%',
  margin: '80px 0 0 35%'
}
export const NotFound = () => {
  return (
    <img src={notFound} alt="image" style={myStyle}>
      </img>
  )
}
