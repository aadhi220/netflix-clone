import React, { useEffect, useState } from "react";
import "./Nav.css";
export default function Nav() {
  const [black,setBlack]=useState(false)

useEffect(()=> {
  window.addEventListener("scroll",()=> {
    if(window.scrollY>600) {
      setBlack(true)
    }else {
      setBlack(false)
    }
    console.log(black);
  })
})
 
  return (
    <div className={`navbar ${black && 'navblack'} `}>
      <img width={'100px'} src="https://www.freepnglogos.com/uploads/netflix-logo-0.png" alt="" />
      
    </div>
    
  );
}
