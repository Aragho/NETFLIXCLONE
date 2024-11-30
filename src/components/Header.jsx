import React from "react";
import styled from "../styles/header.module.css";
import logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";
const Header=(props)=>{
    const navigate = useNavigate();
    return(
        <div>
            <div className="logo">
                <img src={logo}className={styled.logo} alt="logo"/>
            </div>
            <button onClick ={()=>navigate(props.login?"/login":"/signup")}>{props.login ? "Log In" : "Sign In"}
                </button>


        </div>
    )
   
}
export default Header