import React, { useState } from 'react';
import Header from './Header';
import {validateFormData} from "../utils/validate";
import {createUserWithEmailAndPassword,signInWithEmailAndPassword,updateProfile} from "firebase/auth";
import {auth} from "../utils/firebase";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from '../redux/slices/userSlice';


const Login = () => {
    const [isUser,setIsUser]=useState(true);
    const [checkError,setCheckError]=useState({});
    const[formData,setFormData]=useState({
        name:"",email:"",password:""
    });
    const navigate=useNavigate();
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
        if (!isUser && !res.email && !res.password){
            console.log("New User");
            createUserWithEmailAndPassword(auth, formData.email, formData.password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log("1");
                // Update the Existing Profile...
                updateProfile(user, {
                    displayName: formData.name, photoURL:"https://avatars.githubusercontent.com/u/127975606?v=4",
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
                    navigate("/browse");

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
        }if (isUser && !res.email && !res.password){
            console.log("Sign in");
            signInWithEmailAndPassword(auth, formData.email, formData.password)
                .then((userCredential) => {
                    const user = userCredential.user;
                    console.log(user);
                    // navigate("/browse");
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
    <div className='relative'>
        <Header/>
        <div className='absolute max-w-[95%]'>
            <img src={'https://assets.nflxext.com/ffe/siteui/vlv3/b4c7f092-0488-48b7-854d-ca055a84fb4f/5b22968d'
            +'-b94f-44ec-bea3-45dcf457f29e/IN-en-20231204-popsignuptwoweeks-perspective_alpha_website_large.jpg'}
            alt="logo"
            className="brightness-50 scale-110 object-fit overflow-hidden"
            ></img>
        </div>
        <div 
        className='absolute w-3/12 bg-[rgba(0,0,0,.75)] border-black my-36 mx-auto left-0 right-0 text-white '>
            <form className='flex flex-col p-12' onSubmit={submitHanlder}>
                <h1 className='font-semibold text-3xl my-4 mx-4'>{isUser?"Sign In":"Sign Up"}</h1>
                {
                    !isUser && (
                        <input type='text' placeholder='Name '
                         className='p-4 m-4 w-11/12 bg-[#333] text-[#fff] rounded
                        outline-none hover:outline hover:outline-[#e87c03]'
                        name="name"
                        value={formData.name}
                        onChange={changeHanlder}></input>
                    )
                }
                <input type='email' placeholder='Email or Phone Number'
                className="p-4 m-4 w-11/12 bg-[#333] text-[#fff] rounded outline-none hover:outline hover:outline-[#e87c03]"
                name='email'
                value={formData.email}
                onChange={changeHanlder}></input>

                <p className='mx-5 text-[13px] -mt-3 w-11/12 text-[#e87c03]'>{checkError && checkError.email}</p>

                <input type='password' placeholder='Password'
                className='p-4 m-4 w-11/12 bg-[#333] text-[#fff] rounded outline-none hover:outline hover:outline-[#e87c03]'
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
                <p className='m-4'>{isUser?"New to Netflix ? ":"Already Registered ? "}
                <span className='hover:underline cursor-pointer'
                onClick={()=>{
                    setIsUser(!isUser)
                    setCheckError({});

                }}>{isUser?"Sign up now":"Sign in now"}</span></p>
            </form>
        </div>

    </div>
  )
}

export default Login