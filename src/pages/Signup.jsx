import React from "react";
import styled from "../styles/signup.module.css"
import Backgroundimage from "../components/Backgroundimage";
import Header from "../components/Header.jsx"
const Signup=()=>{
    return(
        <div>
            <Backgroundimage/>
            <Header/>
            <div className={styled.content}>
                <div className={styled.wrapper}>
                <div className="body.flex.column.a-center j-center">
            <div className="text flex colunm">
                <h1>Unlimited movies, Tv shows and more</h1>
                <h4>Watch anywhere.Cancel anytime </h4>
                <h6>Ready to watch? Enter your email to create or restart memebership</h6>
                <div className="form">
                    <input type="email" placeholder="Email Address" name = "email" />
                    <input type="password"  placeholder="Password" name ="password"/>
                    <button>Get Started</button>
                </div>
                <div>
                    <button>Log In</button>
                </div>
            </div>
            </div>

        </div>

                </div>

            </div>
            
    )
   
}
export default Signup