
import './Pro1.css';
import lefticon from '../images/lefticon.svg';
import righticon from '../images/righticon.svg';
import Gift from '../mapping/Gift';
import { useSelector,useDispatch } from 'react-redux';
import { addTocart,deleteFromCart } from '../redux/Slice';

const Pro1 = () => {
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
   <section className='six'><p className='gift'>Home-giftcards</p></section> 
   <section className='seven'></section>   
   <section className='eight'> 
    <ul className='uni'>
        <li className='left'><img src={lefticon}/></li>
        <li className='ico'>FEATURED</li>
        <li className='ico'>ANYTIME</li>
        <li className='ico'>CONGRATULATIONS</li>
        <li className='ico'>THANK YOU</li>
        <li className='ico'>FESTIVE SPECIAL</li>
        <li className='right'><img src={righticon}/></li>
    </ul>
    </section>   
    <h1 className='any'>Anytime</h1>
    <hr></hr>
    <section className='nine'>
    <div className='row5'> 
    {Gift.map((item)=>( 
    <div className='col-17'>
    <div class="card" >
    <img src={item.image} width="200px"/>
  <div class="card-body">
    <h5 class="card-title">{item.title}</h5>
    <p class="card-text">{item.name}</p>
    {
                             cartitems.find(Items => Items.id === item.id) ? (
                                 <button class="btn btn-danger cartbutton" onClick={() => deleteCart(item)} className='button2' > Remove</button>)
                                 :
                                 (<button class="btn btn-danger cartbutton" onClick={() => addCart(item)} className='button2' > Apply offer</button>)
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

export default Pro1