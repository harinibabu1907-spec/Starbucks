import React from 'react'
import './Nav.css';
import logoo from '../images/logoo.jpg';
import profile from '../images/profile.svg';
import { Link } from 'react-router-dom';

const nav = () => {
  return (
    <div>
    <section className='nav1'>
    <ul className='list'>
    <Link to ="/" className='or'><li className='or'><img src={logoo}/></li></Link> 
    <Link to ="/gift" className='or'><li>Gift</li></Link> 
    <Link to ="order" className='or'><li>Order</li></Link> 
     <li>Pay</li>
    <Link to ="/cart" className='or'><li>Store</li></Link> 
     <li className='form'>
        <input  type="search" placeholder="Search" aria-label="Search"/>
        <button type="submit" className='button2'>Search</button>
     </li>
     <li><img src={profile}/></li>
    </ul>
       </section>


    </div>
  )
}

export default nav
