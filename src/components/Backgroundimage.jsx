import React from "react";
import background from "../assets/background.jpg"
import styled from "../styles/background.module.css";
const Backgroundimage=()=>{
    return(
        <div className={styled.body}> 
            <img src={background}className={styled.image} alt="background" />
        </div>
    )
   
}
export default Backgroundimage