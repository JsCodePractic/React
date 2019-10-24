import React from 'react';
import './other.css';
import Reviewsec from '../three/review/reviewSec';
import { NavLink } from 'react-router-dom'




const Other = (props) => {



  return (
    <div>
      <Reviewsec></Reviewsec>
      <NavLink to='/'>Вернуться назад</NavLink>


    </div>
  )
}




export default Other;