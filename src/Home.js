import React, { useState } from 'react'
import "./App.css";

const Home = () => {
    const [style , setStyle]=useState("cont");

  const colorChange=()=>{
    setStyle("cont2")
  }

  return (
    <>
     
    <div className={style}></div>
    <div className={style}></div>
    <div className={style}></div>
   
   
       <button className='btn btn-primary' onClick={colorChange}>
        click me
       </button>

    </>
   
  )
}

export default Home