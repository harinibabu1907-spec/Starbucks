import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { deleteFromCart,updateQuantity } from '../redux/Slice'


const Cart = () => {
    const cartitems = useSelector((state) => state.cart.cartitems);
    const dispatch = useDispatch();

    const deleteCart = (item) => {
        dispatch(deleteFromCart(item))
    }


    const incrementCart = (id, quantity) => {
        dispatch(updateQuantity({ id, quantity: quantity + 1 }))
    }


    const decrementCart = (id, quantity) => {
        if (quantity > 1) {
            dispatch(updateQuantity(
                { id, quantity: quantity - 1 }
            )
            )
        }
    }

  return (
    <div>
        <section className='nine'>
    <div className='row5'> 
    {cartitems.map((item)=>( 
    <div className='col-17'>
    <div class="card" >
    <img src={item.image} width="200px"/>
  <div class="card-body">
    <h5 class="card-title">{item.title}</h5>
    <p class="card-text">{item.name}</p>
    <button onClick={()=>incrementCart(item.id,item.quantity)} className='button2' >Inc</button>

     <h6>{item.quantity}</h6>

    <button onClick={()=>decrementCart(item.id,item.quantity)} className='button2'>dec</button>
                          
    <button onClick={() => deleteCart(item)}  className='button2' >Delete</button>

  </div>
</div>
</div>
    ))}
</div>  
</section>

    </div>
  )
}

export default Cart