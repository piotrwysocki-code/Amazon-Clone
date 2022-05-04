import React from 'react'
import './Login.css'
import { Link, useNavigate  } from 'react-router-dom';
import { useState } from 'react';
import { auth } from "./firebase";
import { useHistory } from "react-router-dom";


function Login() {
    const nav = useNavigate();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const signIn = e => {
        e.preventDefault()

        auth
            .signInWithEmailAndPassword(email, password)
            .then((auth)=>{
                console.log(auth);
                if(auth){
                    nav('/')
                }
            })
            .catch(error => alert(error.message))
    }
    
    const register = e => {
        e.preventDefault()

        auth
            .createUserWithEmailAndPassword(email, password)
            .then((auth)=> {
                console.log(auth);
                if(auth){
                    nav('/');
                }
            })
            .catch(error => alert(error.message))
    }

  return (
    <div className="login">
        <img className="header_logo" src='/img/blackAmazonLogo.png'></img>
        <div className="login_form_box">
            <h1>Sign-in</h1>

            <div className="login_form_inputs">
                <form>
                    <h5>E-mail</h5>
                    <input value={email} onChange={e => setEmail(e.target.value)} 
                    type="email" id="email" name="email"></input>
                    <h5>Password</h5>
                    <input value={password} onChange={e => setPassword(e.target.value)}
                    type="password" id="password" name="password"></input>
                </form>
            </div>

            <div className="login_form_buttons">  
                    <button onClick={signIn}>Sign In</button>
                    <small>By signing-in you agree to the AMAZON CLONE Conditions
                        of Use & Sale. Please see our Privacy Notice, our Cookies 
                        Notice and our Interest-Based Ads Notice.
                    </small>
                    <button onClick={register} className="createAccount">Create your Amazon Account</button>
                </div>   
        </div>
    </div>
  )
}

export default Login