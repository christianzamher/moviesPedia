import React from 'react'
import { Navigate } from "react-router-dom"

const CardList = () => {
  let token = sessionStorage.getItem("token")
  
  return (
    <>
    {!token && <Navigate to="/" />}
    <div>CardList</div>
    </>
  )
}

export default CardList