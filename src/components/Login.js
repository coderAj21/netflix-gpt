import React, { useState } from 'react';
import Header from './Header';
import {validateFormData} from "../utils/validate";
import {createUserWithEmailAndPassword,signInWithEmailAndPassword,updateProfile} from "firebase/auth";
import {auth} from "../utils/firebase";
import { useDispatch } from 'react-redux';
import { addUser } from '../redux/slices/userSlice';
import {userLogo, netflixBackground } from '../utils/constant';


const Login = () => {
    const [isUser,setIsUser]=useState(true);
    
    const [checkError,setCheckError]=useState({});
    
    const[formData,setFormData]=useState({
        name:"",email:"",password:""
    });
    
    
    const dispatch=useDispatch();

    function changeHanlder(event){
        const{name,value}=event.target;
        setFormData((prev)=>(
            {
                ...prev,
                [name]:value
            }
        ))
    }

    function submitHanlder(event){
        event.preventDefault();
        const res=validateFormData(formData.email,formData.password);
        setCheckError(res);
        // Sign up
        if (!isUser && !res.email && !res.password){
            console.log("New User");
            createUserWithEmailAndPassword(auth, formData.email, formData.password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log("1");
                // Update the Existing Profile...
                updateProfile(user, {
                    displayName: formData.name, photoURL:userLogo,
                  }).then(() => {
                    const {uid,email,displayName,photoURL} = auth.currentUser;
                    dispatch(addUser({
                    uid:uid,
                    email:email,
                    displayName:displayName,
                    photoURL:photoURL
                    }));
                    console.log("3");
                    console.log("New user...");
                    console.log(user);
                  }).catch((error) => {
                    console.log(error.message);
                    setCheckError((prev)=>({
                        ...prev,
                        error:"User is Already Registered.."
                    }));
                  });
            })
            .catch((error) => {
                console.log(error.message);
                setCheckError((prev)=>({
                    ...prev,
                    error:"User is Already Registered.."
                }))
            });
        }
        // Sign in
        if (isUser && !res.email && !res.password){
            console.log("Sign in");
            signInWithEmailAndPassword(auth, formData.email, formData.password)
                .then((userCredential) => {
                    const user = userCredential.user;
                    console.log(user);
                })
                .catch((error) => {
                    console.log(error.message);
                    setCheckError((prev)=>({
                        ...prev,
                        error:"User is not Found....."
                    }))
                });
        }
    }

  return (
    <div className='relative w-screen h-screen'>
        <Header/>
        <div className='absolute h-full w-full overflow-hidden'>
            <img src={netflixBackground}
            alt="logo"
            className="brightness-50 h-full w-full object-cover scale-110"
            ></img>
        </div>
        <div 
        className='absolute w-3/12 max-sm:w-9/12 max-md:w-5/12 bg-[rgba(0,0,0,.75)] mt-[8%] max-md:mt-[15%] max-sm:mt-[40%] border-black mx-auto left-0 right-0 text-white '>
            <form className='flex flex-col px-12 py-6 max-sm:px-8' onSubmit={submitHanlder}>
                <h1 className='font-semibold text-3xl my-4 mx-4 max-sm:text-2xl'>{isUser?"Sign In":"Sign Up"}</h1>
                {
                    !isUser && (
                        <input type='text' placeholder='Name '
                         className='p-4 my-2 mx-4 w-11/12 bg-[#333] text-[#fff] rounded
                        outline-none hover:outline hover:outline-[#e87c03]'
                        name="name"
                        value={formData.name}
                        onChange={changeHanlder}></input>
                    )
                }
                <input type='email' placeholder='Email or Phone Number'
                className="p-4 m-4 w-11/12 max-sm:text-sm bg-[#333] text-[#fff] rounded outline-none hover:outline hover:outline-[#e87c03]"
                name='email'
                value={formData.email}
                onChange={changeHanlder}></input>

                <p className='mx-5 text-[13px] -mt-3 w-11/12 text-[#e87c03]'>{checkError && checkError.email}</p>

                <input type='password' placeholder='Password'
                className='p-4 m-4 w-11/12 max-sm:text-sm bg-[#333] text-[#fff] rounded outline-none hover:outline hover:outline-[#e87c03]'
                name='password'
                value={formData.password}
                onChange={changeHanlder}></input>

                <p className='mx-5 text-[13px] -mt-3 w-11/12 text-[#e87c03]'>{
                    checkError && (
                        checkError.password?checkError.password:<span className='text-lg'>{checkError.error}</span>
                    )
                }</p>

                <button className='py-3 font-semibold my-4 mx-4 bg-[#e50914] w-11/12 rounded hover:bg-[#e50914df]'
                type='submit'
                onClick={submitHanlder}>{isUser?"Sign In":"Sign Up"}</button>
                <p className='mt-4 mx-4 max-sm:text-[15px] text-[#737373]'>{isUser?"New to Netflix ? ":"Already Registered ? "}
                <span className='hover:underline cursor-pointer text-white'
                onClick={()=>{
                    setIsUser(!isUser)
                    setCheckError({});

                }}>{isUser?"Sign up now.":"Sign in now."}</span></p>
            </form>
            <div className='w-11/12 mx-2 p-1 max-sm:text-sm text-[#737373]'>
                <p>Email:user003@gmail.com</p>
                <p>password:Coder@101</p>
            </div>
        </div>
    </div>
  )
}

export default Login;