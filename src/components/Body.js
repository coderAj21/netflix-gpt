import React, { useEffect } from 'react';
import Login from './Login';
import Browse from "./Browse";
import { Route, Routes, useNavigate } from 'react-router-dom';
import { auth } from '../utils/firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { addUser, removeUser } from '../redux/slices/userSlice';
import { useDispatch } from 'react-redux';

const Body = () => {
  const dispatch=useDispatch();
  const navigate=useNavigate();

  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        console.log("2");
        const {uid,email,displayName,photoURL} = user;
        dispatch(addUser({
          uid:uid,
          email:email,
          displayName:displayName,
          photoURL:photoURL
        }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    })
  },[])



  return (
    <div>
      <Routes>
        <Route path='/' element={<Login/>}></Route>
        <Route path='/browse' element={<Browse/>}></Route>
      </Routes>
    </div>
  )
}

export default Body