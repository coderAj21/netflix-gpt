import React,{useEffect} from 'react';
import { auth } from '../utils/firebase';
import { signOut,onAuthStateChanged  } from 'firebase/auth';
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {addUser, removeUser } from '../redux/slices/userSlice';
import { userLogo,netflixLogo } from '../utils/constant';
import { toggleGptSearchView } from '../redux/slices/gptSlice';


const Header = () => {
  const userData=useSelector((store)=>(store.user));
  const toggleGpt=useSelector((store)=>(store.gpt?.showGptSearch));
  const dispatch=useDispatch();
  const navigate=useNavigate();

  function handleSignOut(){
    // sign out method by firebase
    signOut(auth).then(() => {
      if (toggleGpt)dispatch(toggleGptSearchView());
    }
    ).catch((error) => {
      console.log(error.message);
    });
  }
  const handleGptSearchClick=()=>{
    dispatch(toggleGptSearchView());     
  }

  useEffect(()=>{
    // It is used for checking the state either user sign in or sign out
    const unsubscribe=onAuthStateChanged(auth, (user) => {
      if (user) {
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
    });
    return ()=>unsubscribe();
  },[]);

  return (
    <div className="absolute max-sm:px-2 md:px-8 py-6 px-12 w-full bg-gradient-to-b from-black z-20 flex justify-between ">
      <NavLink to={"/"}>
        <div className="w-44 md:w-36 max-sm:w-20 fill-[#e50914]">
          {netflixLogo}
        </div>
      </NavLink>
      {
        userData && (
          <div className='flex flex-row justify-end gap-x-6 h-9 max-sm:h-6 max-sm:gap-x-2'>
            <button className='px-3 py-1 bg-purple-800 text-white text-[13px] rounded font-semibold hover:bg-purple-900'
                onClick={handleGptSearchClick}>
                {toggleGpt?"Home":"GPT"}
            </button>
            {
              !toggleGpt && 
              <button
              className='z-50 px-2 font-bold text-white text-[13px] bg-[#e50914] rounded hover:bg-[#e50914df]'
              onClick={handleSignOut}
              >Sign Out
              </button>
            }
          </div>
        )
      }
    </div>
  );
};

export default Header;