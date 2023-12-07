import React, { useState } from "react";
import Header from "./Header";

const Login=()=>{
    const [isUser,setIsUser]=useState(true);
    return (
        <div className="relative">
            <Header/>
            <div className="absolute">
                <img src={"https://assets.nflxext.com/ffe/siteui/vlv3/b4c7f092-0488-48b7-854d-ca055a84fb4f/5b22968d-"+
                "b94f-44ec-bea3-45dcf457f29e/IN-en-20231204-popsignuptwoweeks-perspective_alpha_website_large.jpg"}
                alt=""></img>
            </div>
            <div className="absolute p-12 bg-black w-3/12 my-36 mx-auto left-0 right-0 bg-opacity-80">
                <h1 className="my-4 text-2xl text-white">{isUser?"Sign In":"Sign Up"}</h1>
                <form className="text-white">
                    {
                        !isUser && (<div>
                            <input 
                            type="text"
                            placeholder="Name"
                            className="p-3 w-full my-4 rounded bg-gray-700"
                            ></input><br></br>
                        </div>)
                    }
                    <input 
                    type="text"
                    placeholder="Email or phone number"
                    className="p-3 w-full my-4 rounded bg-gray-700"
                    ></input><br></br>
                    <input
                     type="password" 
                     placeholder="Password"
                      className="p-3 my-4 w-full rounded bg-gray-700"
                      ></input><br></br>
                    <button className="p-3 my-6 bg-[#e50914] text-white w-full font-medium rounded">{isUser? " Sign In" : " Sign Up "}</button>
                    <p className="text-white">{isUser?"New to Netflix ?":"Already Registered ?"}<span className="text-white cursor-pointer hover:underline"
                    onClick={()=>(setIsUser(!isUser))}>{isUser? " Sign up now.  " : " Sign in now. "}</span></p>
                </form>
            </div>
        </div>
    );
};

export default Login;
