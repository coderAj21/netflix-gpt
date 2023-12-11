import React,{useEffect} from 'react';
import { auth } from '../utils/firebase';
import { signOut,onAuthStateChanged  } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {addUser, removeUser } from '../redux/slices/userSlice';
import { userLogo,netflixLogo } from '../utils/constant';


const Header = () => {
  const userData=useSelector((store)=>(store.user));
  const dispatch=useDispatch();
  const navigate=useNavigate();

  function handleSignOut(){
    // sign out method by firebase
    signOut(auth).then(() => {}
    ).catch((error) => {
      console.log(error.message);
    });
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
    <div className="absolute py-6 px-12 w-full bg-gradient-to-b from-black z-20 flex justify-between ">
      <div className="w-44 fill-[#e50914]">
        {netflixLogo}
      </div>
      {
        userData && (
          <div className='flex gap-x-6 max-h-9'>
            <img src={userLogo}
              alt=''
              className='w-9 h-9'></img>
              <button
              className='px-2 font-bold text-white text-[13px] bg-[#e50914] rounded hover:bg-[#e50914df]'
              onClick={handleSignOut}>Sign Out</button>
          </div>
        )
      }
    </div>
  );
};

export default Header;