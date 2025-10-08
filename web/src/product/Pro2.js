import React from 'react'
import './por2.css'
import lefticon from '../images/lefticon.svg';
import righticon from '../images/righticon.svg';
import Order from '../mapping/Order';
import { Link } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import { addTocart,deleteFromCart } from '../redux/Slice';

const Pro2 = () => {
  const cartitems = useSelector((state) => state.cart.cartitems);

    const dispatch = useDispatch();


    const addCart = (item) => {
        dispatch(addTocart(item))
    }

    const deleteCart = (item) => {
        dispatch(deleteFromCart(item))
    }
  return (
    <div>
        <section className='six'><p className='gift'>Home-Orders</p></section> 
           <section className='seven'></section>   
           <section className='eight'> 
            <ul className='uni'>
                <li className='left'><img src={lefticon}/></li>
             <Link to ="/order" className='orr'><li className='ico'>Festive Special</li></Link>
             <Link to ="/best"  className='orr'><li className='ico'>Best Seller</li></Link> 
             <Link to ="/drink"  className='orr'><li className='ico'>Driks</li></Link>  
             <Link to ="/food" className='orr'><li className='ico'>Food</li></Link>
             <Link to ="/red" className='orr'><li className='ico'>coffee At Home </li></Link>
        
                <li className='right'><img src={righticon}/></li>
            </ul>
</section>   
<h4 className='drink'>drinks</h4>
<section className='nine'>
    <div className='row5'> 
    {Order.map((item)=>( 
    <div className='col-17'>
    <div class="card" >
    <img src={item.image} width="150px"/>
  <div class="card-body">
    <h5 class="card-title">{item.title}</h5>
    <h6 class="card-text">{item.name}</h6>
    <p class="card-price">₹{item.price}</p>
    {
                             cartitems.find(Items => Items.id === item.id) ? (
                                 <button class="btn btn-danger cartbutton" onClick={() => deleteCart(item)} className='button2' > Remove</button>)
                                 :
                                 (<button class="btn btn-danger cartbutton" onClick={() => addCart(item)} className='button2'> Add to cart</button>)
   }
  </div>
</div>
</div>
    ))}
</div>  
</section>





    </div>
  )
}

export default Pro2