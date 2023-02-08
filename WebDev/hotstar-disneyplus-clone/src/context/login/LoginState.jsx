import React from "react";
import LoginContext from "./LoginContext";
import { useState } from "react";

const LoginState=(props)=>{

    
    const initUserState ={
         
        name:"",
        email:"",
        photo:""
    };

    const [userState, setUserState]=useState(initUserState);

    const setLoginState= (username, useremail, userphoto)=>{

        setUserState({

            name:username,
            email: useremail,
            photo: userphoto

        });
    }

    const setLogoutState=()=>
    {
        setUserState(initUserState);
    }


    return(
        <LoginContext.Provider value={{userState, setLoginState, setLogoutState}}>
            {props.children}
        </LoginContext.Provider>
    )
}


export default LoginState