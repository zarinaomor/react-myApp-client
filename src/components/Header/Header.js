import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'


const Header = () => {
   return (
       <header>       
               <Link to="/home" className='active'>Home</Link>
       </header>
   )
}


export default Header;