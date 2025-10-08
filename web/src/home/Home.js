import React from 'react'
import './Home.css';
import bone from '../images/bone.jpg';
import bthree from '../images/bthree.jpg';
import bfour from '../images/bfour.jpg';
import star3 from '../images/star3.jpg';
import star4 from '../images/star4.jpg';
import star5 from '../images/star5.jpg';
import star6 from '../images/star6.jpg';
import cofee from '../images/cofee.jpg';


const Home = () => {
  return (
    <div>
   <section className='one'>
    Starbucks
    <button className='but1'>know more</button>

   </section>
<section className='two'>
  <div id="carouselExampleDark" class="carousel carousel-dark slide">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="10000">
     <div class='slide1'>
      <img className='img1' src={bone}  width="100px"/>
      <div class="carousel-caption d-none d-md-block">
        <h4>Reward members</h4>
        <h5>Execlusive Beverages</h5>
        <p>Enjoy our two new beverages, Chocolate Foam Cold Brew & Jaggery Cloud Latte, exclusively for members!.</p>
      </div>
    </div>
     </div>
      
    <div class="carousel-item" data-bs-interval="2000">
      <div class="slide2">
        <img className='img2' src={bthree}  width="100px"/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Try the Blonde Roast</h5>
        <p>Bright, sweet citrus notes and a smooth body makes this a classic.</p>
      </div>
    </div>
      </div>
      
    <div class="carousel-item">
      <div className='slide3'>
        <img className='img3' src={bfour}  width="100px"/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Beverage Subscription</h5>
        <p>Starbucks Subscription is Back! Sip Your Favourites for Less. Tap for Details. T&C Apply.</p>
      </div>
      </div>
      
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>  
</section>
<section className='three'>
  <p className='h1'>Handcrafted Curations</p>
  <div className='roww'>
    <div className='col1'><img className='star' src={star3}width="180px"/><br/>
    Drinks</div>
    <div className='col2'><img className='star' src={star4}width="180px"/><br/>
    Food</div>
    <div className='col3'><img className='star' src={star5}width="180px"/><br/>
    Marchandise</div>
    <div className='col4'><img className='star' src={star6}width="180px"/><br/>
    Coffee at Home</div>
    
  </div>
</section>
<section className='four'>
    <h1 className='cof2'>Learn more about the world of coffee!</h1>
    <div className='image-container'>
    <img  className="ph1"src={cofee} width="65%"/> 
    <div className="text-over-image">
      <h1 className='art'>Art and being of Coffee brewing</h1>
    <h3 className='cof'>Master the perfect brew with Starbucks! Learn the art and science of coffee brewing.</h3>
    <button className='but2'>Learn More</button> 
    </div>
    
    </div>
     
</section>

    </div>
  )
}

export default Home