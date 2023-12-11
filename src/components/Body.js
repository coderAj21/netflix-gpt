import React from 'react';
import Login from './Login';
import Browse from "./Browse";
import { Route, Routes} from 'react-router-dom';

const Body = () => {
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